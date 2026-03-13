function drawNumbers(){

    const total = parseInt(document.getElementById("total").value);
    const count = parseInt(document.getElementById("count").value);
    const resultDiv = document.getElementById("result");

    if(count > total){
        resultDiv.innerHTML = "❌ 抽的人數不能大於總人數";
        return;
    }

    let numbers = [];

    while(numbers.length < count){

        let random = Math.floor(Math.random() * total) + 1;

        if(!numbers.includes(random)){
            numbers.push(random);
        }

    }

    numbers.sort((a,b)=>a-b);

    resultDiv.innerHTML = "🎉 抽到號碼：<br>" + numbers.join(" , ");
}
