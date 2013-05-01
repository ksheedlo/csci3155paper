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
accomodate additional qualifiers. An early draft of the abstract syntax is shown
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
with `ComprehensionFor`, `ForBinding` was defined, and other fixes were applied
to make the syntax more robust.

## Implementation Status

Array comprehensions are a relatively new ECMAScript language feature, and
as such they are not completley supported on all current ECMAScript
implementations. Presently Mozilla's Firefox supports array comprehensions
in its SpiderMonkey ECMAScript parsing and execution engine.

Other investigated ECMAScript engines (V8, Carakan, Chakra, and
JavaScriptCore) did not appear to have any support for array comprehensions.

Despite the current lack of support, there have been discussions for all of the
aforementioned open source ECMAScript engines to support array comprehensions.
However, as Harmony is not yet an official standard, support for its language
features is not hightly prioritized among ECMAScript development communities.
Specificaly, the V8 development community has stated that additional features
will not be coming to the V8 engine until they are officially accepted in the
final version of the ECMAScript specification. Consequently, V8 will very likely
not support array comprehensions until the Harmony specification is finalized
and standardized. Unfortunately, the rest of the aforementioned ECMAScript engines
do not appear to have as open of a development community as does Mozilla and
Google. Consequently, information regarding their future support for array
comprehensions is not known.

## Implications and Future Predictions

For client-side ECMAScript, array comprehensions are not quite ready for
production use. This is due to the fact that it is hardly supported in any
of the available main-stream web browsers. Furtheremore, as V8 does not
currently implement array comprehensions, it is not feasibly usable in
server-side production code.

That said, a developer with the desire to use a higher-order operation such
as array comprehension could feasibly use a higher-level ECMAScript framework
to accomplish its functionality, as the higher-level framework could take care
of instances where the specific language feature is not yet available in the
browser that the code is being executed in. This could also be accomplished
through the use of a shim, or some ECMAScript-conforming syntax that could
be overloaded to emulate array comprehensions.

## Sources
- https://code.google.com/p/v8/issues/detail?id=890
- http://stackoverflow.com/questions/14511954/array-comprehensions-in-nodejs
- https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
