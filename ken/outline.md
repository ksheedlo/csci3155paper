# List Comprehensions in ECMAScript 6

- Abstract

## Motivation

- Set-builder notation
    - Why this is useful, relevant, etc.
    - Want to use similar notation in computer programs
- Declarative style
    - High level
    - Potential for fewer bugs
    - Potential for fewer SLOC for a given level of complexity

## History

- Early implementations: SETL, NPL
- Genealogy: Miranda -> Haskell -> Python -> Javascript
- PEP 202
    - Python list comprehensions are very similar to Harmony array comprehensions
    - Good history is available on this

## Standards progress

- ECMAScript Working Draft
    - And edits
- Look for a mailing list
- TODO: Need more research done here

## Implementation status

- Mozilla
    - Currently implemented in Firefox and recent Spidermonkey
    - Include code samples
- V8
    - Look for a current issue (I think one exists)
    - V8 is somewhat more stable than Mozilla and will be slower to implement
- Microsoft
    - Would be interesting to find some information on this from MS
    - Will it be implemented in IE 11? 12?

## Implications and future predictions

- When it will be acceptable to use in production-ready application code?
    - Make a prediction
    - What about specialized libraries? (e.g., JQuery and AngularJS can use
      more advanced features as long as they deal with the possibility of
      not having them)
- Feasibility of a library shim for legacy browsers going forward

