csci3155paper
=============

Principles of Programming Languages Final Paper

## Array Comprehensions in ECMAScript 6

### Team
- Ken Sheedlo
- James Pfaff
- Jack Skinner

### Topics Covered
We will be discussing list comprehensions and array comprehensions in general, and array comprehensions in ECMAScript 6 (Harmony) in particular. 

### Expected Sources
[Harmony Wiki](http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions)
[V8 Project](https://code.google.com/p/v8/)
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/JavaScript)
[Mozilla Harmony Tracking](https://bugzilla.mozilla.org/show_bug.cgi?id=694100)

### Code Examples
The following examples can run in recent versions of Firefox.

    [s.toUpperCase() for (s of ['foo', 'bar', 'car'])]
        > ['FOO', 'BAR', 'CAR']
            [x+1 for (x of [41, 42, 43])]
                > [42, 43, 44]

### Work Status

- [x] Choose topic
- [ ] Research history of list comprehensions (Python, Haskell, Coffeescript)
- [ ] Research proposals and spec development
- [ ] Research implementation status in Mozilla, V8, IE and others
- [ ] Discuss proposals and implementation in context
- [ ] Present findings
