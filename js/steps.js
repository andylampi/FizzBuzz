function step1() {// build an array of 100 elements with Fizz and Buzz
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
}

function step2(){ // it print numbers from 1 to 20
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
}



exports.moduls = {
    step1,
    step2,
}
