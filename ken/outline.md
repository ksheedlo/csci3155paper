# List Comprehensions in ECMAScript 6

## Abstract

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

## Notes
- "Need carefully consider the change proposal in terms of documenting its proposed impact to the language and its use"
  - Need to justify this particular language feature's significance in the context of the language
  - Making more code more concise and readable
- "Apply the terminology and concepts we have used throughout the course"
- "Need code examples, diagrams, and other evidence"
  - Use code examples from the proposal
  - Diagrams can include LaTeX markup for the formal mathmatical definition
  - Other evidence may include things like Stack Overflow articles that praise this particular language feature
- "Cite supporting evidence"
  - Primarily primary sources from the language's community (likely the ECMAScript draft)
  - Is there a specific citation format we need to follow? MLA? APA? Other?
  - Other Notes
        - When citing evidence, you should look for authority over form. For this paper, blog posts
          and their comments, emails in mailing lists, and Q&A in StackOverflow-type sites are valid
          primary sources, even if informal, along with articles and books. What matters here is the
          content of the discussion and where it went. Consider carefully the author of the source,
          and its centrality, in theconversation. In addition, do filter out noise and irrelevance.
          Careful selection and presentation are important parts of what we will evaluate.
- Must be written using the GitHub flavor of Markdown
- Between 1000 and 1500 words
  - Excluding long quotes, code examples, and Markdown overhead
