const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

let rowId = 0
let currentId = 0;

const createTodo = ()=> {
    rowId += 1

    if (input.value.trim() === ''){
        return alert('Нельзя вводить пустоту или пробелы')   //ввод пустоты или пробела в поисковике
    }
    const blockInfo = document.createElement('div')  //создание эллемента createElement
    blockInfo.setAttribute('class', 'block_text')
    blockInfo.setAttribute('id', rowId + 'blockInfo')

    const divButtons = document.createElement('div')
    divButtons.setAttribute('class', 'div_button')

    const text = document.createElement('h3')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    deleteButton.setAttribute('id',  rowId)

    deleteButton.addEventListener('click', function (e) {
        currentId = e.target.id;
        document.getElementById('myModal').classList.add('open')
    })


    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')
    editButton.setAttribute('id', rowId)

    editButton.addEventListener('click', function (e) {
        currentId = e.target.id;
        document.getElementById("edit_inp").value = document.getElementById(currentId+'blockInfo').firstChild.innerHTML;
        document.getElementById('edit__Modal').classList.add('open')
    })

    document.getElementById('exit2').addEventListener('click', function () {
        document.getElementById('edit__Modal').classList.remove('open')
        currentId = 0;
    })

    deleteButton.innerHTML = 'DELETE'
    editButton.innerHTML = 'EDIT'

    text.innerHTML = input.value
    divButtons.append(deleteButton, editButton)
    blockInfo.append(text, divButtons)
    input.value = ''
    todoList.prepend(blockInfo)
    text.addEventListener('click',  () => text.classList.toggle('toggle'))
}

document.getElementById('exit').addEventListener('click', function (){
    document.getElementById('myModal').classList.remove('open')
    currentId = 0;
})

document.getElementById('cansel').addEventListener('click', function (){
    document.getElementById('myModal').classList.remove('open')
    currentId = 0;
})

document.getElementById('yes').addEventListener('click', function (e) {
    let elementToDelete = document.getElementById(currentId+'blockInfo')

    elementToDelete.remove()
    currentId = 0;
    document.getElementById('myModal').classList.remove('open')

})

document.getElementById('ha').addEventListener('click', function (e) {
    document.getElementById(currentId+'blockInfo').firstChild.innerHTML = document.getElementById("edit_inp").value; 
    document.getElementById('edit__Modal').classList.remove('open')
})

document.getElementById('che').addEventListener('click', function () {
    document.getElementById('edit__Modal').classList.remove('open')
    currentId = 0;
})

createButton.onclick = () => createTodo()

window.onkeydown = (event) =>{
    if (event.code === 'Enter'){
        createTodo()
    }
}



















