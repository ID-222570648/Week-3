
const fruits = ["Mango", "Passionfruit", "Banana"];
const priceFruit = [10, 5, 6];

    function totalNum(fruits){
    let length = fruits.length;
    let result = "Total number of fruits:" + length.toString();
    document.getElementById('demo').innerHTML =result;
    console.log(result);
    }
    function calculate(fruits,priceFruit){
        let number = 3;
        let index1 = fruits.indexOf("Mango");
        let index2 = priceFruit[index1];
        let amt = number * index2;
        let result1 = "Total price of 3 Mangos:" + amt.toString();
        document.getElementById('demo').innerHTML =result1;
        
        }
    function printArray(fruits){
            let output = fruits.toString();
            document.getElementById('demo').innerHTML = output;
            
        }
    function addItem(fruits){
            fruits.push("Kiwi");
            let output = fruits.toString();
            document.getElementById('demo').innerHTML = output;
    }
    function removeItem(fruits){
        fruits.pop("Kiwi");
        let output1 = fruits.toString();
        document.getElementById('demo').innerHTML = output1;
    }


      