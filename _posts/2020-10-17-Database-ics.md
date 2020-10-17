---
layout: post
title: Database-ics — Distinguishing SQL, NoSQL, and third choice, 
---
#### We cover the basics of modern database ideology: what they do, what they don't, and what they kinda...


![Wooden File cabinet](/images/oldDatabase.jpg)

###### *Photo by [Jan Antonin Kolar](https://unsplash.com/@jankolar){:target="_blank"} on [Unsplash](https://unsplash.com/s/photos/database?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"}. Old school database. Requires structure to work, and takes up a lot of space, so no wonder it was phased out.*

The well-known W. E. Deming quote goes: “In God we trust, all others must bring data.” 

And data we have brought: so much, that in a way you could postulate that the world wide web was created for the purpose of housing, distributing, and manipulating data. When CERN made the web public in 1993, they weren't exactly hoping this would lead to people taking selfies with their meals to post on Instagram. Nonetheless, even every social media site has to make use of massive amounts of stored data, just like everything else that works online. Accordingly, as need and invention have dictated, a number of ways to maintain that data (you know, in databases) have been created.

Here's just a few generalities on what databases you can find out there, what they are good food, and what they ain't.


## The Well-Aged and Established: SQL

SQL stands for Structure Query Languages, and is pronounced like "ess-quell" like we're trying to tamp down on 'S's or "sequel" like that movie that's usually not quite as good as the one before it, but is sometimes better. SQL databases are built on "relational" models, a system to relate bits of data to each other and cut down on duplicated bits to save on space. They are highly structured, table-based, and for smaller databases, have superior query speed and flexibility. They remain the most common type of database used, and have their origins in IBM research work from the 1970s. The amount of establishment alone makes them worth learning, but they are particularly adept at multi-row data, like for accounting.

So if you are an accountant, you should perk up at sound of SQL. But if you're also a non-mutant, it can still be useful for many situations. Essentially, data types that have "strict entities and well-defined relationships" are a good bet.

![Tax forms](/images/taxForms.jpg)

###### *Photo by [Kelly Sikkema](https://unsplash.com/@kellysikkema){:target="_blank"} on [Unsplash](https://unsplash.com/s/photos/accountant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"}. Let's just all be glad that there minds warped enough to handle this kind of work. Otherwise, we might have to do it. Now, if we could do something about the warped minds that create it...*

SQL databases do, however, have some drawbacks. Because their schema are so structured, it's very difficult to make general changes to SQLs mid-stream. That makes the foreplaning of that structure of supreme importance. They also have trouble parsing loosely organized or variant data, and when the database grows particularly large, many SQLs queries start to cost more as they have to join data from multiple tables to complete. 

Finally, most SQL databases work well with "vertical" scaling (where you beef up the RAM, space, and processing power of the server running it) but often have trouble scaling horizontally, i.e. spreading the tasks it undertakes over several severs. As data grows more massive and space more cheap and people more impatient, this can be a costly drawback.

## The Potpourri of Modern Design: NoSQL

From looked upon from a flat, strict definitional standpoint, NoSQL is just "not SQL", or even sometimes, "not only SQL."  As definitions go, this is on the broad side: something between "of a barn" and "of a whale." But there are general tenets that NoSQL database engines (firm in their stance against quelling S's) tend to follow. 

Firstly, NoSQLs are dynamic in their schema, meaning they are both flexible in what they can contain and how they are altered over time. NoSQLs are apt to manage unstructured data in a variety of forms, and being non-rational and less organized, work excellently for rapid growth, real-time, enormous-sized data storage. While dropping a big ol' CPU on your slowdown problems with NoSQL is generally unhelpful, they are great for horizontal scaling. They can "shard" their workload over a number of servers, and when requests and data are deep and high, manage both excellently. JSON data, with its wide degree of variance and popularity with web development circles, is most at home in NoSQL databases.

![server farm](/images/server.jpg)

###### *Photo by [Ian Battaglia](https://unsplash.com/@ianjbattaglia){:target="_blank"} on [Unsplash](https://unsplash.com/s/photos/server?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"}. Server farms are rapidly becoming the new best place to hide the Arc of the Covenant.*

However, these new kids on the block also have a few downsides. Firstly, they do take up more space than their SQL uncles at all sizes. As noted, spaced is cheap now and getting cheaper, but it remains a factor. Secondly, most NoSQLs don't pass muster on what's called the "ACID" test, where a database is proven high in Atomicity, Consistency, Insolation, and Durability. There are some that do better, but by and large that traditional level of security and reliability that a SQL has (be quelled, S's!) may not be available in an NoSQL.

That leads to another problem: there are so *many* NoSQLs, and all of them specializing in some specific data structure. Some are good for general documents (like MongoDB), others key-value storage (like Redis or DynamoDB). Some, like Cassandra and HBase, work better for wide-column work, where you have large amounts of data with predictable queries. If you're working with graphing data, where you need to analyze relationships between data, Neo4j and Amazon Neptune will serve you better.

But while having all this variety means you can most likely find something to fit your specific need, it also means that finding and getting expertise in an individual database will be more difficult. 


Simultaneously, it's important to note that both SQL (*The Empire Strikes Back*) and NoSQL (*Superman IV*, ugh) databases are not monolithic: they fall on more of a spectrum as to their utility, strengths, and weaknesses. Add to that, and increasingly there are engines that are blurring the lines between the two.

## The Third Option: Horizontal-ish SQLs, PostgreSQL

Advocates of the traditional SQL weren't going to just sit on their thumbs and let the whipper-snappers take over. In response to the growing needs of big data and horizontal scaling, a number of variant database types have emerged. Some are NewSQLs (yes, incredible naming sense there) that maintain their relational database, but try to work some distributed logic magic on top of them. Still others are "Distributed SQLs" which use a "ground-up" approach to making SQL more horizontal while maintaining its tangy ACID touch.

Yet another variant is PostgreSQL. Often pronounced simply "postgres" (where's the dictionary for all these?), PostgreSQL is a hybrid SQL. Instead of the strict Relational Database Management System (RDBMS) employed by most of its SQL brethren, PostgreSQL uses Object-Oriented Database (you guessed it, OOD) structure. The key difference is OODs are "organized around objects rather than actions, and data rather than logic." This is a place where JSON and other object types that story a variety of data rather than just alphanumeric values can live.

![server farm](/images/postgres.png)

###### *Ah, I guess that's it. Sorta. From [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL){:target="_blank"}*

As a result, PostgreSQL floats in a happy medium of high ACID compatibility, but is also more flexible and more able to handle large databases and complex queries. It's also more approachable than many first-time divers into the SQL sea (uh, *Thor: Ragnarok*?), particularly because it keeps more strictly to the actual Structured Query Language tenets than other mainline SQLs. 

Overall, its a well-rounded compromise between the the feats and the frailties of both sides. That doesn't mean it fits all spaces (there are plenty of times where its far better to be a specialist rather than an all-rounder), but like its NoSQL counterpart MongoDB, it positions itself somewhat in the middle of the equation to catch a broader group of needs.

## The Sum Up

TL;DR: SQL likes structure and is reliable and powerful, but is difficult to alter, hates disorganization, struggles with massive database sizes, and scales vertically. NoSQL handles disorder like a champ, scales horizontally like a dream, handles big data, and is ideal for things like JSON data and real-time analytics, but is less secure, less widely established, and is so broadly defined that each type varies greatly in its specialty and capability. Finally, there are spectrums between these, like PostgreSQL or NewSQL/Distributed SQL databases, and NoSQLs like MongoDB that are more general purpose.


Everything online needs a database. That there are so many with variable focuses and failings means you can likely find a good fit for what you need, but it also means it might take some looking. Generalities are helpful, but if you plan on making money on this, specifics will pay much bigger dividends in the long run, whether its SQL or not. 

Meanwhile, I'll still be chewing over how to pronounce it.

Essquell. Sequel. SQL. Sequin. A squall. Askew l. Eschew. A squirrel.

Squirrel!

![squirrel](/images/squirrel.jpg)

###### *Squirrel! Photo by [Caleb Martin](https://unsplash.com/@cmart10){:target="_blank"} on [Unsplash](https://unsplash.com/s/photos/squirrel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank"}.*