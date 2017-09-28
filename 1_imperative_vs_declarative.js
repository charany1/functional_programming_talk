
/**
Example 1 : Imperative vs Declarative way of greeting .
*/
var name = "yogi";
var greeting = "Good Morning, ";

console.log("Imperative : ")
console.log(greeting+name);


console.log("Declarative : ")
function greet(name){
	return "Good Morning ,"+name;
}

console.log(greet("anuj"));
