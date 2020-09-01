---
layout: post
title: Functions, Objects, and Arrays---Know the F.O.A.
---
Welcome back to Adam of Blog. In this week’s episode, we will:


  *[Examine functions in JavaScript, including callbacks and promises](#functions)  
  *[Look at JavaScript objects, and how to loop through them](#objects)  
  *[Dive into arrays, and a couple ways to loop through them, and:](#arrays)  
  *[Bonus learning!](#bonus)  



## JavaScript functions: in brief~~s~~

<a name="functions"></a>

Functions are where most of the thinking goes on in the script of JavaScript. They are composed of a list of statements, calculations, or tasks that perform the logic needed to contribute to a site or app. To think of them metaphorically, they are sort of like the verbs and order of an English sentence (with objects, arrays, and variables being sort of like nouns), or like the chamber, barrel, and mechanisms of gun that fires those object bullets. 

Functions can be named or unnamed (in the case of arrow functions), can take zero or more parameters (or pieces of information you want passed into the function), and then have a list of statements that do the thinking of your script.

Take the following example:

```javascript
function myFunction (parameter1, parameter2) {
    let definedVariable = “Definition of first variable”
    let definedVariable2 = “and the second one.”
    return definedVariable1.concat(‘ ‘,  definedVariable2)
}
```

Here, I’ve taken two parameters, but just to show you where they go: they aren’t actually being used in this example function. For my statements, I then define two variables whose scope is contained within the function, and then return (give the result of the function as) the two being added or 'concatenated' together. Calling the function should return the complete sentence, with a space between.


### Callback function: 

Another common use of a function is a callback function, or a function that is passed in another function as an argument. As the function processes, the callback is called (or “invoked”) inside the function it has been placed in. 

This way you can break up tasks into smaller functions, and call them in the larger function to perform more involved logical movements without making your code look like a mess, and writing each task of a complex process all in one function. You can pass functions into other functions because JavaScript treats them like objects. That’s why JS is often called an “object-oriented language.”

Example:

```javascript
function anotherFunction (callbackFunc) {
    let definedVariable3 = “Now, I can add this third variable as a string to the other two in this new function by calling the myFunction again.”
    return callbackFunc.concat(‘ ‘, definedVariable3)
}

anotherFunction(myFunction) //Here, I have used the first “myFunction” as a callback inside of the “anotherFunction” function.
```

Callbacks are primarily used in two ways. Either 1) synchronously, or where information is processed in order it is called instantly, or 2) asynchronously, where two or more processes of your script are not functioning in direct chronological order of what’s written, but are related actions occurring without waiting for the action occurring before it to complete. 


### Promises (no pinky swears required)

One of the more common asynchronous functions in modern JavaScript is a `Promise`. It’s essentially a type of callback, plus more. MDN defines it very succinctly as “an object representing the eventual completion or failure of an asynchronous operation.”  This means that you can set up parts of code to wait to see if a prior process important to your task succeeds or fails, and act accordingly, and only act after this prior process is completed.

You can even chain them with the `then()` method, waiting on each phase of the code to be completed before moving on to the next one.  Here’s a basic example (using arrow functions to keep things short):

```javascript
attemptAction()
.then(answer => anotherAction(answer)) //these arrow functions are returning results, 
.then(answer2 => thirdAction(answer2))//but they don’t need the ‘return’ keyword.
.catch(ifAllFails) //used if all attempted conditions fail to launch another callback function
```

Other nifty, related items include [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statements and the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)


<a name="objects"></a>

## JavaScript Objects: objectively objects, without objection

Technically, since JavaScript is an object-oriented language, nearly everything you work with using it is an ‘object.’ So if the English language usage of the word “object” weren’t confusing enough for you, there is also something in JavaScript specifically referred to as “a JavaScript object” that has particular properties separate from other object types.

A helpful way to start thinking of them is to compare them to real world objects. Cars, people, clients, documents, and more all have details about them that their name alone does not convey. In their simplest form, objects are basically a list of those details, organized by key (like “client_name”) and value (“Alexander Maxamillian”) pairs. 

Objects can be initialized by the object's name being defined in a variable, and the properties of that object following in curly braces, using colons and commas to separate key/value pairs.

Here’s an example of how it would look for my real world car:

```javascript
var adamsCar = {
	make:  ‘Subaru’,
	model:  ‘SVX’,
	year:  1992,
	trim: ‘LSi’,
	color: ‘Silver’,
	“needs a paint job”: true
}
```

With an object established in this method, you can now access its properties, either using dot notation (`adamsCar.year` will return “1992) or bracket notation (`adamsCar[“needs a paint job`] returns you the boolean ‘true’, and unfortunately, it is.)  

Once you’ve got these details of your object lined up, they are by no means set. You can alter the values (`adamsCar.color = “Silver-ish”`) or add new key/value pairs (`adamsCar.engine = “3.3 liter ‘boxer’ flat-six”`). Both operations can use either notation type. 

Objects can also exist within a function that you can call to spit out new objects based on the keys you’ve previously set up, and values you specify.

Like-a so:

```javascript
function carMaker (make, model, year, color) {
	return {
		make: make,
		model: model,
		year: year,
		color: color,
		body: body,
}
} 

let newCar = carMaker(“Honda”, “Civic EX”, 1995, “Gray”, “coupe”) 
//This is my wife’s car. It’s actually a cool car!
```

### What objects can contain

The values in objects don’t just have to be simple strings or numbers. They can contain variables, functions, arrays, and even other objects, and can be called on and parsed accordingly. You can also loop through them by using a special [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop, but also using the [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method.

For example, if you wanted to return all key/value pairs of my car, you could write:

```javascript
for (const key in myCar) {
    return `${key} is ${key[myCar]}`
}

//Expected output:
// make is Subaru
// model is SVX
// year is 1992
// trim is LSi
// color is Silver-ish
// needs a paint job is true
// engine is 3.3 liter ‘boxer’ flat-six
```

<a name="arrays"></a>

## Arrays, in all their glory

Once you know objects, arrays aren’t a far precipice to leap to.

Arrays are list-like objects in JavaScript, and also possess a lot of the same properties as JavaScript objects. Can contain numbers, strings, functions, and other arrays? Check. Can loop through using the `forEach()` method or a ‘for’ loop? Indeedy-do. Accessible using bracket notation? Absolutely. For example, if I wanted to know what the 5th item on an array was, I could find it by referencing `myArray[4]` (remember they start from zero).  

But take note: dot notation can only access the properties of an array as an object (like `array.length` to return the length of the array, or `array.indexOf(‘This item’)` to find the index of the item you specify) and not values in the same way as a “JavaScript object.”

### Altering arrays

The methods of altering arrays are different, too. They also use dot syntax, and offer methods to add/remove new items to the end (via `myArray.push(“New item”)` and `myArray.pop()`, respectively) the beginning (via `myArray.unshift()` and `myArray.shift(“Another new item”`, respectively) and in any specified index in the array using [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

For example, if I wanted to add an item to the middle of my wife’s shopping list, hoping she won’t notice, I might use `splice()` thusly:

```javascript
wifeShoppingList = [‘Bread’, ‘eggs’, ‘chips’, ‘broccoli’, ‘kidney beans’, ‘blueberries’, ‘diced tomatoes’];
wifeShoppingList.splice(3, 0, ‘gushers, family size’);
``` 

Arrays accept all these methods [and more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to read, manipulate, and copy the information you need.

### A last note on arrays vs objects

The order in which entries appear in an array matter, and are accessible via the bracket notation (i.e. `myArray[12]` for the 13th entry) but this is not necessarily the case for objects in practical usage. Objects <em>may</em> be ordered, but since they function more like dictionaries where you use keys to look up values, they may <em>not</em> be, too. Generally, it's safer to avoid relying on how the key/value pairs are ordered in your processes.

And that’s all I have to say... about that.

<a name="bonus"></a>


## Bonus

Want a quick way to know all the properties/keys of an object? You can make an array of them using the method `object.getOwnPropertyNames()`. If all you need are the keys, it might save you some time in having to make a `for...in` loop to scoop them all out.

