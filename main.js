//設定
const operations = ["+", "-", "*", "/", "."];
var calResult = document.getElementById("result");
var isCalc = false;

//数字(.含む)ボタン押下
function eventNum(num) {
  if (isCalc) {
    calResult.value = "0";
  }
  isCalc = false;
  
  if (calResult.value == "0" && num == "0" || calResult.value == "0" && num == "00") {
    calResult.value = "0";
  } else if(calResult.value == "0" && num != "0" && num != ".") {
    calResult.value = num;
  } else if(num == ".") {
    if(calResult.value.slice(-1) == ".") {
      //ドットが直前に入力されている場合は何もしない
    } else {
      calResult.value += num;
    }
  } else if(calResult.value != "0") {
    calResult.value += num;
  }
}

//演算子ボタン押下
function eventOpe(ope) {
  if (operations.includes(calResult.value.slice(-1))) {
    calResult.value = calResult.value.slice(0,-1) + ope;
  } else {
    calResult.value += ope;
  }
  isCalc = false;
}

//=ボタン押下
function eventEqu() {
  if (operations.includes(calResult.value.slice(-1))) {
    calResult.value = calResult.value.slice(0,-1);
  }
  calResult.value = eval(calResult.value);
  isCalc = true;
}

//ACボタン押下
function eventAC() {
  calResult.value = "0";
  isCalc = false;
}