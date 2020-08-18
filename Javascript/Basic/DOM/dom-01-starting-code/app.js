/* DOM : Document object Model :
        The DOM in the end is this loaded and rendered HTML code or to be precise , the object representation of this code which the browser creates behind the scenes into which we can tap with javascript .
        So Javascript can work with a bunch of objects which will be exposed to us as Javascript objects which in the end represent what the browser rendered or what the browser made of that html code which 
        was provided. And in Js we got certain methods, certain functionalities .

    1. How to access html in  js:
        1. document :
                        1. Root DOM Node
                        2. Provide access to element querying , DOM content etc.
                        3. It Provide all access of window/loded page only .
        2. window   :
                        1. The active Browser window /Tab
                        2. Acts as global storage for script, also provides access to window-specific properties and methods.
                        3. It Provide whole access window and browser both.
    
    2. How to selects elements by using js.
        1. Select single Element :
                        1. Return Single elements .
                        2. Different ways of querying elements (by CSS selector ,by ID ,or ByClassName etc).
                        3. Direct refrence to DOM element is returned

        2. Select Multiple Elements :
                        1. Return Collections of elements (array-like objects) : NodeList
                        2. Different ways of querying elements (by css selector, by tag name, by css class)
                        3. querySelectorAll()return a non-live NodeList, getXByY return live NodeLists

    3. What are Nodes and Elements :
        1. Nodes : 
                        1. The Objects that make up the DOM
                        2. HTML tages are 'elements nodes'(or just 'elements')
                        3.Text created 'text nodes'
                        4. Attributes created 'attribute nodes'
        
        2. Elements : 
                        1. Special properties and methods to interact with the elements
                        2. Available methods and properties depend on the kind of elements
                        3. Can be selected in various different way
                        4. can be created or removed via Js  
                1. Attributes :
                2. Properties : 

    4. Example of selector : 
        1. getElementById, ...
        2. querySelector .....
    
    Note :1. document is the property of window.
          2. Browser automatically apply 'window.function_name', If the browser can not find defination of that function inside the script. 
              example = alert()  : Browser read this  like window.alert()
          3. Elements are one type of nodes
          4. In get.... developer can pass only name 
          5. But in querySelector developer also pass the css notation of class , id , etc .
              example : document.querySelector('.list-item') // we can use . here because it is a class name.
        

*/



/*
    Traversing the DOM : 

    
*/

// Main Code : 


// How to select multiple elements :

//const listElements = document.querySelectorAll('li');
const listElements = document.getElementsByTagName('li')

for (const listEle of listElements){
    console.dir(listEle);
}