---
layout: post
title: Unit Testing — Putting Your Test Foot Forward
---

#### The skinny on writing your code test first and piece by piece

![Code on computer](/images/testing1.png)

###### _It might not be the most glamorous-feeling method of coding, but unit testing has been a staple of stable code from the dawn of computers_

Welcome to this brief lecture about unit testing and test driven development. To start with, do you have any questions?

### Uh, sure. What's unit testing?

An excellent question. **Unit testing** (at least, in the computer software-related use of the term) is a way of breaking software into units. These units are tested to validate that they perform as expected, and mesh with the system of code that they will be a part of.

### Okay. Cool. What's a unit?

Generally, a single **unit** of code is the smallest segment that still contains it's own logic and/or structure. It often takes the form of a method, function, or class, but can be an object or occasionally even an entire module.

It is by these individual pieces that code is broken down for testing, or in the case of test driven development, the portion by which larger modules and apps are constructed.

### Oh yes, that test driven... thing. What was that again?

**Test driven development** (or TDD) is a method of developing coding applications by writing tests first. These tests usually contain "test cases" of example input and output you desire from your next function/unit.

Once you've written a test, you then code your function until those tests no longer fail. Once all tests pass, you write your next test for your next function.

### Okay, cool, cool... and why would you do it that way? Is it advantageous? 

Oh, advantageous is at least a $10 word.

Yes, by writing code test-first, you give yourself a very clear direction to code in with built-in documentation of that code. You know exactly what conditions your function must fulfill, and how it fits into your project. 

You can think of it like reiterating your app requirements bit by bit in a way that forces you to carefully write code to match them. This makes sure that you only write the code that you need, limits the amount of debugging you have to do, and makes your code more modular and thus easier to maintain. 

TL;DR, you can update/refactor/add functions without as much fear you'll screw your whole module/project up. You also have a testing suite built in instead of having to make one later, or purchase other software to do it.

### Alright, good stuff. But, uh... doesn't that kind of, I dunno, take a long time to write all those tests?

Well, yes. There are some disadvantages to TDD.

It does take longer initially than simply writing your code. And while it certainly helps, it definitely does not eliminate the chance of bugs down the line, especially if you didn't write the tests carefully enough. But write too many tests too carefully, and you're also wasting a lot of time. It's a balancing act, and probably the most difficult part of TDD.

### But it's great other than that, right?

Well, not exactly. While it makes maintaining your code easier if your application requirements stay the same, if they change, you need to change your tests also. So you maintenance might be easier, but it might also be bigger. Writing and re-writing tests can get pretty tedious, too.

And unit testing doesn't really work if you're the only one doing it, either: management and your team members need to be on board. Disjointed work like that can ruin a project.

### ...alright, but other than that, it's—

Then there's also the problem of legacy code. It's very hard to apply the tactic to modules and apps already written, and for a lot of developers, much of their job involves working with the current systems in place.

It's also difficult to adjust the thinking of those who have spent years doing it another way.

### Anything else I should know about it? People are actually using this, right?

Test driven development is increasingly common in Agile-style development cycles, yes. And it probably has more disadvantages (and advantages, too) than we can enumerate here and keep this lecture brief. 

Suffice it to say that it has many points both good and bad, but if your team, company, group, or project is using it, you better know about it and use it, too. 

Savvy?

### Aye aye, cap'n.