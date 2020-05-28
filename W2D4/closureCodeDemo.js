// In the following examples we will predict what will 
// be printed to the terminal






// 1

function dinerBreakfast(food) {
    let order = "I'd like cheesy scrambled eggs and ";

    function finishOrder() {
        return order + food;
    }

    return finishOrder();
}

// console.log(dinerBreakfast('green tea'));









// 2

function dinerBreakfast2(food) {
    let order = "I'd like a(n) " + food;

    function withEggs() {
        order = order + ' and cheesy scrambled eggs, please!'
    };

    withEggs();
    return order;
}

// console.log(dinerBreakfast2('avocado toast'));









// 3

function dinerBreakfast3() {
    let order = "I'd like cheesy scrambled eggs";

    return function (food) {
        order = order + " and " + food;
        return order;
    }
}

let breakfastOrder = dinerBreakfast3();

console.log(breakfastOrder);
console.log(breakfastOrder('cappuccino'));
console.log(breakfastOrder('pancakes'));
