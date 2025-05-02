//1.Create a closure which has three inner functions
function outerFunction() {
    let outerVariable = "I am an outer variable";

    function innerFunction1() {
        console.log(outerVariable + " from inner function 1");
    }

    function innerFunction2() {
        console.log(outerVariable + " from inner function 2");
    }

    function innerFunction3() {
        console.log(outerVariable + " from inner function 3");
    }

    return [innerFunction1, innerFunction2, innerFunction3];
}

const [closureFunction1, closureFunction2, closureFunction3] = outerFunction();
closureFunction1(); 
closureFunction2();
closureFunction3(); 
