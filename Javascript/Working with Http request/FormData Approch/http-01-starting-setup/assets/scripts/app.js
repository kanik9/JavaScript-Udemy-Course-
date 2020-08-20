const listElement = document.querySelector('.posts') ;
const postTemplate = document.getElementById('single-post');
const fetchBtn = document.getElementById('fetch');
const addBtn = document.getElementById("add");
const postList = document.querySelector('ul');



/*
    1. Header : 
        1. Content Type : 
                1. 'Content-Type' : 'application/json' : This Header is use to send Json data from client side to server side.

*/





// New Methods Which support only in Latest Js and Latest browsers which support ES6
function sendHttpRequest(method,url,data) {
    // It is new fetch api which is present in only in new Js not in old Js.
    return fetch(url,{
                body :data,
                method : method,
                //headers : {
                //    'Content-Type' : 'application/json' 
                //}
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

    // FormData is a predefine function/method which is use to work with form data
    const fd = new FormData(); 
    fd.append('title',title);
    fd.append('body',content);
    fd.append('userId',userId);
    try {
        sendHttpRequest(
            'POST',
            'https://jsonplaceholder.typicode.com/posts',
            fd
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