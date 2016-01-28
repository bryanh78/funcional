// var person = {name: 'Luisa', age: 25}
	function getName(person){
		return person.name
	}

console.log(getName({name: 'Luisa', age: 25}))



function totalLetters(letters){
	var count=0
	for (var  i = 0;i <letters.length; i++) {
		count += letters[i].length
		
	};
	return count
}

console.log(totalLetters(['javascript', 'is', 'awesome']))
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))

function keyValue (argument1, argument2) {
	// body...
	var thisObj = {};
	thisObj[argument1]= argument2
	return thisObj
}
console.log(keyValue('city', 'Denver'))

function negativeIndex (argument1, argument2) {
	// body...
	return argument1[argument1.length+argument2]
}
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))

function removeM (argument) {
	// body...
	var count = ""
	for (var i = 0; i < argument.length; i++) {
		if (argument[i] !=="m") {
			count += argument[i]
		}
	};
	return count;
}
console.log(removeM('family'))
console.log(removeM('memory'))

function printObject (argument) {
	// body...
	for(var i in argument) {
		console.log(argument[i]+ " is "+ i)
	}

}
printObject({ a: 10, b: 20, c: 30 })
printObject({ firstName: 'pork', lastName: 'chops' })

function vowels (argument) {
	// body...
	var vowel = []
	for (var i = 0; i < argument.length; i++) {
		if (argument[i]=== "a" || argument[i]==="e"|| argument[i]==="i"|| argument[i]==="o"|| argument[i]==="u") {
			vowel.push(argument[i])
		}
	};
	return vowel
}

console.log(vowels('alabama'))
console.log(vowels('What evil odd ducks!'))

function twins (Things) {
	// body...
	if (Things.length%2!==0) {
		return false
	}
	for (var i = 0; i < Things.length; i+=2) {
		if (Things[i] !== Things[i+1]) {
			return false
		}
	};
	return true
}


function or (argument) {
	// body...
	for (var i = 0; i < argument.length; i++) {
		if (argument[i]) {
			return true;
		}
	};
	return false
}
console.log(or([false, false, true, false]))
console.log(or([false, false, false]))
console.log(or([]))

function unique (argument) {
	// body...
	var arg = []
	arg.push(argument.sort())
	console.log(arg)
	for (var i = 0; i < arg.length; i++) {
		console.log(i)
		console.log(i+1)
		if (arg[i] === arg[i+1]){
			arg.splice(i,1)
		}
	};
}

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
console.log(unique(['todd', 'avery', 'maria', 'avery']))


// var user = {
//     name : 'steve'
// }
// // This is a 'pure function'. It takes input, returns output, but doesn't have any SIDE-EFFECTS. It doesn't manipulate variables outside of its scope.

// var changeName = function(name){
//     var newUser = {name : name}
//     return newUser
// }

// var user = changeName('stevie')

// console.log(user)