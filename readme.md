
# express-ws should return middleware results

Run:

`node index.js`

And then from two different terminals

`curl localhost:9988/api/test`

and 

`wscat -c localhost:9988/api/test-ws`

Note that the latter fails with an unhandled promise.
