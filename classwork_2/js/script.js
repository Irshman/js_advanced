var createItemBtn = document.querySelector('[value="Create new item"]');
var messageForm = document.querySelector('#message-form');
var cancelBtn = document.querySelector('[value="Cancel"]');
var addNewItemBtn = document.querySelector('[value="Add new item"]');
var myList = document.querySelector('#my-list');
var todoAction = '';
var elementToEdit;

createItemBtn.onclick = toggleMessageFormView;
cancelBtn.onclick = toggleMessageFormView;
addNewItemBtn.onclick = addTodoItem;

function toggleMessageFormView() {
    messageForm.classList.toggle('visible');

    if (todoAction === 'edit') {
        addNewItemBtn.value = 'Edit item';
    } else {
        todoAction = ''
        addNewItemBtn.value = 'Add new item'
    }
}

function addTodoItem() {
    var textarea = document.querySelector('textarea');
    var todoItem = `<li>
                        <span>${textarea.value}</span>
                        <input type="button" value="Edit" class="edit-btn" onclick="editItem(this)">
                        <input type="button" value="&times;" class="delete-btn" onclick="deleteItem(this)">
                    </li>`;

    if (todoAction === 'edit') {
        elementToEdit.children[0].innerText = textarea.value;
        todoAction = ''
    } else {
        myList.insertAdjacentHTML('beforeend', todoItem)
    }

    textarea.value = '';
    toggleMessageFormView();
}

function editItem(editButn) {
    todoAction = 'edit';
    elementToEdit = editButn.parentNode;
    toggleMessageFormView();
    document.querySelector('textarea').value = elementToEdit.innerText.trim();
}

function deleteItem(deleteBtn) {
    //myList.removeChild(deleteBtn.parentNode);
    var deletedItem = deleteBtn.parentElement.firstElementChild;
    deletedItem.style.textDecoration = 'line-through';
}

