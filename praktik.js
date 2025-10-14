let ul = document.getElementById("Ulid");
function ButtonClick(){
    let Input = document.getElementById("ToDoInput");
    let TextInput = Input.value.trim();
    if (TextInput == "") {         //alert
        alert('введіть задачу');
        return;
    }

    let li = document.createElement("div"); // создает div
        
    let buttonSULL = document.createElement("button"); // кнопка выполнения задания
    buttonSULL.textContent = "";
    li.appendChild(buttonSULL);
    buttonSULL.onclick = function(){
       if (li.style.textDecoration == "line-through"){
           li.style.textDecoration = 'none';
    
    }else{
        li.style.textDecoration = 'line-through';
    }

    }

  
    let span = document.createElement("span");  //  делает span
    span.textContent = TextInput;
    li.appendChild(span);

    ul.appendChild(li);
    Input.value="";

    let buttonDELL = document.createElement("button"); // кнопка удаления
    buttonDELL.textContent = "🗑️";
    li.appendChild(buttonDELL);
    buttonDELL.onclick = function(){
        li.remove();
    }
    buttonSULL.onclick = function () {
    span.classList.toggle("done");
    buttonSULL.classList.toggle("active");
  };
}

