let ul =document.getElementById("Ulid");
function ButtonClick(){
    let Input =document.getElementById("ToDoInput");
    let TextInput =Input.value;
     if (TextInput == "") {
    alert('введіть задачу');
    return;
}
    let li =document.createElement("li");
    li.textContent=TextInput;
    ul.appendChild(li);
}
function ButtonOffClick(){
    ul.innerHTML="";    
}