console.log('first');

/*  nested function 
   user(1,(data)=>{
    getRepo(data.username,(repo)=>{
        getCommit(repo[0],(commits)=>{
            console.log('Commits are :',commit);
        });
    });
}); */

/*  a way to write promise response
user(1).then(data =>{
    getRepo(data.username).then(repo =>{
        getCommit(repo[0]).then(commit =>{
            console.log('Commits are :',commit);
        });
    });
}); */

// better way to write promise response
// way to make functionn calls in a sequence using promises one after the another so that they work synchronously
/* user(1)
  .then(data => getRepo(data.username))
  .then(repo => getCommit(repo[0]))
  .then(commits => console.log(commits))
  .catch(err => console.log('error : ',err.message));
console.log('third'); */


// way to make functionn calls in a sequence using async and await one after the another so that they work synchronously
// async tasks working synchronously using async and await
async function displayCommits(){
    // try-catch to handle errors
   try {
        var data = await user(1);
        var repo = await getRepo(data.username);
        var commits = await getCommit(repo[0]);
        console.log(commits);  
   }//try
    catch (error) {
        console.log(error.message);  
   }//catch
}

displayCommits()
console.log('third');

function user(id){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=> {
            console.log(" working in database with user "+id+" ...");
            resolve({id:id , username:'adarsh'});
          // reject(new Error('error occured'));
        },2000);
  });
}

function getRepo(username){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
        console.log('Getting All the Repos for '+username+'  .....')
        resolve (['repo1','repo2','repo3']);
        /* reject(new Error('error occured')); */
    },2000);
  });
}

function getCommit(repo){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            console.log('Getting all the commits for '+repo+' ....');
            resolve (10);
            /* reject(new Error('error occured')); */
        },2000);
  });
}