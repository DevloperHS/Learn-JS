//Scream

/*
Create a function scream which will take in a value n,
return a string with the letter "a" repeated that many times. 

For example:
scream(5); // "aaaaa"
scream(10); // "aaaaaaaaaa"
*/

function scream(n) { 
    let string = "";
    
    for (let i = 1; i <= n; i++){
        string += "a";
    }
    return string


}

ans = scream(5);
console.log(ans) //aaaaa
