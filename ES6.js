// 1.  solution

const li = `<li><div class="row"><div class="col-md-4"><img src="${moviePoster}" height="250" alt="" /></div><div class="col-md-8"><h2>${movieTitle}</h2></div></div></li>`;


// 2. Solution.

function multiply(num1, num2) {
  return num1 * num2;
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
  let numStr = num.toString();             
  const numZeros = totalLen - numStr.length; 
  for (let i = 1; i <= numZeros; i++) {
    numStr = `0${numStr}`;
  }
  return numStr;
}

function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function greet(who) {
  console.log(`Hello ${who}`);
}

// 3. Solution

const callbacks = [];
for (let i = 0; i < 10; i++) {
  callbacks.push(() => { console.log(i) })
}

callbacks[2]()



// 4. Solution

const account = {
  username: "marijn",
  password: "xyzzy"
}

account.password = "s3cret" // (*much* more secure)

console.log(account.password)