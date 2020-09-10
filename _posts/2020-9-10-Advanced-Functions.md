---
layout: post
title: Advanced Function Concepts---Recursion, Scopes and Closures, and Spread Operators
---

In this weeks topics, we repeat ourselves, contemplate invasion by aliens, and make punctuation dad jokes.

* ### [A deep dive into recursion: what it is, its structure, how it works, and when to use it](#recursion)  
* ### [An explanation on scope using metaphor, and closures](#scopes)  
* ### [A brief tread into spread operators, and how they're handy](#spread)


<a name="recursion"></a>

## Recursion: that which repeats on itself

For me, the trick to understanding the concept of recursion is greatly aided by first latching onto what it means to be "recursive." In general, if something is *recursive*, that means it's characterized by something repeating: something happening again and again.

So when your code is "recursive" i.e. makes use of recursion, it's repeating itself, usually to create successive results with each repetition. If your functional expression calls itself/has a reference to itself in its own body, this is what is known as recursion. 

Here's an example of recursion in the form of the classic countdown:

```javascript
function countdown(num) {//The inital function call
    num; 
    if(num <= 0) return //base case
    countdown(num - 1) //Here is the function calling itself
}
countdown(5)
```

### Structure of Recursion

Most recursive code has two parts: a **terminating condition** (or *base case*, as it's sometimes called), and the **recursive case**.

The terminating condition/base case is basically a stop-gap. If nothing gets in it's way, a recursive function will continue to call itself until a system crashes, or the function call is terminated by system protections. Accordingly, we use conditional logic to stop the repetition right when the successively built results we want have been achieved.  

In the case of the countdown function above, `if(num <= 0)` represents the terminating condition. Since a countdown (usually) counts down until it reaches zero, it's natural we'd want to end there, because once you've allowed your countdown to reach -1, it becomes unclear exactly when it will stop. 

Other possible conditions to terminate on might be when we reach the end of a string, or if the quantity is equal to zero, or when we've run out of objects to iterate over (i.e. the object is equal to nothing).

### Recursive methodology: the Stack

When troubleshooting recursive functions, it's helpful to know how the process of repetition works. It uses something called "the stack" to process data. Essentially, most recursive logic isn't able to produce its output until it calculates the "innermost" value. 

Take this also-common example recursive, a factorial:

```javascript
function factorial(num) {
    //base case
    if(num < 0) return
    if (num === 0) return 1
    //recursive case
    return num * factorial(num -1) 
}
factorial(3)
```
Factorials, if you recall, are numbers multiplying by the just lower ordinal number to down to 1 to reach a result. In this case, the factorial of 3 is 3 * 2 * 1 = 6. 

So when the function above runs, it first passes the base case (yes, the number is greater than and not equal to zero), and then sets up its recursive case. It returns the `num` (3 in this case) times this same function of `num - 1`. 

But the thing is, the logic doesn't yet know what `factorial(num-1)` equals. In order to find that out, it needs repeat its calculations and sort of let them queue up until it finds the final case: the value that the function is limited to by the "base case." 

This queuing up of calculations is called "the stack." Recursive logic stacks the partially complete statements one by one, starting from the first (`return num * factorial(2)`), then `num * factorial(1)`, then `num * factorial(0)`. Finally, it gets to a definitive number, the base case, the "innermost" value: if the number is equal to zero (`num === 0`) it will now return 1.

Now that we have '1', a definite, concrete number, the recursive function then starts to produce results of the things in the stack in the reverse order that it received it. So now that it knows the factorial of 0 is 1 by the base case set up, it can throw 1 into `1 * factorial(1)` to get 1*1, and then `2 * factorial(1)`, etc., until it constructs the full picture and spits out the factor of 3 * 2 * 1 * 1, or 6. 

So when it comes to getting results from the stack, remember this phrase: first in, last out: last in, first out. 

### A Warning: when to use recursive functions

As you might have guessed, creating those stacks with all that impending logic can be pretty costly on a system. So if you can do a loop without too much trouble, that's probably the way to go. 

But there are circumstances where being recursive is preferable. Mostly this occurs with iterative branching. If you have to iterate over something to sort it, or transverse over complex or nonlinear nodes of data, recursive is the logic of choice.



<a name="scopes"></a>

## Scopes and Closures in JavaScript

If the word "scope" is summoning images of checking someone out or something that happens after "tele", "peri", or "kaleido"  to make something you peer through, that's not quite what we're going for here.

Scope in JavaScript is the area or range in which an element has influence or is relevant. I like to think of it like how 'big' something is. 

For example, a home invasion would be something in the scope of a local police officer or sheriff. An invasion of deadly insects, however, might be "too big" for him, and would scope up the local mayor or even the governor. A foreign military invasion would be in line to scope to a country's president. An alien invasion would scope to something more global, which for us is basically the United Nations, and might be one of the few things that might actually unite them. 

The beat cop is going to be way out of his league with an alien invasion, and would (hopefully) immediately call his call his superiors for one of those, or insects, or armies. By the same token, the United Nations would be concerned about a military invasion, perhaps aware of deadly insects, but would not be overly concerned with the details of a home invasion, unless it was perpetrated by aliens. 

Scope in JavaScript works basically the same. Details, data, and operations are limited in their reach so they can be taken care of properly by the right scale of functions, who will then pass up only whatever information is necessary and nothing more. 

There are basically two kinds of scope in JavaScript: **global scope** and **local scope**.

```javascript
const globalVariable = "This is a global variable, accessable throughout the JavaScript module."
const globalFunc = () => {
 let scopedVariable = "This is limited to the scope of the globalFunc function"
    let nestedFunc = () => {
        let nestedVariable = scopedVariable.concat("but can be also accessed by the nested function inside globalFunc.") //a result of closure
    }
}
```

Globally scoped objects, such as global functions and variables, reach and effect every portion of a JavaScript module, and are likewise governed by operations on the global scale. Local ones are usually bound within blocks or functions to limit the scale of their relevance, serving a purpose within that area, and then being ignored by the rest of the global system unless they are specifically returned to another function. 

Local objects are denoted by the use of curly braces ({}).

However, when a function is defined within a function, it has access to the variables defined in the function it is nested in. The outer function "encloses" the inner one, and so this situation the inner function is called a **closure**. 

Functions will always look for a variable at the most local scope first, and then in any functions they might be enclosed in. 



<a name="spread"></a>

## The Spread Operator

For our final bit of handy advanced ES6 JavaScript functionality, we give you...

...the spread operator. 

Yes, that was a joke.

The basic function of the spread operator or "spread syntax" (which, just in case you missed it, looks like `...` in JavaScript) is to expand or "spread" an array or string. It means you can take the individual objects located in one of those elements, and do new operations on them (like put them in new blocks or functions) without the baggage of the element that contained them. 

Here's a simple example:

```javascript
let cousinsDadsSide = ['Joseph', 'Albert', 'Shelby' ]; 
let cousinsMomsSide = ['Jane', 'Justine', 'Alan']; 
  
cousins = [...cousinsDadsSide,...cousinsMomsSide]; 
console.log(cousins); // Output: ['Joseph', 'Albert', 'Shelby' 'Jane', 'Justine', 'Alan']
```

If you were to simply `push()` the two example arrays into a new array, you would end up with an array of arrays. Doing it in this way makes all the data cleanly accessable in one place.

Spread operators also enable you to avoid mutating the original element. When you use spread syntax, you create a new object based on the old one(s), instead of a pointer that would effect the old object if the new one were mutated. You could also return your new object as mutated by applying some sort of filter or map to them, still without effecting the original(s).

It's also a quick, easy syntax that saves you a lot of time using `for...in` loops or other loops to scoop out information. Neat!