/*
    1. Different ways of creating arrays in JavaScript : 
        1. const number = [1,2,3,4];    Most Comman. And efficent way of creating array
        2. const newNumbers = new Array();
        3. const Numbers = Array();
        4. const ofNeumber = Array.of()
        5. const fromNeumber = Array.from()

    
    2. Functions : 
        1. .push()     : It is use to push or append data in array.It also return the new length of array
        2. .unshift()  : It is use to add element at the biginning of the array .It also return the new length of array
        3. .pop()      : It is use to delete last element from array. And it also return poped value as an string form .
        4. .shift()    : It is use to delete element from the starting of an array.
        5.  use index  : If you want to replace value with new value use index. 
        6. .splice()   : It is use to insert element at any place between two elements.  
        7. .slice()    : It return a new array . For more understanding see examples :
        8. .concat()   : It will help to add two array one at the end of other.
        9. .indexof()  : It return the index of the searching element. If the searching value repeated then in that case it return only the first index . If the searched value is not present in the array that in that case the returned value is -1, not true or false
            1. lastIndexOf() : It start searching element from last of the array
        10 .find()     : 
            1. findIndex() :
        11. .include() : It will return true or false .
        12. .forEach() : Alternative of for loop-of
        13. .map()     : 
 

        Note : 
                1. push and pop are more faster than shift and unshift .
                2. syntax of splice:
                            array.splice(start_point,number_to_delete_element_from_the_starting_position, new_element);
                    Note : 
                        number_to_delete_element_from_the_starting_position = 0 : then in that case no element delete from starting possition
    Examples : 

            // 1. First Method : 
            const number = [1,2,3,4];
            console.log(number);

            // 2. Second Method : 
            const moreNumbers = new Array(); // === []
            console.log(moreNumbers);

            const moreNumbers2 = new Array('Hi', 'Bye', 'Good Day'); // === ['Hi', 'Bye', 'Good Day']
            console.log(moreNumbers2);

            const moreNumbers3 = new Array(1,2); // === [1,2]
            console.log(moreNumbers3);

            const moreNumbers4 = new Array(5); // === [] : empty array of length of 5. This Happen when a single int value pass .
            console.log(moreNumbers4);

            // 3. Third Method :

            const Numbers = Array(); // === []
            console.log(Numbers);

            const Numbers2 =  Array('Hi', 'Bye', 'Good Night'); // === ['Hi', 'Bye', 'Good Day']
            console.log(Numbers2);

            const Numbers3 =  Array(1,2,3); // === [1,2]
            console.log(Numbers3);

            const Numbers4 =  Array(3); // === [] : empty array of length of 3  . This Happen when a single int value pass .
            console.log(Numbers4);

            // 4. Fouth Method ;

            const yetNumbers = Array.of(); // === []
            console.log(yetNumbers);

            const yetNumbers2 =  Array.of('Hi', 'Bye', 'Good '); // === ['Hi', 'Bye', 'Good Day']
            console.log(yetNumbers2);

            const yetNumbers3 =  Array.of(1,2,4); // === [1,2,4]
            console.log(yetNumbers3);

            const yetNumbers4 =  Array.of(4); // === [] : empty array of length of 4. This Happen when a single int value pass .
            console.log(yetNumbers4);

            // 5th method : This Method does not take multiple input it take iterator as an input
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            /    const yetNumbers = Array.from(); // === [] This type of decleration is not acceptable . Js engine show error  /
            /    console.log(yetNumbers);                                                                                      /     
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        


            const yetNumbers2 =  Array.from('Hi'); // === ['H','i']
            console.log(yetNumbers2);

            const yetNumbers3 =  Array.from([1,2,4]); // === [1,2,4]
            console.log(yetNumbers3);

            const yetNumbers4 =  Array.from(4); // === [] : empty array of length of 4. This Happen when a single int value pass .
            console.log(yetNumbers4); 

            const list = document.querySelectorAll('li')
            console.log(list)
            const yetNumbers5 =  Array.from(list); // === [] : empty array of length of 4. This Happen when a single int value pass .
            console.log(yetNumbers5);


            //////////////////
            const hobbies = ['Cooking', 'Sports'];
            const personalData = [30, "Max", {moreDetails : []}];

            console.log(hobbies);
            console.log(personalData);

            const analyticsData = [[1,2,3],[5,7,8,9]]

            for(const data of analyticsData){
                for (const dataPoint of data){
                    console.log(dataPoint);
                }
            }


            const hobbies = ['Cooking', 'Sports'];
            console.log(hobbies);
            hobbies.push("Playing Games");
            console.log(hobbies);

            hobbies.unshift("Eating"); // It follow right shift operation
            console.log(hobbies);

            hobbies.pop();
            console.log(hobbies);

            hobbies.shift();  // It follow the left shift operation
            console.log(hobbies);

            hobbies.splice(0,0,'Good Food')
            console.log(hobbies);

            hobbies.splice(1,0,'Traviling')
            console.log(hobbies);

            hobbies.splice(1,0,'Traviling',"sleep")
            console.log(hobbies);

            hobbies.splice(0) // This will erease whole array
            console.log(hobbies);

            hobbies.splice(-1,0,'Traviling',"sleep")
            console.log(hobbies);


            const testResult = [1,2.3,4,5,6.7,8,9,10,-5,4,-2]

            const storeResult = testResult
            console.log(storeResult, testResult)

            const testResults = [1,2.3,4,5,6.7,8,9,10,-5,4,-2]

            const storeResults = testResults.slice();
            testResults.push(5.9);

            console.log(storeResults, testResults)

            // both gives different result .


            const testResults1 = [1,2.3,4,5,6.7,8,9,10,-5,4,-2]
            console.log(testResults.slice(2,6)) // start to end-1
            console.log(testResults.slice(2))   // start to end of array
            console.log(testResults.slice(3,2)) // It will return 0 length array. This is because 'end point > start point'
            console.log(testResults.slice(-2,1))// same as above one
            console.log(testResults.slice(-5,-3))


            const testResult = [1,2.3,4,5,6.7,8,9,10,-5,4,-2];
            const storeResult = testResult.concat([1,2,3,444,555,666,77,8888]);
            console.log(storeResult, testResult)


            const testResult = [1,2.3,4,5,6.7,8,9,10,-5,4,-2];
            console.log(testResult.indexOf(4))


*/

const price = [10.99,5.99,3.99,6.59];
const tax = 0.19;

const taxAdjPrices = price.map((price, idx, prices) => {
    const priceObj = {
        index : idx, taxAdjPrice : price * (1+tax)
    };
    return priceObj;
})
console.log(taxAdjPrices)


