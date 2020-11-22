const button = document.getElementById('button');
const todoInput = document.getElementById('input');
const todoList = document.getElementById('list');

button.addEventListener('click', () => {
    const temp = document.createElement('li');
    temp.innerHTML = todoInput.value;
    todoList.appendChild(temp);
    todoInput.value = '';
    todoInput.focus();
    
    let cnt = 1;

    temp.setAttribute("class", "list");
    temp.setAttribute("id", "li"+cnt);
    temp.innerHTML += "<button type='button' class='btn'>삭제</button>";
    todoList.appendChild(temp);
    cnt++;
});

function remove(cnt) {
    let li = document.getElementById("li"+cnt);
    todoList.removeChild(li);
  }