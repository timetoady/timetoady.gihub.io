---
layout: post
title: Basketball Stat-tastic — Log of the Final Project, Week 5, the worst sequel
---
#### How to totally crush it coding in 24 hours (sleep? Ha!)

![Basketball players](/images/bball5.jpg)

###### *Work was done. I mean, at least a little... Photo by [Oleg Magni](https://www.pexels.com/@oleg-magni?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels){:target="_blank"} on [Pexels](https://www.pexels.com/photo/silhouette-photo-of-basketball-hoop-1040482/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels){:target="_blank"}.* 


This week was packed with tons of work... on a different project than this one. But I did cram several things into late in the week. What can I say? I like to focus on a project and punch it in when I see the goal line in sight. 

The, uh, the goal line is still a little more distant on this one. Things might get (and have already been) a bit crunchy.

## Week 5 Progress Report

Although compacted into approximately a 24 hour period ( with commits spanning from 12:34 AM to 11:23 PM of the same day), a fair number of things were accomplished. First, I realized I needed to add a general team name change function instead of having it as an input in each new player add. Then I finally, (**finally**) fixed my chain API call, did a fair amount of bug fixing, and did most of a save-player-ending navigation modal. 

PLUS... well, definitely not ULTRA. Plus more, at least.

### Topic 1: A Team By Any Other Name

Sometimes for usability reasons, you suddenly realize that where a function is located is just not going to work. I had previously set up my general roster team name to pull from whoever was the first ([0]) entry on the list, and default that for all players you add, showing it at the top. But I quickly realized that that wouldn't work: a person using the app would inevitably want to change the team name right away, first thing on the main page. That, and should you entirely remove every player from a roster, you'd be without a team name, and if you changed team names sometime along the way, you'd still have a bunch of guys on the roster with the old team name you'd have to update one by one.

To combat this, I added another modal on the landing page of the app.

![Create Player Page](/images/teamLanding1.png)

###### *Clicking on the team name at the top (in this case, "The Awesomeites") will pull up a modal that allows you to change the team name right away for every player on the roster... including the secret one.*

Now, this little dialog/modal (after no small amount of efforting in adding a new player route and front end tinkering) will instantly add your team name to every player on the roster. Not only that, but this made me realize I needed a hidden, "master" player not visible in the display area to act as my repository of info, so that unique stats and team names could be pulled from somewhere if all other players were removed from the roster.

And thus was born my "Shadow Master" player, who lurks in the background, just beyond sight...


### Topic 2: To Callback Hell and Back Again

I thought I had this fixed. I thought I had it finished. I had not.

Doing three successive API calls (to first add player general info, and then their base stats, and then the unique, user-created stats) proved a time-consuming and teeth-grinding experience. Try catch blocks, then events, responses, json, returning info to the user... it all become a big ol' blend of suck as the dreaded `SyntaxError: Unexpected token D in json at position 0` continued to rear its ugly head as I made alterations. 

But after literally pulling an all-nighter (I went to bed about 8 AM, slept four hours, got up and finished it in 30 more minutes of light route editing) this bad boy was finally, finally put to rest.

It ain't pretty. But it works.

```javascript
//POST chain for new Player/stats
export async function sendAPIStatDataChain(
  URL,
  playerInfo,
  stats,
  extraStats = {}
) {
   fetch(URL, {
    method: "POST",
    headers: {
      //Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(playerInfo),
  })
    .then((response) => response.json())
    .then((reply) => {
      console.log(reply);
      playerID = reply[0]._id;
      stats["player"] = playerID;
      console.log("Stats are:", stats);
      console.log("JSON.stringify stats", JSON.stringify(stats));
      fetch("../stats", {
        method: "POST",
        headers: {
          //Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(stats),
      })
        .then((response1) => response1.json())
        .then((reply) => {
          statsID = reply.stats[0];
          console.log(`Stats ID is showing as ${statsID}`);
          console.log(JSON.stringify(extraStats));
          fetch(`../stats/updateUniqueStats/${statsID}`, {
            method: "PUT",
            headers: {
              //Accept: "application/json",
             "Content-type": "application/json",
            },
            body: JSON.stringify(extraStats),
          })
            .then((response) => {
              finalResponse["response"] = response
              console.log("Final response", response)
              
            })

        });
        console.log("Final from API", finalResponse)
        return finalResponse
    })
    .catch((error) => console.error(error));
}
```
###### *Not exactly the most refined, elegant piece of code I've ever written. But at the end of the day (or in this case, the beginning of the next day) you just have to be happy it does what you want, and move on to other parts of your project.*

The nice thing is, this will be basically reusable with slight modification for `PUT` methods for when my peeps wish to edit their players, too. So that piece of logic is basically done. 

And broadly speaking, this API call is the centerpiece of what my app will be doing: adding and editing the massive number of player details and stats, comprising three forms. Everything else should be much less... everything from here on out.

Should be. Knock on wood.

### Topic 3: Bugs, Nav Modals, And More

The vast and cavalier changes I had to make through these steps resulted in a few irritating bugs that needed to be squashed. Incorrect replies, duplicated player rendering, broken modal parts, misnamed variables... a good culling was needed before I could proceed with the rest.

Add to that, I needed something to happen after a user saves their new player and ships off that massive chain API. So another modal, a few basic options, and an error checker, and poof.

To round things out, I **finally** started mocking up the player view logic, so that when you click on any individual player on your roster, you can get the in-depth breakdown. Nothing to show yet, but building off the create player stuff, it shouldn't be nearly as much work.

### Looking Ahead

The noted player view page, the very similar player edit page, and sorting the roster from the landing are all on the docket for this coming week. That, and anything else that needs doing, because it's deadline time, baby. 

Adieu. 