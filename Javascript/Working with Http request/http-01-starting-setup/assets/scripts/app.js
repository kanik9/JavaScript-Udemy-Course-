/*
    Note : 
           1. xhr.open(Method of request , ulr on which you pass the request)   this create a package which contain th details .
           2. this JSON.parse helps to convert Json data into JavaScript data .
           3. this send the request according to the upper package.
           4. By using JSON.parse method we can convert json data to javascript data manullay. But we can use xhr.responseType = 'json', this will convert automatically to Javascript data.
*/

/*

// Manullay 
const xhr = new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/posts'); 


xhr.onload = function () {
    const listOfData = JSON.parse(xhr.response);  
    console.log(listOfData);
}

xhr.send(); 
*/
const xhr = new XMLHttpRequest();
const listElement = document.querySelector('.posts') ;
const postTemplate = document.getElementById('single-post');
const fetchBtn = document.getElementById('fetch');
const addBtn = document.getElementById("add");
const postList = document.querySelector('ul');





/*

// Old Method :
    Note : 1. Header : 
            1. Content Type : 
                    1. xhr.setRequestHeader('Content-Type' , 'application/json' );: This Header is use to send Json data from client side to server side.





// Fetching Data
function sendHttpRequest(method,url,data) {
    const promise = new Promise((resolve, reject) => {
        xhr.open(method,url); 

        xhr.responseType = 'json'
    
        xhr.onload = function () {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else {
                reject(new Error("Something went wrong!"))
            }
        };
        xhr.onerror = function() {
            reject(new Error('Failed to send request'))
        }

        xhr.send(JSON.stringify(data)); 
    });
    return promise;
}

async function fetchPosts(){
    try {
        const responseData =  await sendHttpRequest(
            'GET',
            'https://jsonplaceholder.typicode.com/posts');
            const listOfData =responseData;  
            for (const post of listOfData){
                const postEl = document.importNode(postTemplate.content, true);
                postEl.querySelector('h2').textContent = post.title.toUpperCase();
                postEl.querySelector('p').textContent = post.body;
                postEl.querySelector('li').id = post.id;
                listElement.append(postEl);
              }
    }
    catch (error){
        alert(error.message);
    }
}

async function createPosts (title,content){
    const userId = Math.random();
    const post = {
                    title : title,
                    body : content,
                    userId : userId,
                 };
    try {
        sendHttpRequest(
            'POST',
            'https://jsonplaceholder.typicode.com/posts',
            post
         )
    }
    catch (error){
        alert(error.message);
    }
                 
}

fetchBtn.addEventListener('click', fetchPosts);
addBtn.addEventListener('click', event => {
    const enteredTitle = document.getElementById("title").value;
    const enteredContent = document.getElementById("content").value;
    event.preventDefault();
    //const enteredTitle = event.currentTarget.querySelector('#title').value;
    //const enteredContent = event.currentTarget.querySelector('#content').value;
    createPosts(enteredTitle, enteredContent);
    
});

postList.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON'){
        const postId = event.target.closest('li').id;
        try {
            sendHttpRequest(
                'DELETE',
                `https://jsonplaceholder.typicode.com/posts/${postId}`
                )
        }
        catch (error){
            alert(error.message);
        }
    }
})

*/

/*
    1. Header : 
        1. Content Type : 
                1. 'Content-Type' : 'application/json' : This Header is use to send Json data from client side to server side.

*/





// New Methods Which support only in Latest Js and Latest browsers which support ES6
function sendHttpRequest(method,url,data) {
    // It is new fetch api which is present in only in new Js not in old Js.
    return fetch(url,{
                body :JSON.stringify(data),
                method : method,
                headers : {
                    'Content-Type' : 'application/json' 
                }
                }
        )
        .then(response => {
            if(response.status >= 200 && response.status < 300){
                return response.json();
            }
            else {
                return response.json().then(error => {
                    console.log(error);
                    throw new Error("Something went wrong - server-side!");
                })
            }
            
    })
    .catch(error => {
        console.log(error);
        throw new Error("Something went wrong!");
    });  
}

async function fetchPosts(){
    try {
        const responseData =  await sendHttpRequest(
            'GET',
            'https://jsonplaceholder.typicode.com/posts');
            const listOfData =responseData;  
            for (const post of listOfData){
                const postEl = document.importNode(postTemplate.content, true);
                postEl.querySelector('h2').textContent = post.title.toUpperCase();
                postEl.querySelector('p').textContent = post.body;
                postEl.querySelector('li').id = post.id;
                listElement.append(postEl);
              }
    }
    catch (error){
        alert(error.message);
    }
}

async function createPosts (title,content){
    const userId = Math.random();
    const post = {
                    title : title,
                    body : content,
                    userId : userId,
                 };
    try {
        sendHttpRequest(
            'POST',
            'https://jsonplaceholder.typicode.com/posts',
            post
         )
    }
    catch (error){
        alert(error.message);
    }
                 
}

fetchBtn.addEventListener('click', fetchPosts);
addBtn.addEventListener('click', event => {
    const enteredTitle = document.getElementById("title").value;
    const enteredContent = document.getElementById("content").value;
    event.preventDefault();
    //const enteredTitle = event.currentTarget.querySelector('#title').value;
    //const enteredContent = event.currentTarget.querySelector('#content').value;
    createPosts(enteredTitle, enteredContent);
    
});

postList.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON'){
        const postId = event.target.closest('li').id;
        try {
            sendHttpRequest(
                'DELETE',
                `https://jsonplaceholder.typicode.com/posts/${postId}`
                )
        }
        catch (error){
            alert(error.message);
        }
    }
})