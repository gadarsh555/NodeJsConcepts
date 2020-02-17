//Settled Promises


// promise is already resolved
var p1 = Promise.resolve({id : 1 , name : 'adarsh'});
p1.then(result => console.log(result));



// promise is already rejected
var p2 = Promise.reject(new Error('Error occured '));
p2.catch(err => console.log(err));