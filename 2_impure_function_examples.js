
/**
Example 2 : Test whether below functions are Side -Effect-Free(i.e. Pure Functions) or not ?
*/

//1. Printing something to STDOUT : that's a side-effect because its doing something besides (a)calculating the input and (b)returning the output

var name = "yogi";

function greet(name){
	console.log("Good Morning ,"+name);//it's trying to change the OUTSIDE WORLD by anything other than RETURNING the result
}
greet(name);



//2. Using a Global Variable : that's a side-effect because function is something besides the passed input from the OUTSIDE-WORLD

var yogi_standard = "second";

function is_yogi_in_second_standard(){
	return yogi_standard==="second"; // it's dependent on something OTHER than what's passed in the input for returning it's result 
						// hence a side-effect
}

console.log(is_yogi_in_second_standard());