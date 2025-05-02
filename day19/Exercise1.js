//1.Create a closure which has one inner function
function outerFunction() {
    let outerVariable = "I am an outer variable";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); 
