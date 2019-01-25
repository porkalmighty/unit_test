//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.

function test__checkHumbrId(input, expectedResult) {
    "use strict";
    let student__flag = false;
    let passOrFail = "";
    let passOrFailClass = "";

    if(validateHNumber(input)){
        student__flag = true;
    }

    passOrFail = student__flag === expectedResult ? "===Pass===" : "xxxFailxxx";
    passOrFailClass = student__flag === expectedResult ? "pass" : "fail";

    let output__msg = "<strong> Value tested: " + input + " Expected Result: " + expectedResult + " | <span class="+ passOrFailClass +">" + passOrFail + "</span></strong><br/>";
    let data__output = document.getElementById('data');

    data__output.innerHTML += output__msg;
}

test__checkHumbrId('n01321102', true); //test to pass
test__checkHumbrId('N01321102', true); // test to pass
test__checkHumbrId('dfsdfdsfsdfd', false); // test to fail
test__checkHumbrId('n013211083', false); //test to fail
test__checkHumbrId('n0132112', false);
test__checkHumbrId('N013211033', false);// test to fail
test__checkHumbrId('N0132113', false);
