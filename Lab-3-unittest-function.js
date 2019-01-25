//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
 function validateHNumber(id)
{
	"use strict";
	var pattern =/(n|N)[0-9]{8}/;
	let isValid = pattern.test(id);
	if(isValid)
	{
		return true;
	}
	else
	{
		return false;
	}
}
