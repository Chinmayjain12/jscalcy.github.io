const calcy = () => {
    let maths = document.getElementById("maths").value;
    let english = document.getElementById("english").value;
    let hindi = document.getElementById("hindi").value;
    let computer = document.getElementById("computer").value;

    let grades = "";

    let totalgrades = parseFloat(maths) + parseFloat(english) + parseFloat(hindi) + parseFloat(computer);
    
    let perc = (totalgrades/400) * 100;

    if ( perc <= 100 && perc >= 80) {
    grades = "A";
    } else if ( perc <= 79.99 && perc >= 60) {
        grades = "B";
    } else if ( perc <= 59.99 && perc >= 40) {
        grades = "c";
    } else {
        grades = "F";
    }

    if (perc >= 40) {
        document.getElementById("showdata").innerHTML = ` Out of 400 your total marks is ${totalgrades} and percentage is ${perc}. <br>
        your grades is ${grades}. you are pass.`
    }

    else
     {
        document.getElementById("showdata").innerHTML = ` Out of 400 your total marks is ${totalgrades} and percentage is ${perc}. <br>
        your grades is ${grades}. you are fail.`
    }



}
