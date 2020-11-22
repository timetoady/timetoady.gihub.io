---
layout: post
title: Basketball Stat-tastic — Log of the Final Project, Week The Third 
---
#### Front-end frolics: displaying basic team, global stat adding modals, loading spinners, and modules

![Basketball players](/images/bball3.jpg)

###### *As temperatures plunge, playing ball here sounds pretty good right now... Photo by [Nick Jio](https://unsplash.com/@nicholasjio){:target="_blank"} on [Unsplash](https://unsplash.com/photos/57rD2oDZquc){:target="_blank"}.* 


Tis' the season to be thankful. This week, I am thankful for tall glasses of water, successful sports teams, antacids, and a lot more solid progress on coding this week. 


## Week 3 Progress Report

This week was much less pondering and much more doing. And, uh, getting things working instead of shouting rude things at my screen. The first order of business was to get my hand-built API displaying on my app's front end. After that, I enjoyed a nice menu of styling the team to match my sketches, adding a modal for adding stats to all players, and displaying the team name. Plus: modules!

### Topic 1: Behold the Team

Now that my routes were much more ironed out (but not completely, more on that in a bit), it was pretty simple to call it up and flex some DOM manipulation with `querySelector`, `createElement`, and `appendChild`. With that and some CSS fiddling (which is usually fiddliest part for me), behold! a basic default player display!

![Basketball Initial mobile setup](/images/basketballMobile2.png)

###### *Not too much here yet. CSS could still use fiddling. But it displays!*

I also wanted to make a place for the team name to be pulled and displayed at the top. But I forgot one tiny little thing: when I added that little datum to my schema, and marked it as required, I didn't also add it to my route. So no matter how many times I adjusted it and hammered the "Send" button in Postman, it kept giving me a "teamName field required" message, and yelling "It's **right** **there**!" didn't help. 

Adding it to the route fields did. Yup, suuuuper genius. 

### Topic 2: A Model Modal 

I needed a quick and simple way for a user to add basketball stats globally to all their players on the roster, and modals are pretty much where it's at for a task like that. But there are no extra rewards for working harder over smarter, so I did the smart thing and pulled in just a snippet of Bootstrap to govern my front end on this. Since it's for a static button on the page, it was too easy and too good to resist.

![Modal ](/images/modal1.png)

###### *If it ain't broke... Bootstrap makes it dead easy for simple parts like this, freeing up more time for me to mess up API routes.*

That wasn't to say the backend was all omelet and no broken eggs. After `querySelector`ing my way into the bits I needed from the modal's DOM, it was time to `addEventListener` to all those bits, and add/reject/respond to those new stat add requests as needed. Getting it right required going back into my API calls and making a custom one that I could call to add new special stats, but just a bit of tweaking of the others was all that was required.

What was somewhat more road-blocky and troublesome was nicely receiving and interpreting the response from those PUT calls. Some quick Googling informed me as to how to toggle the modal from JavaScript, but after that it was oddly less clear to me as to how I could get the response I wanted upon completion. Thankfully, `.then()`calls passing info and some dot notation paved the way. 

After that, it was just some frontend magic of changing `textContext` and removing a couple of things from the modal upon successful stat add, only for them to appear for use next time when you click close. I may switch it up later and allow for adding another stat immediately or close options instead.

For extra fun, I added loading spinner. It sure seems as if I will be adding one to a whole bunch of things on the app.

### Topic 3: Modules: putting my work so far in neat little boxes

With all these functions added, my `main.js` was starting to get a little chunky. So instead of spending hours just refactoring at the end, I decided to set up a module for... well, just about everything.

![Modal ](/images/module.jpg)

###### *You know you've used modules for a lot of things when your primary JS file goes from 300+ lines to, uh (checks notes) six.*

API gets, adding global stats, spinner hide and show functions... I even preparatorily made modules for creating and editing and viewing players, knowing I'd build those functions in main.js before farming them out. So far, it's kept things pretty neat.

```javascript
import getPlayers from './getPlayerData.js'
import addStatGlobal from './addGlobalStat.js'
const players = "../players";
const stats = "../stats"

getPlayers(players)
addStatGlobal()

```
###### *This is my main.js right now. It's rather trim.*


### Looking Ahead

Another big chunk planned for next week: adding the add/edit/remove player page, and the ability to sort players by their stats. I see one or two challenges lurking in there, but thankfully there's a whole week to... well, to eat food, watch basketball, work on bunch of other apps, AND this.

Priorities.