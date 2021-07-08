//시작쿨타임 계산기
function coolsum() {
    var num1 = document.getElementById("number1").value; //스킬 쿨타임
    var num2 = document.getElementById("number2").value; //토핑 쿨타임
    
    var result = Math.round( ((parseInt(num1) * (1 - (parseInt(num2) / 100))) * 0.3) );
    document.getElementById("coolsum").value = result.toPrecision(1)+'초';
}

function reset() {
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('coolsum').value = "";
}

//쿨타임 계산기
function coolsuma() {
    var num3 = document.getElementById("number3").value; //스킬 쿨타임
    var num4 = document.getElementById("number4").value; //토핑 쿨타임
    var num5 = document.getElementById("number5").value; //시계 쿨타임
    
    var result = (parseInt(num3) * (1 - (parseInt(num4) / 100 )) * (1 - (parseInt(num5) / 100 ))) ;
    document.getElementById("coolsuma").value = result.toPrecision(2)+'초';
}   

function reset1() {
    document.getElementById('number3').value = "";
    document.getElementById('number4').value = "";
    document.getElementById('number5').value = "";
    document.getElementById('coolsuma').value = "";
}

/*토핑쿨타임 계산기
function coolsumb() {
    var num6 = document.getElementById("number6").value; //스킬 쿨타임
    var num7 = document.getElementById("number7").value; //시작 쿨타임
    
    var result = (100 - ((1000 * parseInt(num6)) / (3 * parseInt(num7))));
    document.getElementById("coolsumb").value = result+'%';
}   

function reset2() {
    document.getElementById('number6').value = "";
    document.getElementById('number7').value = "";
    document.getElementById('coolsumb').value = "";
}*/