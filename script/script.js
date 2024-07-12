const editableDiv = document.getElementById('editable_div');
const defaultText = editableDiv.innerText;

editableDiv.addEventListener('focus', function() {
    if (editableDiv.innerText.trim() === defaultText) {
        editableDiv.innerText = '';
        editableDiv.style.color = '#000';
    }

    editableDiv.addEventListener('blur', function() {
        if (editableDiv.innerText.trim() === '') {
            editableDiv.innerText = defaultText;
            editableDiv.style.color = '#888';
        }
    });
})

document.getElementById('add_button').addEventListener('click', add_new_line);
function add_new_line() {
    const line = document.createElement('div');
    line.classList.add('line');
    document.getElementById('todo_list').appendChild(line);

    const check = document.createElement('div');
    const todo_element = document.createElement('div');
    const remove_button = document.createElement('div');

    check.classList.add('check');
    check.addEventListener('click', function() {
        if (todo_element.style.textDecoration === 'line-through') {
            todo_element.style.textDecoration = 'none';
            todo_element.style.color = '#000';
        } else {
            todo_element.style.textDecoration = 'line-through';
            todo_element.style.color = '#888';
        }
    })
    line.appendChild(check);

    todo_element.classList.add('todo_element');
    todo_element.innerText = editableDiv.innerText;
    line.appendChild(todo_element);
    
    remove_button.classList.add('remove_button');
    remove_button.addEventListener('click', function() {
        line.remove();
    });
    line.appendChild(remove_button);

    editableDiv.innerText = defaultText;
    editableDiv.style.color = '#888';
}