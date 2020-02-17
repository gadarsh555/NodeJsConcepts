var p1 = new Promise((resolve,reject) => {
      setTimeout(()=>{
         resolve(1);
         reject(new Error('error ocurred in p1'));
      });
});


var p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
       resolve(2);
       reject(new Error('error ocurred in p2'));
    });
});

Promise.all([p1,p2])  // this promise is resolved only when the results of promise p1 and p2 are returned combined
                    // if any one of them fails then this promise fails and error occurs
   .then(result => console.log(result))
   .catch(error => console.log('error : ',error.message));


Promise.race([p1,p2])  // this promise is resolved if any one of the promises p1 and p2 are returned 
                    // if both  of them fails then this promise fails and error occurs
   .then(result => console.log(result))
   .catch(error => console.log('error : ',error.message));

