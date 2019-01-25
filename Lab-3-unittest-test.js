//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.

function test__checkStudent(input, expectedResult) {
    "use strict";
    let student__flag = false;
    let passOrFail = student__flag === expectedResult ? "===Pass===" : "===Fail===";

    let output__msg = "Input Value: " + input + " | Result: " + student__flag) + " | Expected Result: " + (expectedResult) + " | " + passOrFail + "<br/>";
    let data__output = document.getElementById('data');

    data__output.innerHTML += output__msg;
}

test__checkStudent('n01321102', true);
test__checkStudent('N01321102', true);
test__checkStudent('dfsdfdsfsdfd', true);
