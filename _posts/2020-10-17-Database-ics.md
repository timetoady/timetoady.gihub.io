---
layout: post
title: Database-ics — Distinguishing SQL, NoSQL, and third choice, 
---
#### We cover the basics of modern database ideology: what they do, what they don't, and what they kinda...


The well-known W. E. Deming quote goes: “In God we trust, all others must bring data.” And data we have brought: so much, that in a way you could postulate that the world wide web was created for the purpose of housing, distributing, and manipulating data. When CERN made the web public in 1993, they weren't exactly hoping this would lead to people taking selfies with their meals to post on Instagram. Nonetheless, even every social media site has to make use of massive amounts of stored data, just like everything else that works online. Accordingly, as need and invention have dictated, a number of ways to maintain that data (you know, in databases) have been created.

Here's just a few generalities on what databases you can find out there, what they are good food, and what they ain't.


## The Well-Aged and Established: SQL

SQL stands for Structure Query Languages, and is pronounced like "ess-quell" (like we're trying to tamp down on 'S's) or "sequel" like that movie that's usually not quite as good as the one before it, but sometimes better. SQL databases are built on "relational" models, a system to relate bits of data to each other and cut down on duplicated bits to save on space. They are highly structured, table-based, and for smaller databases, have superior query speed and flexibility. They remain the most common type of database used, and have their origins in IBM research work from the 1970s. The amount of establishment alone makes them worth learning, but they are particularly adept at multi-row data, like for accounting.

So if you are an accountant, you should perk up at sound of SQL. But if you're also a non-mutant, it can still be useful for many situations. Essentially, data types that have "strict entities and well-defined relationships" are a good bet.

It does, however, have some drawbacks. Because its schema are so structured, it's very difficult to make general changes to SQLs mid-stream. That makes foreplaning of supreme importance for a SQL database. Accordingly, they have trouble parsing loosely organized or variant data. Additionally, when the database grows particularly large, many SQLs have start cost more, as it has to join data from multiple tables to complete a query. 

Finally,most SQL databases work well with "vertical" scaling (where you beef up the RAM, space, and processing power of the server running it) but often have trouble scaling horizontally, i.e. spreading the tasks it undertakes over several severs. As data grows more massive and space more cheap, this can be a costly drawback.

## The Potpourri of Modern Design: NoSQL

From looked upon from a flat, strict definitional standpoint, NoSQL is just "not SQL", or even sometimes, "not only SQL." As definitions go, this is on the broad side: something between "of a barn" and "of a whale." But there are general tenets that NoSQL database engines tend to follow. 

Firstly, they are dynamic in their schema, meaning they are both flexible in what they can contain and how they are altered over time. NoSQLs are apt to manage unstructured data in a variety of forms, and being non-rational and less organized, work excellently for rapid growth, real-time, enormous-sized data storage. While dropping a big ol' CPU on your slowdown problems with NoSQL generally is unhelpful, they are great for horizontal scaling. They can "shard" their workload over a number of servers, and when requests and data are deep and high, manage these excellently. JSON data, with its wide degree of variance and popularity with web development circles, is most at home in NoSQL databases.

However, these new kids on the block also have a few downsides. Firstly, they do take up more space than their SQL uncles at all sizes. As noted, spaced is cheap now and getting cheaper, but it remains a factor. Secondly, most NoSQL don't pass must on what's called the "ACID" test, where a database is proven as high in Atomicity, Consistency, Insolation, and Durability. There are some that do better, but by and large that traditional level of security and reliability that SQL has may not be available in an NoSQL.

That leads to another problem: there are so *many* NoSQLs, and all of them specializing in some data structure. Some are good for general documents (like MongoDB), others key-value storage (like Redis or DynamoDB). Some, like Cassandra and HBase, work better for wide-column work, where you have large amounts of data with predictable queries. If you're working with graphing data, where you need to analyze relationships between data, Neo4j and Amazon Neptune will serve you better. 

But while having all this variety means you can most likely find something to fit your specific need, it also means that finding and getting expertise in an individual database will be more difficult. 

Simultaneously, it's important to note that both SQL and NoSQL databases are not monolithic: they fall on more of a spectrum as to their utility, strengths, and weaknesses. Add to that, and increasingly there are engines that are blurring the lines between the two.

## The Third Option: Horizontal-ish SQLs

Advocates of the traditional SQL weren't going to just sit on their thumbs and let the whipper-snappers take over. In response to the growing needs of big data and horizontal sharding, a number of variant database types have emerged. Some are NewSQLs (yes, incredible naming sense there) that maintain their relational database, but try to work some distributed logic magic on top of them. Still others are "Distributed SQLs" which use a "ground-up" approach to making SQL more horizontally scalable while maintaining its tangy ACID touch.

Yet another variant is PostgreSQL. Often pronounced simply "postgres" (as if 'Q's aren't linguistically hobbled often enough), PostgreSQL is a hybrid SQL. Instead of the strict Relational Database Management System (RDBMS) employed by most of its SQL brethren, PostgreSQL uses Object-Oriented Database (you guessed it, OOD) structure. The key difference is OODs are "organized around objects rather than actions, and data rather than logic." This is a place where JSON and other object types that story a variety of data rather than just alphanumeric values can live.

As a result, PostgreSQL floats in a happy medium of high ACID compatibility, but also is more flexible and more able to handle large databases and complex queries. It's also more approachable than many first-time divers into the SQL sea, particularly because it keeps more strictly to the actual Structured Query Language tenets than other mainline SQLs. 

Overall, its a well-rounded compromise between the the feats and the frailties of both sides. That doesn't mean it fits all spaces (there are plenty of times where its far better to be a specialist rather than an all-rounder), but like its NoSQL counterpart MongoDB, it positions itself somewhat in the middle of the equation to catch a broader group of needs.