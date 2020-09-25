---
layout: post
title: The Rite of Passage — The Todo App
---
###### To do it, to do it, to do it right, yeah?


When writer want to branch out into a new genre, they write a short story. When an artist wants to try a new style, they polish the basic technique. When a basketball player wants to add a new move to their arsenal, they study film, break it down, and practice repetition after repetition.

For a web developer, they write a "todo" app.

And so I have.

## What's ado about todo: how it works

![Todo App](/images/todo1.png)
###### *Here is my to-do app. You'll notice it is dark-themed. This is because I am a creature of the night, and dwell around screens in the 300 nits range.* 

The basic design I was after in this case is not too revolutionary. A button to hide and show completed tasks, a drop down box to select or add a category, and an entry field complete with add button make up the top area. Logic ensures duplicate categories and to-dos cannot be added, and error messages will shake their fingers at you try. Below, an editable list of inputs in category uls, checkbox to complete on the left, red 'X'es on the right to delete. 

Under the hood, on first load of the page, the JavaScript automatically calls some basic hard coded objects in an array with category, ID, todo, and complete fields. This initial data is immediately committed to local storage one object at a time. From here on out, all changes to the data go directly to localStorage, and every time data is displayed, it's pulled from localStorage.

That all seemed sound, but ended up also... problematic.

## Why this way

On first blush, I didn't exactly take a shine to the flat object structure of the initial files. Some part of my brain was offended by the way they just squat there, daring me to find convenient ways to iterate over them, sneering at my attempts to combine them to avoid repeating categories. If this were a matter of no preset data, I could just peek under the covers of each object in localStorage to check if that category already existed, and if it did, throw down the Hammer of Justice on any attempts to add it again, and thus bug up my app. Alas, this initial todo data was required in this case.

If only, I thought, these were more like JSON files: pristine trees of hierarchical order, sublimating new to-do values under merged keys of category. But making, accessing, and writing to a JSON seemed both redundant (I was already using localStorage) and too involved for this project.

So instead, I thought, what if I filtered that ugly flat data into nested objects? Like my own little JSON-lite terrarium. Then I could pull that info out, which always updates directly from localStorage, and display it on my DOM as needed. 

So I did that. Which worked. Sorta. Eventually.


## Challenges

It became obvious as I looked at the work to be done that I would be moving and exchanging data around like an international traveler exchanges his currency.  Only instead of tired feet and pictures in front of monuments, I was going to end up with a changeable list of things to do at the end. 

Unfortunately, converting dollars to euros to pounds to yen and back to dollars again is probably pretty simple compared the task I set myself: sending data to localStorage, extracting data form localStorage, translating localStorage data into a nested object, and finally sussing out nested objects for values that I would display dynamically in the DOM, dude.

This forced me into some developer-dentistry: I had to make a function specifically to drill down into the teeth of those nested object and shuck out the data I needed therein (and yes, I already somewhat regret the imagery of this sentence). I then designated a big ol' DOM building function that would take that info, check if it was complete or not (cross it off!), make document elements for every needed datum, and designate trackable IDs for every mutable todo and category so that everybody is talking to each other. Press this 'x'? Kill this ID of todo. Check this box? Set this style that hides when "Hide" is set to on. Change this todo? Listening on input to change. And so on.

But as painstaking as some of that was, that wasn't the most time-consuming issue.

No, that was the bugs.

Once I got all of those basic functions working, and everything talking to each other, actual use of my app revealed: duplicate todo's were being allowed, and mapped over the old ones; categories could be added as null or undefined, showing some code underthings to the user; newly added categories weren't updating in drop down box; new todos were being added in random order; adding a new todo was causing the Hide Complete button to reset; editing todos to over a certain length cut them off; initial data wasn't loading,automatically just the first time; and more!

### Resolution

Running around and writing new functions to fix bugs, or rewriting set functions to fix them, definitely took the most time. Particularly the page reloading baffled me on adding new todos. There was nothing in my JavaScript code doing it. It wasn't until I realized that because I had the input and add button in a form in HTML, and that its default behavior was to 'Submit' causing a refresh, that I got that darn thing fixed.

But simultaneously, some of the most fun parts of the app come from those solutions, like the animated input box shaking at you and giving a red text warning if you tried to enter a duplicate, or smart focuses after adding todos or categories. 

![Rejection message for duplicate todo.](/images/todo2.png)
###### *Think you going to add that todo you've already got added? Survey says: nope.*


The error paved the way for those subtle touches of finesse at the end.

### Lessons learned

What would I do differently?

I would have to say... most of it.

As well as the app in general turned out in the end, the way I chose to shuffle data back and forth from storage was just too complicated. I surely would not go for nested objects. Yuck. Also, I would ditch categories. Yes, they add a level of complication, but mostly this would be for design reasons: if you think about it, "To do" is *already* the category, and adding additional ones is just overthinking the whole todo concept. 

I'd eject the "add" input, too. Instead: a slick list of the editable todos, with a little plus at the bottom that would add a new empty todo every time it were pressed. And when you typed something in the last one, it would also autopopulate an empty one beneath it. Still remove with an X and cross off with a box (although I'd make the boxes much bigger). To add some extra special sauce, I'd make todos movable in their list.

![Mobile todo app](/images/todoMobile.png)
###### *No, I did not forget to do some mobile styling.*