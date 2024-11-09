let inputs = document.getElementById("todo-input")
let list = document.getElementById("todo-list")
function addTodo() {
    if (inputs.value) {
        let newElem = document.createElement("ul")
        newElem.innerHTML = `${inputs.value} <i class="fa fa-times" style="font-size:24px"></i>`
        list.appendChild(newElem)
        inputs.value = ""
        newElem.querySelector("i").addEventListener("click", remove)
        function remove() {
            newElem.remove()
        }
    } else {
        alert("plz enter number ")
    }
}
