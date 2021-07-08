//레벨 경험치
function expsum() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    
    var result = Math.round((parseInt(num2) - parseInt(num1)) / parseInt(14));
    document.getElementById("expsum").value = result + '개';
}

function reset() {
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('expsum').value = "";
}

// 쿠키하우스 별사탕 갯수 계산
function exp() {
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    
    var result = parseInt(num3) * parseInt(num4);
    document.getElementById("exp").value = result + '개';
}

function reset1() {
    document.getElementById('number3').value = "";
    document.getElementById('number4').value = "";
    document.getElementById('exp').value = "";
}

// 쿠키하우스 시간계산
function exptime() {
    var num5 = document.getElementById("number5").value;
    var num6 = document.getElementById("number6").value;
    
    var result = ((parseInt(num5) / ((parseInt(num6) * 14)/8))/24);
    document.getElementById("exptime").value = result.toPrecision(4) + '일';
}

function reset2() {
    document.getElementById('number5').value = "";
    document.getElementById('number6').value = "";
    document.getElementById('exptime').value = "";
}