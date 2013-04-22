# Array Comprehensions in ECMAScript Harmony
## Spring 2013
### James Pfaff, Ken Sheedlo, Jack Skinner

**Abstract.** Array comprehensions are currently being standardized in
ECMAScript 6 (Harmony) and implemented in current Javascript engines. This is a
powerful new feature that should lead to increased code clarity and more fluid
implementation of algorithms. We will examine the history, standardization and
implementation of array comprehensions in Harmony and comment on the
implications of this new feature for the web.

## Motivation

A number of programming languages have adopted *list comprehension* features
allowing the user to construct complex data structures using a concise syntax.
Programmers use these comprehensions to express maps, filters over a predicate,
and combinations of several underlying data structures all at the same time.  In
some cases, using list comprehensions can allow a nontrivial algorithm to be
rewritten in a fraction of the code that a traditional imperative or recursive
functional approach might take, without sacrificing code clarity. List
comprehensions change a procedural or functional style into a declarative one,
which lowers the overhead for a given degree of code complexity. Furthermore,
ECMAScript is one of the world's most popular programming languages, and the
standardization of array comprehensions in Harmony means that programmers across
the Web will soon be able to use this powerful idea in every target browser.
Note that ECMAScript supports an `Array` data type, but not a list; therefore
the correct way to refer to the feature in Harmony is *array comprehension*. We
will use the term *list comprehension* when referring generically to this type
of comprehension.

## History


