---
layout: post
title: JavaScript is Your Relationships — A Review of Functions, Callbacks, and Promises
---

#### Getting the best out of JavaScript is a lot like being a good partner.

![Code with Svelte](/images/functions.jpg)

###### _Whoever wrote this code likes to kick their functions old school, and... JQuery-y. Photo by [Joan Gamell](https://unsplash.com/@gamell){:target="\_blank"} on [Unsplash](https://unsplash.com/photos/ZS67i1HLllo){:target="\_blank"}._

Think about it: what relationship can work if you don't do your callbacks and make and keep promises? Does this not define a functional relationship?

Yes, this is definitely a joke. But it's also true.

Here's a rundown of writing tight code with your functions, callbacks, and promises.

## Functions — Ways to Declare, Returns, Parameters

Ah, our old friend the function. As I've [noted before](https://timetoady.github.io/Functions-Objects-Arrays/#functions), here is where most of the thinking goes in JavaScript.

Functions are about commitment. You boldly declare them, designate what is being returned (or not), and set them up to accept values.

### Some ways to declare a function

#### The Classic

```javascript
function myFuction() {}
```

This is function declaration 101. You type the word `function`, name it, provide parenthesis to pass parameters/arguments, and then define what it's going to do in curly brackets. Like oatmeal with brown sugar and raisons for breakfast: nothing flashy, but fundamental, and sometimes just what you need.

Function declarations make it so that a function can be called as soon as it's surrounding code is executed, even before the function itself is defined. This is called "hoisting".

If that sounds a little leaky, yes it could be. There are also some browser inconsistency problems with this, and you can't use the `const` or `let` keywords to specify its scope and writability.

#### The Expressive One

```javascript
let myVariable = function () {
  statements;
};
```

This is a functional expression. Unlike above, it only becomes available to be called after the line in which it was defined has been reached. You can use `var`, `let`, or `const` to designate the function's write state (but most of the time you probably don't want a function overwritten, so it might be best to mostly use `const`).

It's also possible to chain these first two methods (i.e. `myFunction = function namedFunction(){statements})`) and MDN [notes some benefits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions), but personally this seems like it could get confusing. You'll have to see what works best for you.

### The IIFE Rebel

```javascript
(function () {
  statements;
})();
```

Immediately Invoked Functional Expressions, as the name spells out, are invoked as soon they are declared.

Formerly used as part of a scope/closure device before `const` and `let` became widely supported by browsers, they still have a place executing a bit of code anonymously just once, right away without filling up your namespace. On the other hand, if something goes wrong with it, it may be a little harder to troubleshoot, so best to pay these careful attention when you use them.

Happy IIFE, happy life.

#### The Modern Arrow

```javascript
const myFunction = (param) => {
  statements;
};

const mySimilarFunction = (param) => param.method();
```

There are all sorts of slick ways to implement the arrow function expression. As it is written in `myFunction` above, it's a slightly more compact way of declaring a function, but it shines the brightest when you desire even greater brevity.

When it appears as the second example, because it takes a single argument, you can dispense with parenthesis and even a return statement (see more about those below.)

You can even go one step further and use `arg => statement` to bind it to its `this` value, or use it as method called from an object with `() => expresssion`.

Arrow functions are incredibly useful, but can have a bit of a learning curve due to their brevity.

### How to return a value from a function

#### Just, uh, return it

```javascript
const giveMeSomething = (item) => {
  let result = item + 2;
  return result; //when the work is done, return item + 2
};
```

The fundamental and regular way to make a result from the work undergone inside the function available outside the function is to `return` it. You have to be a bit careful as to where you place you're return if you have nested functions (see callbacks, below), but other than that returns are one of the smoothest and simplist aspects of JavaScript. You can also shorten the example above to `return item + 2`.

Returns are also a neat way to escape an `if...then` chain, and only run what parts of your code you want.

#### Arrow functions and the implicit return

One of the niftier uses of arrow functions is, when used in a single line, they return the resultant expression without you having to specify. Then you get something like `let myResult = (thing => thing.attribute)` or even `let myResult = x => x * x`, which returns the product of a parameter times itself without you even telling it too.

There are actually a number of methods with similarly built-in returns, like `.toString()` or `parseInt()` and many more. Combining these with arrow functions for the callbacks that methods like `map()` or `filter` require churns out some sweetly succinct code methods.

And speaking of...

## Don't Leave them Hanging — Callbacks

To get any significant work done in your app, it can't be just one giant function. Much more practically, you need to break it down in manageable chunks, or use another function to get something that you want from someplace else, or mutate that data to meet your needs. Thus, callbacks.

### What is a callback?

Simply put, callbacks are functions that are passed in another function as an argument.

#### How do they work?

As the function processes, the callback is called (or “invoked”) inside the function it has been placed in. It can be used to simplify the number of processes you want a function to take (which makes your code cleaner and cuts down on duplicate code if you do that support function more than once) or defined in-line as part of a method to specify how it's doing it's work.

For example:

```javascript
//Here I use an arrow function inside the filter method to make a new array.
//I return only things that are greater than or equal to 10.
//The filter method uses my tiny callback function as its test.
const moreThanTen = thingsAray.filter((thing) => thing >= 10);

//Here's the same as above, but made into a function:
const tenOrMore = (array) => {
  return array.filter((thing) => thing >= 10);
};

//Again more verbosely:
const tenOrMoreVerbose = (array) => {
  let moreThanTen = array.filter((thing) => {
    return thing >= 10;
  });
};

//Again more succinctly:
const tenOrMoreShort = (array) => array.filter((thing) => thing >= 10); //implicit return

//If I wanted a second parameter that return greater than or equal to a variable:
const moreOrEqualTo = (array, compareNum) =>
  array.filter((number) => number >= compareNum);

//Again verbosely
const moreOrEqual2 = (array, compareNum) => {
  return array.filter((number) => {
    return number >= compareNum;
  });
};

//Again, using an if statement to check if the type of array item is a number:
const moreOrEqualTo2 = (array, compareNum) =>
  array.filter((number) => {
    if (typeof number === "number") {
      //This is the callback of the filter above
      return number >= compareNum; //This could also use implicit returns instead
    }
  });

//Here, I use my tenOrMore function inside to filter just items that are ten or more.
//I then map those items, multiplying those that are at least 10 by ten.
const timesByTen = (array) => {
  return tenOrMore(array).map((item) => item * 10); //two callbacks
};
```

Needless to say, callbacks are used frequently. Especially when you're accessing data from online sources. Which leads us to...

## Promises to keep, and miles to go

So many metaphors with promises available here. You can use your imagination. I think I'll skip straight to defining it.

### What is a promise?

Essentially a type of callback, plus more. MDN defines it very succinctly as “an object representing the eventual completion or failure of an asynchronous operation.”

This means that you can set up parts of code to wait to see if a prior process important to your task succeeds or fails, and act accordingly, and only act after this prior process is completed. Mostly, successful promises return a value, whereas failed ones return an error.

### Promise use cases

Promises in many forms are most commonly used with the `fetch` method when you're retrieving API info from online, and aren't certain how long it will take said info to load. But it could also allow you to have some longer-running function go asynchronously, allowing the rest of your code to continue and just fill in as soon as the `Promise` is fulfilled.

```javascript
const attemptAction() = new Promise((resolve, reject) =>{
    if (someOtherFunction()) {//If a result from the function exists, then...
        resolve(`Other function done. Cool!`)
    } else {
        //Done waiting for that function and nothing happens after 2 seconds...
        setTimeout(() => reject(new Error("Welp, that didn't work.")), 2000)
    }
})
```

### How do promises work?

Promises have three states. A "pending" initial state where the promise exists but has not settled, and then it is settled by either a "fulfilled" state where the operation was complete successfully, or a "rejected" state, where things didn't go so well.

Either case returns a result that you had your code waiting for instead of moving ahead before it finished, or kept your code moving on other things in the mean time.

### Special syntax: async and await

Defining a lot of `new Promise`es can get pretty verbose. Thankfully, you can use an asynchronous function and the `await` keyword to smooth things out. They are a type of promise with that good syntactic sugar.

Like-a so:

```javascript
//
const getStuff = async () => {
  //define the function as asynchronous here
  return (thing = await something()); //returning the result of something
};
```

Even more sure would be to use a `try...catch` block to check for errors. Here's my favorite modular API fetch function that uses all those:

```javascript
//Here I call it as a declaired function for use any time in the contained code.
async function tryCatch(URL, modifier = "", method = "GET", headers = {}) {
  // give my parameters defaults
  try {
    //try method attempts statements below
    const response = await fetch(URL + `${modifier}`, {
      //awaits response from fetch
      method: method,
      headers: headers,
    });
    const data = await response.json(); //changes response to JSON
    return data; //returns my shiny new data
  } catch (error) {
    //catch any errors that might mess up my promise
    console.error(error);
  }
}
```

Doing it this way helps you avoid a hellscape of `.then()` chaining, catches your errors, and allows you make nice clean API calls. A truly well-rounded function that I use in my code all the time, and call within other functions using `async` and `await`. 

```javascript
const doTheThings = async (myFetchURL) => {
    let myData = await tryCatch(myFetchURL)
    //...do things with my data
}
```

Basically, whole function becomes an asynchronous callback/promise where I can snag API data any place I want, for use in building my own database, or building things in my document DOM.

**chef's kiss* *
