// 1. Write a JavaScript function that reverses a number.
// Example Input: x = 32243;
//Expected Output: 34223

function reverseNumber(n) {
	n = n + "";
	return n.split("").reverse().join("");
}

console.log(reverseNumber(32243));


// 2. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example Input: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'

function upperCase(str) {
	var array = str.split(' ');
	var newarray = [];

	for (var x = 0; x<array.length; x++) {
		newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
	}

	return newarray.join(' ');
}

console.log(upperCase('the quick brown fox'));

// 3. Write a JavaScript function that returns array elements larger than a number.
// Example iniput: arr = [7, 1, 8, 3, 5], x = 3
// Example output: [7, 8, 5]

function largerThan(num) {
     return function(element, index, array) {
     return (element > num);
     };
   }
var result = [7, 1, 8, 3, 5]. filter(largerThan(3));
console.log(result);

// 4. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Sample function: longestCountryName(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function longestCountryName(country) {
	return country.reduce(function(name,country) {
		return name.length>country.length ? name : country;
	},"");
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));


// 5. Write a JavaScript function to generate an array between two integers of 1 step length. Go to the editor
// Sample function: rangeBetwee(4, 7)
// Expected output: [4, 5, 6, 7]
// Sample function: rangeBetwee(-4, 7)
// Expected output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

function arrayBetween(start, end) {
	if (start > end) {
		var arr = new Array(start - end + 1);
		for (var i=0; i<arr.length; i++, start--) {
			result[i] = start;
		}
		return arr;
	}
	else
	{
		var arr1 = new Array(end-start+1);
	for (var j=0; j<arr1.length; j++, start++) {
		arr1[j] = start;
	}
	return arr1;
	}	
}

console.log(arrayBetween(4, 7));
console.log(arrayBetween(-4, 7));
