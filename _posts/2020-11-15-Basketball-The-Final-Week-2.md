---
layout: post
title: Basketball Stat-tastic — Log of the Final Project, Week 2 
---
#### In which I 'finish' the backend, and start planning the front 

![Basketball players](/images/bball2.jpg)

###### *The one you take of photo of after 1000 bricks. Photo by [Markus Spiske](https://www.pexels.com/@markusspiske?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels){:target="_blank"} on [Pexels](https://www.pexels.com/photo/ball-basketball-basketball-court-basketball-hoop-1752757/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels){:target="_blank"}.* 


The plan for this week was to tidy up a few backend routes and start getting into some meaty frontend logic. Yes, that *was* the plan. The best laid schemes o' mice an' men yadda yadda something about a gang to the aft.


## Week 2 Progress Report

Adam's blog, Earth date 11/15/2020. 

It turns out, once I actually sat down and thought a while about what types of functionality my front end would need, the more I realized I would need to prepared with the average user in mind: what they would want, what they would need, and what they would probably mess up.

### Topic 1: Fixing Routes

Somehow, I had missed the whole idea that attempting to add new keys not specified in the schema doesn't fly. Once that obvious but important revelation took hold, I discovered it would be simple enough to add a new variable to the schema that could contain any number of new stat categories that might be introduced in an array. And although I knew this would make adding, deleting, and especially altering these extra stats more difficult, I figured just a modification of my standard edit info route would work.

It didn't.

Neither did the MongoDB style `$` update operator. I thought I would get all clever by combining it with tick marks to edit custom items, i.e. ``otherProps.$.${newStat}``. Nope, no effect: both updateOne and updateMany found matches `n` and always gave me `n.Modified` = nadda. 

This is what did work: updating by simply `$unset`ing a stat category from my otherProps field, and then if there is no error, re-adding a new prop to the otherProps array (via `$addToSet`, just to make extra sure of no duplicates) with a different value.

That little joyride of discover took most of the week. Other bits with routes included fixing player routes to remove stats when a player is removed, and setting up hosting on heroku.

But that wasn't all.

### Topic 2: Validation

Much smaller in time expenditure but no less important, I realized that if there was a wrong way for an end user to input something, they would do it that way sooner rather than later. Negative values, skipping essential items, strings that were waaaay too long... And thus validation was not only a must, but probably had to be on both client and server-side.

And with great amounts of data must also come great numbers of validators.

Some hours of research later, my Stats schema went from this:

```javascript
let Stats = new Schema({
    player: {type: Schema.Types.ObjectId, ref: 'Player'},
    minutes: Number,
    gp: Number,
    points: Number,
    fga: Number,
    fgm: Number,
    fta: Number,
    ftm: Number,
    assists: Number,
    steals: Number,
    blocks: Number,
    fouls: Number,
    tos: Number,
    off: Number,
    def: Number,
    reb: {type: Number, default: function() {return this.off + this.def}},
    ppg: {type: Number, default: function() {return this.points / this.gp}},
    apg: {type: Number, default: function() {return this.assists / this.gp}},
    rpg: {type: Number, default: function() {return this.reb / this.gp}},
    spg: {type: Number, default: function() {return this.steals / this.gp}},
    bpg: {type: Number, default: function() {return this.blocks / this.gp}},
    fgam: {type: String, default: function() {return `${this.fgm} - ${this.fga}`}},

  });
```

...to this:

```javascript
let Stats = new Schema({
    player: {type: Schema.Types.ObjectId, ref: 'Player'},
    minutes: {type: Number, min: 0, default: 0 },
    gp: {type: Number, min: 0, default: 0 },
    points: {type: Number, min: 0, default: 0 },
    fga: {type: Number, min: 0, default: 0 },
    fgm: {type: Number, min: 0, default: 0 },
    fta: {type: Number, min: 0, default: 0 },
    ftm: {type: Number, min: 0, default: 0 },
    assists: {type: Number, min: 0, default: 0 },
    steals: {type: Number, min: 0, default: 0 },
    blocks: {type: Number, min: 0, default: 0 },
    fouls: {type: Number, min: 0, default: 0 },
    tos: {type: Number, min: 0, default: 0 },
    off: {type: Number, min: 0, default: 0 },
    def: {type: Number, min: 0, default: 0 },
    reb: {type: Number, min: 0, default: function() {return this.off + this.def}},
    ppg: {type: Number, min: 0, default: function() {return this.points / this.gp}},
    apg: {type: Number, min: 0, default: function() {return this.assists / this.gp}},
    rpg: {type: Number, min: 0, default: function() {return this.reb / this.gp}},
    spg: {type: Number, min: 0, default: function() {return this.steals / this.gp}},
    bpg: {type: Number, min: 0, default: function() {return this.blocks / this.gp}},
    fgam: {type: String, default: function() {return `${this.fgm} - ${this.fga}`}},
    otherProps: [],

  });
```
###### That's some extra beef on that code. And I prolly ain't done.

The player info scheme got a similar but less caloric upgrade. I also needed to throw on a couple extra things, like team name and a place to add a URL for an image (which I may ditch, we'll see). And even after all this, I just know there's some bug waiting to bite me in the butt from some common user story, much less the more infrequent event combinations. 

But wait, there's more!

### Topic 3: Planning the front, listing objectives, planting the seeds

Now that the back end had tentatively been established, it was time to start bringing the UI and frontend JavaScript from the optimistically sketched to the verbosely sketched, lest I waste time on functions that go nowhere. 

I needed to start listing exactly what task my design called for before I built another massive DOM building battleship of an app. Needs include setting up API calls, sorting, rendering, and modals.

Also, just to give myself a visual starting point, I plopped in a mobile-focused top layout. I had decided that I would approach this app much more mobile-first than some of the previous efforts. Those all *had* mobile adjustments, but all were made from the angle of serving desktop users first, and then tweaked to look good enough on mobile.

This time I would do the opposite.

![Picuter](/images/basketballMobile1.png)

###### *It's a start.*

### Looking Ahead

Time to wade armpits-deep into the awesome sauce of the frontend: modules, mechanics, API calls, and DOM. 

Like for real this time.