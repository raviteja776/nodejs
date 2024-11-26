# nodejs

- Express Server created using express module

-- Patterns
/** 

? - Optional
+ - same key multiple
* - any key multiple 

.*fly$ - match
((/a/)) - any letter with a matches
*/


app.use - any method 

GET ==> Middleware(app.use) ==> route handlers(app.get)


(req,res,next)
(err,req,res,next) - first parameter will be the error