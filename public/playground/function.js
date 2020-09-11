/*
Higher Order Function
    - is a function, which takes another function as an argument and/or return a function as value 

Callback Function
    - the function which is being passed as an argument to another function, is called a callback function

const numbers = [10,20,30]

const result = numbers.map(function(ele){
    return ele + 5
})

console.log(result)

*/

function mul(n){
    return (m) => {
        return n * m
    }
}
const result = mul(5)(10) // 50 // currying 

console.log(result)