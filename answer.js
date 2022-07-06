const books = require("./PromiseProblem");

//  1 
function signIn(username){
    let currDate = new Date();
    let seconds = currDate.getSeconds();
    return new Promise((resolve, reject) => {
         if(seconds > 30){
            resolve();
         }
         else{
             reject("Auth Failure : error 500");
            }

        });

    
}

//2

function getBooks(){
    let integer = Math.random();
    return new Promise((resolve, reject) =>{
        if(integer*1 == 1){
            let listOfBooks = books.reduce((acc, eachBook) => {
                if(!acc[eachBook["name"]]){
                    acc[eachBook["name"]] = [];
                }
                acc.push(eachBook["name"]);
                return acc;
            }, {});
            resolve(listOfBooks);   
        }
        else{
            reject("No Books");
        }
    });

}

//3 and 5

function activity(){
    let logResult = [];
    signIn("username").then((data => {
        logResult(logData('SignIn-Sucess'));
        getBooks(books).then((data) => {
            logResult.push(logData('getBook - success'));
        })
        .catch((err) => {
            console.log(err)
            logResult.push(logData('getBook -Faliure'));
        })
    }))
    .catch((err) => {
        console.log(err);
        logResult.push(logData('SignIn -Faliure'));
    })
}

//4
function logData(activity){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(activity)
        }, 1000);
    })

}

//6 and 7
//for Marry
signIn("Marry").then((data)=> {
    console.log(data);
    getBooks(books).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
})

//for Emily
signIn("Emily").then((data)=> {
    console.log(data);
    getBooks(books).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
})


