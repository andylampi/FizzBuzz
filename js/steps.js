function step1() {// build an array of 100 elements and return Fizz or Buzz or FizzBuzz
    let arr = []; 
    for(let n = 0; n < 101; n++){
        if((n%5 == 0) && (n%3 == 0)){ // if n is mutiple of both return "FizzBuzz"
            arr[n] = "FizzBuzz"
        }
        else if(n == 3 || n%3 == 0){ // if n is 3 o multiple return Fizz
        arr[n] = "Fizz";
        }
        else if(n == 5 || n%5==0){ // if n is 5 o multiple return Buzz
            arr[n] = "Buzz <br>";
        }
        else{
            arr[n] = n; // else add
        }
    }
    document.getElementById("number").innerHTML = arr;
    return arr; 
}

function step2(){ // it print numbers from 1 to 20 and return Fuzz or Buzz or FuzzBozz
    let arr = [];
    for(let n = 0; n < 21; n++){
        if((n%5 == 0) && (n%3 == 0)){ // if n is mutiple of both return "FizzBuzz"
            arr[n] = "FizzBuzz"
        }
        else if(n == 3 || n%3 == 0){ // if n is 3 o multiple return Fizz
        arr[n] = "Fizz";
        }
        else if(n == 5 || n%5==0){ // if n is 5 o multiple return Buzz
            arr[n] = "Buzz <br>";
        }
        else{
            arr[n] = n; // else add
        }
    }
    document.getElementById("number").innerHTML = arr;
    return arr;
}
function step3(){// build an array of 100 elements and return Foo or Boo or FooBoo
    let arr = [];
    for(let n = 0; n < 101; n++){
        if((n%7 == 0) && (n%11 == 0)){ // if n is mutiple of both return "FizzBuzz"
            arr[n] = "FooBoo"
        }
        else if(n == 7 || n%7 == 0){ // if n is 7 o multiple return Fizz
        arr[n] = "Foo";
        }
        else if(n == 11 || n%11==0){ // if n is 11 o multiple return Buzz
            arr[n] = "Boo <br>";
        }
        else{
            arr[n] = n; // else add
        }
    }
    document.getElementById("number").innerHTML = arr;
    return arr;
}


exports.step1 = step1;
exports.step2 = step2;
exports.step3 = step3;


