/*
for-in: duyệt qua các thuộc tính của object
for-of: duyet mang, như foreach c++
*/

const person = {
    name: "minh sang",
    age: 100,
    address: "xaaaa"
}
//for in
for(const x in person){
    console.log(x);
}



function reverseString(str){
    let sstr = "";
    for(let i = str.length - 1; i >=0; i--){
        sstr += str[i];
    }
    console.log(sstr);
}

function findMax(arr){
    let MAX = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<arr.length; i++){
        MAX = Math.max(arr[i], MAX);
    }
    return MAX;
}
// console.log(findMax([1,4,5,1000,2,11]));

// Tong Hop Bai Tap Vong Lap
//cau 1
function listEvenNumbers(s, e){
    for(let i = s; i <= e; i++){
        if(i % 2 === 0)
            console.log(i);
    }
}
//cau 2
function sumOddNumbers(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(i % 2 !== 0)
            sum += a[i];
    }
    return sum;
}

//cau 1 part 2
function isAccending(a){
    if(a.length <= 1)
        return false;
    for(let i = 1; i<a.length; i++){
        if(a[i] < a[i - 1]){
            return false;
        }
    }
    return true;
}

//cau 2
function isprime(n){
    for(let i = 2; i*i<=n; i++){
        if(n % i == 0)
            return false;
    }
    return n > 1;
}
//cau 3
function sumPrimes(s, e){
    let sum = 0;
    for(let i = s; i<=e; i++){
        if(isprime(i))
            sum+=i;
    }
    return sum;
}


//cau 1 part 2
function repeatChar(c, n){
    let c2 = "";
    for(let i = 0; i<n; i++){
        c2 += c;
    }
}
//cau 2
function arrayToHTMLList(arr){
    console.log("<ul>");
    for(let i = 0; i<arr.length; i++){
        console.log("   <li>" + arr[i] + "</li>");
    }
    console.log("/<ul>");
}

function linearSearch(arr, target){
    for(let i = 0; i<arr.length; i++){
        if(a[i] === target){
            return i;
        }
    }
    return -1;
}