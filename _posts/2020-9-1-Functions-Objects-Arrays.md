1. Self Introduction

I’m just a guy with a crazy two-year-old girl that falls asleep every night to songs from Chrono Trigger.  I can carry on an in-depth conversation how the isekai genre has taken over anime, and how Savage Hulk was denied a proper redemptive arc in Endgame. 

Hooking up all my gaming systems requires three different types of switcher (four HDMI, one  SCART, and two Extron matrix switchers) and two HDMI splitters. My work desk skulks in one corner of the room, crisscrossed with wires from two monitors, two PVMs, a scan converter, a DAC, and an RGB to YPbPr modulator. Just a few months ago, I drove forty miles to buy a JVC D-series CRT that rolled off the assembly line in August of 2000, and I was happy to get it.

I have a pretty good handle on vanilla JavaScript, having worked my way through DGM-1600 and 2760. Massaging logic to make functions work beautifully, sussing out the right combination to get a process rolling— I love that part of web development, and I hope to use this class polish all my scripting so I can write better planned, more elegant code. 

2. JAMStack Blog Post

JavaScript, APIs, and Markup make the JAM of JAMStack, and are in essence a workflow for front end, static site web development. 

JavaScript minds the logic of the project, specifying the dynamic functional parts at play on the site. APIs, or Application Programming Interfaces, have to do with server communication. They access and interact with data online needed to perform the objectives of a site, and are directed by JavaScript. Markup refers to the markup languages (principally, HTML and CSS and their revisions/additions/subsidiaries) that make up the skeleton of the structure, look, and content of a site.

JAMStacking involves making static web sites, or sites that are delivered to a browser exactly as stored. This method has become increasingly popular compared to dynamic tools like Wordpress or Drupal. Dynamic sites need to be generated each time they are accessed, communicating extensively with servers, and the tools tend to have many security vulnerabilities as they bloat into a vastness of plugins and programming loopholes. 

In contrast, static sites created via a JAMStack workflow just load and are done, and lacking that cloud of creation superstructure, end up being more secure.  You can also use tools like a content delivery network (or CDN) to speed access to your site. The idea of a CDN is to host site content on a network of servers instead of a traditional, single server that must be accessed every time someone wants to partake in your content.

To make use of that delicious JAM, a web developer needs to either hardcode JavaScript and markup elements, or a Static Site Generator (or SSG, like Gatsby), upload it to a repository (like a web hosting service and/or GitHub), and then deploy that content via a CDN (like Netlify). 

3. Functions, Objects, and Arrays: Know the F.O.A.

Welcome back to Adam of Blog. In this week’s episode, we will:

Examine functions in JavaScript, including callbacks and promises
Look at javascript objects, and how to loop through them
Dive into arrays, and a couple ways to loop through them, and:
Bonus learning!

### JavaScript function: in brief

In brief, functions are where most of the thinking goes on in the script of JavaScript. They are composed of a list of statements, calculations, or tasks that perform the logic needed to contribute to a site or app. To think of them metaphorically, they are sort of like the verbs and order of an English sentence (with objects, arrays, and variables being sort of like nouns), or like the chamber, barrel, and mechanisms of gun. 

They can be named or unnamed (in the case of arrow functions), can take zero or more parameters (or pieces of information you want passed into the function), and then have a list of statements that do the thinking of your script.

Take the following example:

```
function myFunction (parameter1, parameter2) {
 let definedVariable = “What I’m defining this function’s first variable as”
let definedVariable2 = “and what I’m defining this function's second variable as.”
return definedVariable1.concat(‘ ‘,  definedVariable2)

}
```

Here, I’ve taken two parameters, but just to show you where they go: they aren’t actually being used in this example function. For my statements,  I then define two variables whose scope is contained within the function, and then return (give the result of the function as) the two being added or concatenated together. Calling the function should return the complete sentence, with a space between.

## Callback function: 

Another common use of a function is a callback function, or a function that is passed in another function as an argument. It then is called (or “invoked”) inside the function it has been placed in to help perform whatever task the outer function  is wanting to complete. 

This way you can break up tasks into smaller functions, and call them in the larger function to perform more involved logical movements without making your code look like a mess, and writing each task of a complex process all in one function. You can pass functions into other functions because JavaScript treats them like objects. That’s why it’s often called an “object-oriented language.”

Example:

```
function anotherFunction (callbackFunc) {
let definedVariable3 = “Now, I can add this third variable as a string to the other two in this new function by calling the myFunction again.”
return callbackFunc.concat(‘ ‘, definedVariable3)
}

anotherFunction(myFunction) //Here, I have used the first “myFunction” as a callback inside of the “anotherFunction” function.
```

Callbacks are primarily used in two ways. Either 1) synchronously, or where information is processed in order it is called instantly, or 2) asynchronously, where two or more processes of your script are not functioning in direct chronological order of what’s written, but are related actions  occurring without waiting for the action occurring before it to complete. 

##Promises (no pinky swears required)

One of the more common asynchronous functions in modern JavaScript is a  `Promise`. It’s essentially a type of callback, plus more. MDN defines it very succinctly as “an object representing the eventual completion or failure of an asynchronous operation.”  This means that you can set up parts of code to wait to see if a prior process important to your task succeeds or fails, and act accordingly, and only act after this prior process is completed. 

You can even chain them with `then()`, waiting on each phase of the code to be completed before moving on to the next one.  Here’s a basic example using arrow functions to keep things short:

```
attemptAction()
.then(answer => anotherAction(answer)) //these arrow functions are returning results, 
.then(answer2 => thirdAction(answer2))//but they don’t need the ‘return’ keyword.
.catch(ifAllFails) //used if all attempted conditions fail to launch another callback function
```

Other nifty, related items include [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statements and the [Fetch API] (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### JavaScript Objects: objectively objects, without objection

Technically, since JavaScript is an object-oriented language, nearly everything you work with using it is an ‘object.’ So if the English language usage of the word “object” weren’t confusing enough for you, there is also something in JavaScript specifically referred to as “a JavaScript object” that has particular properties separate from other object types.

A helpful way to start thinking of them is to compare them to real world objects. Cars, people, clients, documents, and more all have details about them that their name only does not convey. In its simplest form, objects are comparable form basically a list of those details, organized by key (like “client_name”) and value (“Alexander Maxamillian”) pairs.  They are defined by the objects name being defined in a variable, and the properties of that object following in curly braces, using colons and commas to separate key/value pairs.

Here’s an example of those from my real world car:

```
var adamsCar = {
	make:  ‘Subaru’,
	model:  ‘SVX’,
	year:  1992,
	trim: ‘LSi’,
	color: ‘Sliver’,
	“needs a paint job”: true
}
```

With an object established in this method, you can now access its properties, either using dot notation ( `adamsCar.year` will return “1992) or bracket notations ( `adamsCar[“needs a paint job’] returns you the boolean ‘true’, and unfortunately, it is.)  

Once you’ve got these details of your object lined up, they are by no means set. You can alter the values ( `adamsCar.color = “Silver-ish”` ) or add new key/value pairs (`adamsCar.engine = “3.3 liter ‘boxer’ flat-six”`) using either notation type. They can also exist within a function that you can call to spit out new objects based on the keys you’ve previously set up, and values you specify.

Like-a so:

```
function carMaker (make, model, year, color) {
	return {
		make: make,
		model: model,
		year: year,
		color: color,
		body: body,
}
} 

let newCar = carMaker(“Honda”, “Civic EX”, 1995, “Gray”, “coupe”) //This is my wife’s car. It’s actually pretty cool!
```

Add to that,  the values in objects don’t just have to be simple strings or numbers. They can contain variables, functions, arrays, and even other objects, and can be called on and parsed accordingly. You can also loop through them by using a special [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop, but also using the [`forEach()`] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method.

For example, if you wanted to return all key/value pairs of my car, you could write:

```
for (const key in myCar) {
return `${key} is ${key[myCar]}`
}

//Expected output:
//   make is Subaru
// model is SVX
// year is 1992
// trim is LSi
// color is Silver-ish
// needs a paint job is true
//engine is 3.3 liter ‘boxer’ flat-six
```

### Arrays, in all their glory

Once you know objects, arrays aren’t a far precipice to leap onto.

Arrays are list-like objects in JavaScript, and also possess a lot of the same properties as JavaScript objects. Can contain numbers, strings, functions, and other arrays? Check. Can loop through using the `forEach()` method or a ‘for’ loop? Indeedy-do.  Accessible using bracket notation? Absolutely. For example, if I wanted to know what the 5th item on an array was, I could find it by referencing `myArray[4]` (remember they start from zero).  

But take careful note: dot notation can only access the properties of an array as an object (like `array.length` to return the length of the array, or `array.indexOf(‘This item’)` to find the index of the item you specify) and not in the same way as a “JavaScript object.”

The methods of altering arrays are different, too. They also use dot syntax, and offer methods to add/remove new items to the end (via `myArray.push(“New item”)` and `myArray.pop()`, respectively) the beginning (via `myArray.unshift()’ and `myArray.shift(“Another new item”`, respectively) and in any specified index in the array using `splice()`.

For example, if I wanted to add an item to the middle of my wife’s shopping list, hoping she won’t notice, I might use `splice()` thusly:

```
wifeShoppingList = [Bread, eggs, chips, 
``` 
