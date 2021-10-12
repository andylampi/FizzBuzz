function step1() {// it builds an array of 100 elements and return Fizz or Buzz or FizzBuzz
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

function step2(){ // it prints numbers from 1 to 20 and return Fuzz or Buzz or FuzzBozz
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
function step3(){// it builds an array of 100 elements and return Foo or Boo or FooBoo
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
function step4(){// it builds an array of 100 elements and return Foo or Boo or FooBoo
    let arr = [];
    for(let n = 0; n < 101; n++){
        if(n < 16){ // if n < 16 return Small
            if(n == 12){
            arr[n] = "Small <br>" // For customize html
        }
        else{
            arr[n] = "Small" 
        }
    }
        else if(n > 95){ // if n > 95 return Big
            arr[n] = "Big"
        }
        else{
            if(n == 36){
                arr[n] = `${n}  <br>` // for  customize  html
            } 
            else if(n == 63){
                arr[n] = `${n}  <br>` // for  customize  html
            } 
            else if(n == 90){
                arr[n] = `${n}  <br>` // for  customize  html
            }
            else{
                arr[n] = n // else add
            }
        }
    }
    document.getElementById("number").innerHTML = arr;
    return arr;
}
function step5(){// it changes the rules of step1
    let arr = []; 
    for(let n = 0; n < 101; n++){
        if((n%5 == 0) && (n%3 == 0)){ // if n is mutiple of both return "FizzBuzz"
            arr[n] = "FizzBuzz"
        }
        else if(n == 3 || n%3 == 0){ // if n is 3 o multiple return Buzz
        arr[n] = "Buzz";
        }
        else if(n == 5 || n%5==0){ // if n is 5 o multiple return Fizz
            arr[n] = "Fizz <br>";
        }
        else{
            arr[n] = n; // else add
        }
    }
    document.getElementById("number").innerHTML = arr;
    return arr; 
}
function step6(){ // new Rules; multiples(3,5) return FTW, multiples(3or5) return GG
    let arr = []; 
    for(let n = 0; n < 101; n++){
        if(n%3 == 0 && n%5==0){ // if true return FTW
            arr[n] = "FTW <br>"; // <br> is for customize html
        }
        else if(n%3 == 0 || n%5==0){ // if true return GG
            arr[n] = "GG"
        }
        else{ // else add
            arr[n] = n;
        }
    }
    document.getElementById("number").innerHTML = arr;
    return arr; 
}

exports.step1 = step1;
exports.step2 = step2;
exports.step3 = step3;
exports.step4 = step4;
exports.step5 = step5;
exports.step6 = step6;


