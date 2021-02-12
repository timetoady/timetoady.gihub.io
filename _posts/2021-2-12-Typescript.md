---
layout: post
title: TypeScript — A Brief Primer
---

#### I give the what, why, and a little of the how of TypeScript. It's probably up to you to fill in the who, when, and where.

![TypeScript example?](/images/notTypeScript.jpg)

###### _This photo... might be of TypeScript? They are using webpack and requiring 'tsconfig-paths-webpack-plugin', anyway, so it could be. I mean, this is basically the best you can get when you just search for 'JavaScript' on a royalty free image site, because 'TypeScript' comes up empty. Photo by [Ferenc Almasi](https://unsplash.com/@flowforfrank){:target="\_blank"} on [Unsplash](https://unsplash.com/photos/EJSaEnVvZcg){:target="\_blank"}._

The first dozen or so times I heard TypeScript brought up in conversation, it always went something along the lines of: "Oh yeah, TypeScript. You should really know TypeScript, but, uh, there's a lot to it, and we really don't have time to get into it right now."

Guess what? I don't have time to get into it now, either.

But we can... dust off the surface a little bit. Give it a few quicks swipes with a sleeve, blow some mystery off of it, and tell you a bit of the 'what' and 'why', with just a tiny, itty bitty nugget of the 'how.'

## What is TypeScript

TypeScript is what they call a "superset" of JavaScript.  It runs on the same basics, including all that is JavaScript within its premises, but expands on it to require more specificity with, well, type. 

The goal of TypeScript is to lay down the law much more than than the wild-west of vanilla JS when it comes to what data types can be passed back and forth. Functions, variables, objects etc. can now be more strictly 'typed' to help ensure a flow of data that you desire, and rely less on inference.

## How does TypeScript work

Code written in TypeScript cannot be directly interpreted by your browser or Node.js. Accordingly, it is transpiled to JavaScript (as a version you specify in `tsconfg.js`) for use in production. Your browser then takes that JavaScript code and what other items you've packaged with it to create your app.

**Transpilation**, FYI, is basically a subset of **compilation**: both are a process of taking source code in one language and outputting it into another. Compiling is the more broad, umbrella term, and could be applied to converting C# to JavaScript or Python to an executable. 

Transpile, on the other hand, generally refers to converting a source code into another version of that code. In the case of JavaScript, for example, TypeScript gives you the option of transpiling to ES6, ES5, ES2015, and more.

![Not TypeScript](/images/TypeScript.png)

###### _If you're looking for a quick rundown of the pros and cons, as well as a king's bounty of documentation, [TypeScript's official site](https://www.TypeScriptlang.org/) has you covered._

## Why use TypeScript

When you're able to more strictly code what type you need for your data, you now have a built in tool that helps reduce bugs and errors. TypeScript tells you if you're trying to use a string as a parameter when it should be a number (or an object, or a Boolean), allowing you to easily diagnose, refactor, and specify as needed.

Of course, this kind of specificity can sometimes muck up the common JavaScript functions that you're used to, and require workarounds. Imports in particular can become more of an adventure when you're used to typing loosely. 

But thankfully, as noted on their own website, "adopting TypeScript is not a binary choice." You can add it into existing projects, or focus on it for particular modules where strict typing will ease your development process. 

In any case, since TypeScript is dependent on JavaScript, and there's no telling if some change in a future JavaScript version might break things in TypeScript, it's probably best not to go whole hog on typing your app the nth degree. But there's no denying that adding a little extra regulation to your JS code can pay dividends during and after your primary development phase.

