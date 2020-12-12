---
layout: post
title: Basketball Stat-tastic — Log of the Final Project, Week 5, the worst sequel
---

#### Always have to end on a make

![Basketball players](/images/bball6.jpg)

###### _This basketball roster app is dribbling off into the sunset. Photo by [Spencer Lind](https://www.pexels.com/@spencerlind1?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels){:target="\_blank"} on [Pexels](https://www.pexels.com/photo/black-basketball-hoop-1331750/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels){:target="\_blank"}._

This was quite the journey. Definitely not a physical one (anyone else feel like they've started to become part of their home office desk?) but surely a journey, full of screwups, pitfalls, frustrations, poor sleep, painstaking effort, and ultimately... success.

## Week 5 Progress Report

It was getting close to crunch time, so rather than wait for it to descend upon me, I decided it was worth the extra burst of effort to finish my last basic tasks this week. Among things on the docket: adding an IMG input, adding view and edit players pages complete with new a API call and updated routes to accommodate, and finally, a dropdown to sort the roster by stat categories.

### Topic 1: Images in Reflection

Adding a pace to edit a player image was in no way hard. But it's worth noting that I'd put off setting it up until now because I wasn't sure where I wanted to take it, design-wise.

Firebase notwithstanding, most of the options of storing images online involve a lot of extra steps that felt outside of the scope of this project. Having receiving good advice on this topic, I swayed between a few different options: allow users to link to local storage, use URLs, or use an API that supplies the user with a certain number of set images they can choose from.

In the end, simply having a spot to add a URL worked best. Yes, it was also the easiest (add an input below the picture, add it to my form and... okay, done) but from a user interaction standpoint, I just couldn't imagine a media member or coach wanting generic or local photos for their players. They needed to be actual photos of their players for quick reference. 

And frankly, most people are able to easily access URLs of their own pictures, either on companion sites, or Dropbox, or Facebook, or Github, or public Google links... there were so many online storage solutions people were already using that could be linked, it seemed silly to try to replace them.

So one input for a URL was all that was ever really needed anyway.

```javascript
let picInput = document.createElement("input");
picInput.type = "text";
picInput.name = "img";
picInput.placeholder = "Paste image URL here.";
picInput.setAttribute("class", "picInput");
picInput.value =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
picDiv.appendChild(picInput);
```
###### *Yup, this was about all it took.*

### Topic 2: Player View/Edit Pages: Drilling and Lost Routes

The View/Edit Player pages were a bit more involved. Thankfully, the Create Player page was already set up to for me to mirror in layout, so the body of the work was doing that process over again, but substituting paragraphs, h2s, and textContent for inputs, labels, and placeholders (and back again) as needed.

That didn't mean a little finagling didn't have to happen.

Two primary issues made this challenge more interesting: first, my user-created "EXTRA STATS" are great and a central part of my project, but they are kind of a pain to drill down to get to because they are so nested. (This would come back to bite me making the sorter. More on that in a bit.)

To give you an idea of how nested the data gets, here's what my JSON files downloaded from the database look like:

```json
{
  "img": "https://pbs.twimg.com/profile_images/719849962347962368/hyFkPmCe.jpg",
  "class": "JR",
  "rosterSeason": "2021",
  "role": "Doer",
  "starter": true,
  "stats": [
    {
      "minutes": 50,
      "gp": 26,
      "points": 56,
      "fga": 6,
      "fgm": 65,
      "fta": 65,
      "ftm": 65,
      "assists": 6,
      "steals": 56,
      "blocks": 5,
      "fouls": 65,
      "tos": 55,
      "off": 65,
      "def": 6,
      "otherStats": [
        {
          "DUNKS": "0"
        },
        {
          "SUPER STEALS": "0"
        }
      ],
      "_id": "5fcee2de3a796463b064a609",
      "player": "5fcee2dd3a796463b064a608",
      "reb": 71,
      "ppg": 2.1538461538461537,
      "apg": 0.23076923076923078,
      "rpg": 2.730769230769231,
      "spg": 2.1538461538461537,
      "bpg": 0.19230769230769232,
      "fgam": "65 - 6",
      "__v": 0
    }
  ],
  "_id": "5fcee2dd3a796463b064a608",
  "name": "Player with Stats",
  "teamName": "Greats",
  "number": 22,
  "height": "6-6",
  "weight": "199",
  "position": "Forward",
  "hometown": "Lolo, MT",
  "__v": 0
}
```

###### _This is the basic layout of one player in the array of players. No dunks or "super steals" for Player with Stats yet. A 6'6" guy with no dunks? Sad._

So for those keeping track at home, the `otherStats` individual stat objects are objects in an array in an object in an array. Accessing that programmatically was a bit adventurous. My code to pull in their info ends up looking kinda... spiny. Maybe eyeball-y.

```javascript
statEntries.forEach((extraStat) => {
          let extraStatPair = Object.entries(extraStat[1]);
          const extraStatDiv2 = document.createElement("div");
          extraStatsForm.appendChild(extraStatDiv2);
          let statLabel = document.createElement("label");
          statLabel.setAttribute("for", `${extraStatPair[0]}p`);
          statLabel.textContent = `${extraStatPair[0][0]}:`;
          extraStatDiv2.appendChild(statLabel);
          let aStat = document.createElement("input");
          aStat.id = `${extraStatPair[0][0]}p`;
          aStat.name = `${extraStatPair[0][0]}`;
          aStat.type = "number";
          aStat.value = `${extraStatPair[0][1]}`;
          aStat.placeholder = `${extraStatPair[0][1]}`;
          aStat.setAttribute("min", "0");
          extraStatDiv2.appendChild(aStat);
```
###### _You will now be unable to unsee all those stacked bracket zeroes as eyes staring at you, dumbfounded behind little square glasses._

The second problem: I... I didn't actually have a route on my backend that would handle data this way yet. Oops.

You could create and remove players to the moon and back, and add extra stats and change the team name until you were sick, but changing all of the details of a document was just somehow something I had skipped over.

But no worries, just send it as a JSON, receive it as `req.body`, and throw it on a `findOneAndReplace` in Node. And all is well.

Except there were plenty of problems.

First, I "happily" discovered that in its default state, both `replaceOne` and `findOneAndReplace` will delete anything from your document online that you don't include in your request. So because I wasn't specifying some things (like the non-required player info, or that ID that populates my stats from my stats documents that attach to the player), they were being excised from the document entirely. 

This was not good.

Thankfully, there's an option called `omitUndefined` to solve this issue, but implementing it was less easy than it should been. MongoDB's documentation on actually using it, especially in combination with other options (like `{new: true}`, and seriously, why are these both not the default?), doesn't give much in the way of direct examples.

It seems stupid in retrospect, but it took way too much time puzzling out exactly how this should be *formatted* than it should have.

FYI, this is how multiple options work:

```javascript
router.put("/replaceViaEdit/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const options = { omitUndefined: true, new: true }; //multiple options here
  console.log(update);//why have a console log here? Because until cleanup, I have console logs EVERYWHERE
  Player.findOneAndReplace({ _id: id }, update, options, (err, result) => {
    err ? res.send(err) : res.send(result);
  });
});
```
###### _Yeah, it seems easy. But it would sure have been nice if someone had actually, I dunno, provided a direct, specific example somewhere in the official documentation._

Second for hurdles to overcome, I needed another chain API call to make this a one-click effort. BUT! Having been through the harsh battles of callback hell, I suddenly realized that since I already HAD important details like stat and player ID I could throw out there, that my API `PUT` calls didn't actually need to wait for each other at all.

I could just wing out all three, collect the responses as they came, and give a group status report to my user.

Add a couple of modals for saving changes and removing the player entirely, a button for switching back and forth between view and edit mode, and Bob's your uncle.

![Edit Player Page](/images/editPlayer.png)

###### _The Player Edit page. As a nice bonus, I set the logic so it edits the page title at the top of the browser tab to show the name of the player you're editing. Neat! Also, mostly like Bob is neither my nor your uncle, unless he is._

### Topic 3: The Unexpected Difficulty of Sorting by Deeply Nested Values

After finally tidying up my edit issues, I was excited that I was down to just one major process left: providing users with a way to sort their roster by every available category and stat. All I had to do was go back to my roster building function, add some `options` to my `select` input on the landing page by tapping into the API `GET` I was already making, and then use that and good ol' `.sort()` with a compare function. Victory lap!

Only it wasn't. It actually sucked a lot more than that.

Part of the problem was I lacked some fundamental understanding of what the `sort` method is, and how it does its work. Reading the [MDN entry](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) helps, but I fully admit I had to call in some help to work my way through.

Also it's easy enough to throw on a `return a - b` type callback in there. But two layers of added complexity were present here: first, sorting needed to happen via a passed in variable.  Not too bad, but not a ton of examples out there. Second, and most difficult, sorting needed to happen by getting those darn nested values.

After a night grinding away at this problem (most of one, anyway: it wasn't quite getting light again this time), and I had to settle for getting close. I was missing a decent sized chunk of the picture. I knew the solution was recursion. I knew I had to have it act funnel through differently if it was a string, array, or object.

What I didn't know and do was use a function to drill into that nested object first, and then deliver it to my sorter (I sort of had that reversed). With help (seriously, big shoutout to Landon who lit the way for me) we scrounged this up:

```javascript
 // Takes the object you're comparing and the key you're comparing by
export function getObject(theObject, key) {
  var result = null;
  // if it's an array, goes the length of the array, returning the recursed key value matching the key
  if (theObject instanceof Array) {
    for (var i = 0; i < theObject.length; i++) {
      result = getObject(theObject[i], key); // recursive call!
      if (result) {
        break;
      }
    }
  } else {
    //basecase, if the prop is found in the object, returns the value
    for (var prop in theObject) {
      if (prop == key) {
        return theObject[prop];
      }
      // if it's another object or array, repeat again
      if (
        theObject[prop] instanceof Object ||
        theObject[prop] instanceof Array
      ) {
        result = getObject(theObject[prop], key); // recursive call!
        if (result) {
          break;
        }
      }
    }
  }
  return result;
}
```
###### This certainly isn't the only way to drill in, and you can probably alter it to fit your taste or be more ES6. But it works, and after a long night grasping, it was beautiful.*

With this final major function, uh, functioning (even after I tidied it, refactored it into a module, and got rid of a ton of console logs), the primary effort of the app was over. All the tier 1 functions laid out in the design phase are working, and since I've been moduling left, right, and center from nearly the beginning, there isn't even as much cleanup as there might normally be.

So with a couple of quick bug fixes, and baring no major outages, it's ready to go.

### Looking Ahead

This may be the end of this app (it's possible some more styling and UI additions will be thrown in), but through these weeks of jumping back and forth between it and other projects, it feels like I have a lot to learn just looking over parts that I did weeks ago. 

Heck, I just keep staring at those blinking eyes of the nested stat getter that I laboriously pieced together from scratch, and can't help thinking to myself: 

...how exactly does that work again? 

It feels like that's coding in a nutshell. I did this great thing!... somehow...
