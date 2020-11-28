---
layout: post
title: Basketball Stat-tastic — Log of the Final Project, Week V.I. (Victory Incremental)
---
#### Style slogging, validation vetting, tooltip tapping, and %$#% #$%^#$ API call chaining

![Basketball players](/images/bball4.jpg)

###### *It was a long, dark week for basketball apps.. Photo by [Oleg Magni](https://www.pexels.com/@oleg-magni?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels){:target="_blank"} on [Pexels](https://www.pexels.com/photo/silhouette-photo-of-basketball-hoop-1040482/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels){:target="_blank"}.* 


And who says people never get anything done on vacation weeks. 

I, uh, I kinda wish I could say that. I mean, ball was watched, turkey was eaten, but sleep was not as greatly observed as I would have liked. Still, progress...


## Week 4 Progress Report

In the beginning, there was smooth progression: by midweek, not so much. Although lengthy in tweaking, styling the player pages wasn't too much brain power. Slightly longer was setting up some homegrown validation for required fields. `.then()` throwing on a quick tooltip, and finally the lengthy slog of sussing out chaining API POST calls.

### Topic 1: Felicity of Style

It feels like there's not too much about styling that needs great depth in enumeration. But as it is not one of my stronger suits, I can't help but point out that sometimes it takes a lengthy bit of work to get my project to match my design. And looked at the final product does little to tell of the `display:flex` and `grid` work that had to be sweated from mobile to desktop size to get all those rows of info and stats to line up nicely. They are not few in number.

Note to self: almost never use `column-count`, and just stick to grid. 

![Create Player Page](/images/basketballDesktop.png)

###### *It doesn't look that fancy, but giving the right kind of spacing to match my design and maximize usability was no small potato job. At least, for me.*

Could it be improve? Sure, and it likely will. But this will be the basic layout for all the player pages (create, view, and edit all) so it was important to get it as close to my original vision as I could.


### Topic 2: Seeking Validation, and Tips

Relatively, there were few fields in my information that I wanted to require. I settled on team name, player name, player number, and height as the basic ones that every coach would want to put about every player if they really are on a roster. And this time I wanted to be legit and do the client-side validation in pure JavaScript instead of borrowing from some framework or helper like Bootstrap, since my fields were basically all being directly generated that way, also.

Having done this one before and written reams of code to pull it off, I decided for something slimmer: a function I could call to show that blares in giant red letters when you need to have a category, and another that simply disables the submit button until those categories are complete.

```javascript
const itIsRequired = (input) => {
input.addEventListener('blur', () => {
    if (input.value === null || input.value.trim() === ""){
        console.log("Input was empty!")
        input.placeholder = "Required."
        input.classList.remove("rejectDupMessage");
        void input.offsetWidth;
        input.classList.add("rejectDupMessage");
        input.value = null;    
}})

input.addEventListener('focus', () => {
    input.classList.remove("rejectDupMessage");
    input.style.color = "black"
    input.placeholder = ""
})

}
```
###### *Just a little listener event set up around my required inputs as they are constructed into my DOM. `focus` and `blur` don't cover everything, but mostly do the job.*

The visual aspect was relatively simple, as you can see above. And in the end, I followed a similar pattern for the actual data check: nest the required inputs in a in a function that only unlocks the "SAVE NEW PLAYER" submitter once all the required fields are there. The click listener only gets added if they are all present (think lots of `this && that && thatToo` in my ternary statement.)

But even after this, it still felt too... vague. If there's a way for a person to somehow miss the steps to fill out a form and press submit, they will inevitably miss it, over and over. So to make it extra obvious, grabbing a couple of tooltips seemed idea. I toyed with custom tooltips for a bit, testing the waters of a "JavaScript Tooltip Generator" even, but settled on Bootstrap's easy-add utility. Figuring out how to alter that tooltip's text took some extra digging (thanks for almost nothing, Bootstrap documentation) but it, too came together in just a few jQuery lines.

```javascript
$('[data-toggle="tooltip"]').tooltip('hide')
.attr('data-original-title', 'Click to save new player.')
```
###### *This particular version changes ALL tooltips in a page, but you can just as easily alter the first field to the ID of your specific tooltip. I'm leaving this here for the next person who has to peer deep into forums and help pages for this stupidly simple two lines of code.*

### Topic 3: Chaining API POST calls: a hate letter

Initially, I believed setting up API POST calls wouldn't be simple. Call the send function from my api.js for my initial player info, throw on a `.then()`, grab the ID from what was sent, add it to my stat info, and `.then()` send the stats. So easy I had it all planned out.

Yeah. So, so easy.

Only there were problems. The first of which being the error that this threw when I attempted it:

`Syntaxerror: Unexpected token d in json at position 0`

If you've ever Googled this, you'll see that the circumstances under which it occurs can be... somewhat broad. Just the sheer amount of time sent looking at other peoples nearly unrelated problems took many hours of my life that I won't get back during a holiday weekend. Eventually, though, I got a basic gist: something is wrong with the format of what I'm sending.

But the really funky thing was, the first half of the call (adding a new player) went through flawlessly, but the second half (adding stats to that player) came up with this junk. This, when the setup of the two chained calls was basically identical.

It turned out the problem was twofold.

First, the format of my API call had to change. As I had it worked perfectly for single calls in a `try...catch` block, but it was not passing the info I needed (the ID my POST generated that I needed to pass on to my stats to connect them to my player), especially after the `catch` call. Instead of responding with the data I wanted back, I was just getting the basic `response`, and that did nothing for me. I needed to reformat my standard API call to handle a second, passed call for my stats.

So my function went from this:

```javascript
  //POST method
  export async function sendAPIData(URL, upload) {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          //Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(upload),
      });
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
    }
  }
```

...to this:


```javascript
  export async function sendAPIStatDataChain(URL, playerInfo, stats, extraStats = {}) {
     fetch(URL, {
        method: "POST",
        headers: {
          //Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(playerInfo),
      }).then(response => response.json())
      .then((reply) =>{
        console.log(reply)
        let playerID = reply[0]._id
        stats["player"] = playerID
        console.log(stats)
      }).then(() => {
        fetch("../stats", {
          method: "POST",
          headers: {
            //Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(stats)})
      }).then(response => console.log(response))
      .then((reply2) => {
        console.log(reply2)
      })
      .catch (error => console.error(error));
    
  }
```
Aside from extra verbosity to fit my situation, it also shifted style quite a bit to get what I needed. And it's still not perfect: that second `.then(response => console.log(response))` is giving me `undefined` as a return, and I still have no earthy idea why. At least everything else works: player info post, return ID, add ID to stats, post stats. Just like I drew it up. 

Eventually.

Because second, discovered after much teeth grinding and unkind words, I had to return to my player schema in my backend and switch a few fields I thought would be `Number`s to `String`s. My back end *should* have been throwing specific errors for that, but there must be some middleware I'm missing out on, because all I got was the generic syntax error from my `catch` for info from the front end. This was a pretty simple, dumb error on my part, but it would have been nice if it was easier to see what my simple, dumb error was.

And so I conclude that for validation purposes, never have a `type=text` on your client side input and `{type: Number}` on your server side schema. 

One just forgets these things weeks after setting up one and `.then()` the other...


### Looking Ahead

Soooo yeah, I didn't get to adding player view/edit pages, but once these troubles are ironed out, those should be quick copies of my previous work to get rolling. Next week, I'll be setting up a default player that is on their own special team and isn't read by getPlayers to act as stat storage for my functions to access (I realized belatedly that if there are no players initially, these will not load). 

`.then()`, I've got to do one more chain for my extra stat API post, add a modal once you save your new player to announce your successful save, and give you the option to create another or return to the roster page, and *`.then()`* add player edit and view pages.

And `.then()` hook those pages up to the roster buttons, and `.then()` add roster sorting, and `.then()` do something about player images...

Yes, still plenty to do, and only two weeks to do it.