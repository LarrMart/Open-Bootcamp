let fact = 1;
let i = 1;
while(true) {
    fact *= i;
    if(i > 10)
        break;
    console.log("factorial de " + i + " = " + fact);
    i++;
}

