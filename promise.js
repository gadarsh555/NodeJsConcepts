var p = new Promise((resolve,reject)=>{
     var k = 0;
    setTimeout( ()=>{
       resolve(1);
       reject(new Error('error occured !'));
    },2000);
});

p 
  .then(result => console.log("result : ",result))
  .catch(err => console.log('error :',err.message));