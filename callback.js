// way to make functionn calls in a sequence using calbacks one after the another so that they work synchronously

console.log('first');
user(1,displayUser);
console.log('third');

function displayCommit(commit){
    console.log('Number of Commits are :',commit);
}

function displayRepos(repo){
    //console.log('repos are : ',repo);
    getCommit(repo[0],displayCommit);
}

function displayUser(data){
   //console.log(data);
   getRepo(data.username,displayRepos);
}

function user(id,callback){
    setTimeout( ()=> {
        console.log(" working in database...");
        callback({id:id , username:'adarsh'});
    },1000);
}

function getRepo(username,callback){
    setTimeout( ()=>{
       // console.log('username : ',username);
       console.log('Getting All the Repos.....')
        callback (['repo1','repo2','repo3']);
   },2000);
}

function getCommit(repo,callback){
    setTimeout(()=>{
        console.log('Getting all the commits....');
        callback(10);
    });
}