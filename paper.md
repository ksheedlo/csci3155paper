# Array Comprehensions in ECMAScript Harmony
## CSCI 3155 - Principles of Programming Languages
## Spring 2013
### James Pfaff, Ken Sheedlo, Jack Skinner

**Abstract.** Array comprehensions are currently being standardized in
ECMAScript 6 (Harmony) and implemented in current JavaScript engines. This is a
powerful new feature that should lead to increased code clarity and more fluid
implementation of algorithms. We will examine the history, standardization and
implementation of array comprehensions in Harmony. We will investigate the
reaction in the JavaScript community and comment on the implications of this new
feature for the web.

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

List comprehensions are inspired by the familiar mathematical *set-builder
notation*. For instance, if a mathematician wanted to express the set $Y \subset
X$ such that the predicate $p(y)$ held for each element $y$ in the set $Y$, he
would write

$\{ y \in X | p(y) \}$

A functional programmer might write this equivalently as `filter p xs`. However,
greater code clarity can be achieved with syntax that more closely resembles the
mathematical notation. For instance, in Python this idiom can be expressed as

    [x for x in xs if p(x)]

There is somewhat more typing involved than the traditional filter, but the
intent is clear. Further, list comprehension syntax scales much more nicely to
complex expressions than the equivalent map and filter. For instance, if I want
to map `f` over the Cartesian product of `xs` and `ys`, but only if the
predicate `p` holds, in Python:

    [f(x, y) for x in xs for y in ys if p(x, y)]

The first recognizable list comprehension syntax appeared in the language SETL
in the late 1960s, followed by NPL in 1977. The historical precedent for including array
comprehensions arguably begins with the Miranda language, which was released in
1985. In Miranda, one can create a list of odd squares less than 10,000 like so:

    [n*n | n <- [1..100]; n*n mod 2 = 1]

Miranda was a strong influence on the developers of Haskell. In Haskell, the
code to express odd squares less than 10,000 looks like this:

    [n*n | n <- [1..100], n*n `mod` 2 == 1]

The Haskell syntax has remained essentially the same since Haskell was
originally defined in 1990. Haskell in turn influenced the development of
Python. List comprehensions were standardized in PEP 202 and implemented in
Python 2.0, which was released in 2000. In Python, odd squares less than 10,000
can be expressed in the following way:

    [n*n for n in range(1, 101) if (n*n)%2 == 1]

This brings us to array comprehensions in ECMAScript Harmony. Unfortunately,
ECMAScript has neither a `range` function nor a convenient array shorthand for
ranges (as Haskell and Miranda do). Instead, we will initialize a list of
numbers from 1 to 100 using an immediately-invoked function expression (IIFE).
That makes our expression for odd squares less than 10,000 look like this:

    var xs = (function () {
      var rs = [], i = 1;
      for (; i <= 100; i++) { rs.push(i); }
      return rs;
    })();
    [n*n for (n of xs) if (n*n % 2 == 1)]

Note the similarity between the ECMAScript and Python syntax. If ECMAScript had
a range function or array shorthand, the code would be just as concise as the
equivalent Python or Haskell. 

## Standards Progress

The current working draft for ECMAScript Harmony includes a well-defined grammar
for array comprehensions.

    ArrayComprehension:
        [Comprehension]
    Comprehension:
        ComprehensionQualification AssignmentExpression
    ComprehensionQualification:
        ComprehensionFor ComprehensionQualifierList
    ComprehensionQualifierList:
        ComprehensionQualifier
        ComprehensionQualifierList ComprehensionQualifier
    ComprehensionQualifier:
        ComprehensionFor
        ComprehensionIf
    ComprehensionFor:
        for (ForBinding of AssignmentExpression)
    ComprehensionIf:
        if (AssignmentExpression)
    ForBinding:
        BindingIdentifier
        BindingPattern

Since the early working drafts of the spec, the concrete syntax for array
comprehensions has seen little to no change. However, the abstract syntax has
been significantly rewritten to make `ComprehensionFor` more flexible and to
accommodate additional qualifiers. An early draft of the abstract syntax is shown
below:

    ArrayComprehension:
        [Expression ComprehensionForList]
        [Expression ComprehensionForList if (Expression)]
    ComprehensionForList: 
        ComprehensionFor
        ComprehensionForList ComprehensionFor 
    ComprehensionFor:
        for (LeftHandSideExpression of Expression)

Notice the changes between the early draft and the current working draft.
`ComprehensionIf` was defined and abstracted into `ComprehensionQualifier` along
with `ComprehensionFor`. Additionally, `ForBinding` was defined, and other fixes
were applied to make the syntax more robust and flexible.

## Implementation Status

Array comprehensions are a relatively new ECMAScript language feature, and
as such they are not completely supported on all current ECMAScript
implementations. Presently Mozilla's Firefox supports array comprehensions
in its SpiderMonkey JavaScript parsing and execution engine.

Other investigated ECMAScript implementations (V8, Carakan, Chakra, and
JavaScriptCore) did not appear to have any support for array comprehensions.

Despite the current lack of support, there have been discussions for all of the
aforementioned open source ECMAScript engines to support array comprehensions.
However, as Harmony is not yet an official standard, support for Harmony
language features is not highly prioritized among ECMAScript development
communities.  Specifically, the V8 development community has stated that
additional features will not be coming to the V8 engine until they are
officially accepted in the final version of the ECMAScript specification.
Consequently, V8 will very likely not support array comprehensions until the
Harmony specification is finalized and standardized. Unfortunately, the rest of
the aforementioned ECMAScript engines do not have development communities as
open as those of Mozilla and Google. Information regarding their future support
for array comprehensions is not known.

## Community Impact

To the extent that the JavaScript community is familiar with list
comprehensions, array comprehensions appear to be an in-demand feature. Multiple
StackOverflow threads ask for list comprehensions or a way to emulate them in
JavaScript. We also found a number of blog articles promoting the topic. Some in
the community have raised concerns about readability and compatibility, but the
community appears to be largely for implementing this feature.

## Implications and Future Predictions

For client-side ECMAScript, array comprehension syntax is not quite ready for
production use. This is due to the fact that it is not supported in most
mainstream web browsers, with the exception of Firefox. Furthermore, as V8
does not currently implement array comprehensions, it is not feasibly usable in
server-side production code, for instance in Node.js. We expect that due to
rapid iteration on the part of browser developers in recent years, application
code will be able to use array comprehensions within two to three years. This
will add value by cleaning up the syntax and decreasing the rate of errors in
application code.

That said, a developer with the desire to use a higher-order operation such as
array comprehensions could feasibly use a higher-level ECMAScript framework to
accomplish that functionality today. The higher-level framework could take care
of instances where the specific language feature is not yet available in the
browser where the code is being executed. A shim could feasibly implement
similar behavior, but the ECMAScript implementation would most likely have to
be modified to support array comprehension syntax.

## Sources
- https://code.google.com/p/v8/issues/detail?id=890
- http://stackoverflow.com/questions/14511954/array-comprehensions-in-nodejs
- https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
- http://stackoverflow.com/questions/11479418/array-comprehension-in-javascript
- http://stackoverflow.com/questions/4964456/make-javascript-do-list-comprehension
- http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions
