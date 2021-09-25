//Birth day values
function mathBirthday(){
    const input = document.getElementById("InputDate");
    const value = input.value;
    alert(value);
}

// Math Birthday = 10^n days after the day they were born.
function MathDay(){
    const n = 1;
    while ( n > 0){
        const birthday = Math.pow(10, n)
        console.log(birthday);
        n++;
    }
}

//Math birthday calculation
function calculation(year, month, day) {
    return day + MathDay()
}