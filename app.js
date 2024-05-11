
//Counter
var data1 = 0;
var data2= ""
function increment(){
    data1++
    let data = document.getElementById('h1').innerText = data1;
    // console.log(data);
}
function decrement (){
    data1--
    let date = document.getElementById('h1').innerText = data1;
    if(data1 <=-1 ){
        let date = document.getElementById('h1').innerText = 0
    }else{
        let date = document.getElementById('h1').innerText = data1;
    }
}
function reset (){
    let data = document.getElementById('h1').innerText = "0";
}




