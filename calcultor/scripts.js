
function display(val){
    let y=document.getElementById("result").value+=val;

}

function equator(){
    let z=document.getElementById('result').value;
    let result=eval(z);
    document.getElementById('result').value=result;
}

function clr(){
    document.getElementById('result').value="";
}