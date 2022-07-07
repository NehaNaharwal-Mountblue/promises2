const books = require("./PromiseProblem");

//  1 
function signIn(username) {
    let currDate = new Date();
    let seconds = currDate.getSeconds();
    return new Promise((resolve, reject) => {
        if ( seconds >  30) {
            resolve(username);
        }
        else {
            reject("Auth Failure : error 500");
        }

    });
}

//2

function getBooks() {
    let integer = Math.round(Math.random())
    return new Promise((resolve, reject) => {
        if (integer ==  1) {
            let listOfBooks = books.reduce((acc, eachBook) => {
                acc.push(eachBook["name"]);
                return acc;
            }, []);
            //console.log(listOfBooks);
            resolve(listOfBooks);
        }
        else {
            reject("No Books");
        }
    });

}





//4
function logData(record) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(record)
        }, 1000);
    })

}

//3,5,6 and 7
function RecordOfUser(username) {
    let userLogs = [];
    function activity(){
        Promise.all(userLogs)
        .then((logs) => {
            console.log(logs);
        })
    }
    signIn(username)
        .then((data) => {
            userLogs.push(logData(('SignIn-Sucess')));
            return getBooks(books)
        })
        .then((data) => {
            userLogs.push(logData(('getBook - success')));
            activity();
        })
        .catch((err) => {
            userLogs.push(logData((err)));
            activity();
        })
}

RecordOfUser('Mary');
RecordOfUser('Emily');
