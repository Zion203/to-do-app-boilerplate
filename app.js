var Add=document.getElementById("button")
var doList=document.getElementById("todolist")
var inp = document.getElementById("input")
var i = 0

Add.onclick = () =>{
    creatLi(inp.value)
    i+=1
}

function creatLi(input){
   var li = document.createElement("li")
   li.id=`li${i}`
   li.innerHTML=`${input}<a onclick=edit(${i})>| Edit</a><a onclick=e(${i})>x</a>`
   doList.appendChild(li)
}
function e(index){
    var del_li = document.getElementById(`li${index}`)
    doList.removeChild(del_li)
 }
 function edit(index){
    var newValue = prompt("Please insert your new value");
    var edit_li = document.getElementById(`li${index}`)
    edit_li.id=`li${index}`
    edit_li.innerHTML=`${newValue}<a onclick=edit(${index})>| Edit</a><a onclick=e(${index})>x</a>`
    
 }








