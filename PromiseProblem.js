/* 
Note
-Log each operation that you do.
-Try to minimize number of api calls if possible.
-Try to avoid waiting for log promise to finish.
-Sign in and getBooks Promise rejections must always give appropriate responseCode and reason.
    reason: string     example - Auth Failure  or Service failure
    responseCode: number -  example: 401 or 500
-Activity Logs should be stored in an array.


1Q. Write a signIn function
Function signature: takes a single argument username and returns a promise.
Returned Promise's value is based on seconds (getSeconds) from current date.
only resolve the promise if seconds are greater than 30 

2Q. Write a getBooks method that returns a promise
it picks a random integer between [0 and 1].
if integer picked is 1 ..it resolves the promise with list of Books
else rejects the promise saying service error.


3Q. Execute sign In 
Once Signin is successful, make getBooks call.
Only make getBooks call if you are signed in.

Log the results for all possible operations.
Sign In - Success,
Sign In - Failure,
GetBooks - Success,
GetBooks - Failure.

4Q. Write a logData method that always returns a resolved promise. It takes 1 second to finish its operation.
It Accepts the activity and saves the activity logs. 

5Q. Write a function to display all activity logs.
Signature: accepts no Params.
Return:  name of the user that calls it and all its logs. 

6Q. Perform sign in and getBooks calls for 2 Users (Mary, Emily)

7Q. Finally display the logs for both of them.

*/

const books = [{
    name: "Hostilities of War",
    _id: "book293492178",
}, {
    name: "A Beautiful Sunset",
    _id: "book293492178",
}, {
    name: "Lorem Ipsum",
    _id: "book293492178",
}, {
    name: "Rogue Asassin",
    _id: "book293492178",
}]

module.exports = books;


