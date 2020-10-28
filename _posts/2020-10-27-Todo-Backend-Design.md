---
layout: post
title: Of Todo App Backends — hooking up a local app to an API database
---
#### This week in projects, a marriage of convenience: static site to-do app and API


There comes a time in every app's life when they need to get their front end and their back end aligned. 

In the case of my little to-do app from last month, now that's I've tumbled through the rigmarole that was setting up a NoSQL database a couple of times, it was time to take off the localStorage training wheels and actually have it talk to a database. 

Of course, it immediately crashed.

But with a lot of refactoring, and some tweaks to design and scheme, the dirty deed was done.

## A Choice of Database

The first choice was were to host this API. Really, data this level of simple (only needing to keep track of a few points for each to-do) could work a lot of places. But seeing as I already had mongoDB in my bag of tricks, spinning one out with the help of Node.js, Express, and Mongoose was the most expedient method. And thus it was done.

```javascript
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
```
###### Like the first notes of a API symphony. Or at least a jingle, maybe.

## Data Models

Before diving into the rapid-flowing stream of endpoints, I had to get my incoming data models set. I knew that I  essentially needed only three pieces of information: to-dos, category names, and whether said were complete or not.

With that in mind, I applied a very cutdown approach to my schema: categories only needs it's name since mongoDB produces them automatically; to-dos just need the to-do, category ID (which would get populated into the category's information), and completion state as a Boolean. There really wasn't much other than that this project needed. 

```javascript
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    todo: String,
    completed: Boolean,
    category: { type: Schema.Types.ObjectId, ref: 'Categories' }
    
})

module.exports = mongoose.model('Todos', TodoSchema )
```
###### Sometimes it's better just to keep things simple. At least, relatively. 

## Let Data Be Served

Setting up the database was definitely the [lesser of two weevils](https://www.youtube.com/watch?v=Y-aPp7Kiiyg) in my front-end to back-end alignment. Setting up the proper `GET`, `POST`, `DELETE`, and `PUT` methods (i.e. getting CRUD done) wasn't too groundbreaking. For a touch of nicer organization, I routed them the methods for the categories and the to-dos into their own sperate pens, lest they claw and snap at one another, and let express middleware them as "todos" and "categories" routes, respectively. 

After finagling both heroku and mongoDB Atlas cloud into talking to each other (whitelisting IPs, creating environment variables, setting Config Vars,) I had my setup complete. Or rather, as I would lean from diving into the torn battlefield that was my front-end to-do app, I had my intimal, basic setup complete.

![Config Vars](/images/configvars.png)
###### This here? Very important. Your app no worky without it. And it really isn't mentioned in either heroku or mongoDB Atlas documentation. Yay.

## Basic Design of App

One of the primary shifts in design for the front end app can be summed up in one word: asynchronization. 

Well, I didn't say it would be a short or simple word. It wasn't very short or simple to refactor, either.

Basically, my hapless to-do app based on localStorage operations was built with the idea that changes, updates, and deletions would be essentially synchronous in nature, and none too slow to boot. Alas, asynchronous API calls are not those things, especially from a combination of freemium mongoDB Atlas and heroku hosting for code and database, respectively.

So everywhere I had just casually called a function to check if it was a duplicate to-do, or pulled a list of categories for display, had to instead be shoved with needed logic into a`.then()` after an API call for the succeeding operations to wait their dang turn. Only thus altered did this did the beast [rise from its gwave](https://www.youtube.com/watch?v=EOQcnliEjXM).

```javascript
const removeSelectedCategory = (id) => {
  console.log(`Here is the category ID to delete: ${id}`);
  deleteAPIData(allTodos, `deleteAll/${id}`)
    .then(() => {
      deleteAPIData(allCategories, id);
    })
    .then(() => refreshDOM())
    .then(() => catGetter());
};
```
###### If you aren't already saying ["And then?"](https://www.youtube.com/watch?v=CkdyU_eUm1U) each time you code something like this, you will now.

Well, sort of rose. At least after all that, and also going back and add a couple more API routes: one to remove all to-do's of a selected category (because it turns out removing a category with removing the to-dos caused Errors Effusive), and one to give the right keycodes, turn keys in unison, and press the big red button to wipe both categories and to-dos clean.

Because sometimes, you just don't want to have anything to do anymore, and wanna nuke 'em all.


## A Note on Documentation

Finally, a note.

As there are far more than one way to skin a put-your-preferred-ASPCA-approved-object-here, if you want someone else to have the first idea what your code is doing, you need to document. And with very, very few exceptions, you *always* want someone to know what your code is doing. 

Because something you did might effect dependent modules down the line. Or you may have messed something up, thus obligating that next person (who doesn't have the bandwidth to jettison your dumpster-fire and start afresh) to throw on their deerstalker hat and Inverness cape, and Sherlock their way through your code, cussing you out for you laziness every couple of minutes.

I mean, not that that's ever happened to me.

![Conan figure](/images/conan.jpg)

###### *Photo by [Edo Nugroho](https://unsplash.com/@edonugroho){:target="_blank"} on [Unsplash](https://unsplash.com/photos/y890Y_WuItw){:target="_blank"}. If you've read this far, and you know this reference and how it relates to Sherlock Holmes, you are a very specific breed of geek, and we should be friends.

Anyway, it's at least basic courtesy to give a few comments on at least your weightier functions as to what they are hoping to accomplish, and then supply a `README` that covers the bare essentials. 

The Golden Rule, and all that.