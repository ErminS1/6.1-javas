function ChangeColor(){
alert("De kleur word aangepast.");
console.log("Het werkt ook in de console!");
document.getElementById("tekst1").style.color = "red";
}


function Calculator(num,num2){
    var num = parseInt("voer in wat je wilt berekenen","");
    var operator = parseInt("voer in wat je wilt berekenen","");
    var num2 = parseInt("voer in wat je wilt berekenen","");
    let answer = num + num2;
    console.log(answer);
    alert(answer);
}

function muliplyByFive(){
    var num = prompt("voer je getal in","");
    let answer = num * 5;
    console.log(answer)
    alert(answer);
}

function calculateMinutes(){
    var num = prompt("voer de aantal seconden in","");
    let answer = num / 60;
    console.log(answer)
    alert(answer);


}

