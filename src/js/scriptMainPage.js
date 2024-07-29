const container = document.getElementById("containerT");
const tareaEvent = document.getElementById("tareaEvent");
const listaTarea = document.getElementById("listaTarea");
const listaEvento = document.getElementById("listaEvento");
const selectah = document.getElementById("selectah");
const DateR = document.getElementById("DateR");
const btnSave = document.getElementById("btnSave");

let taskLista = JSON.parse(localStorage.getItem("taskInfo")) || [];
let eventLista = JSON.parse(localStorage.getItem("eventInfo")) || [];

///Función para renderizar tareas y eventos al cargar la página///
function renderList() {
    listaTarea.innerHTML = "<h2>Tareas</h2>";
    listaEvento.innerHTML = "<h2>Eventos</h2>";
    taskLista. forEach ((tsk, index) => renderItem (tsk, index, "Task"));
    eventLista. forEach ((evnt, index) => renderItem (evnt, index, "Event"));
}

///Función para crear y mostrar un nuevo ítem (tarea o evento) en el DOM///
function renderItem(item, index, type) {
    const containerN = document.createElement("div");
    const pTag = document.createElement("p");
    pTag.id = "TextoP";
    const btnD = document.createElement("button");
    const btnE = document.createElement("button");

    containerN.appendChild(pTag);
    containerN.appendChild(btnD);
    containerN.appendChild(btnE);

    pTag.innerHTML = item;

    btnD.innerHTML = "Delete";
    btnE.innerHTML = "Edit";

    if (type === "Task") {
        listaTarea.appendChild(containerN);
        ///Eliminar tarea///
        btnD.addEventListener("click", () => deleteItem(index, "Task", containerN));
        ///Editar tarea///
        btnE.addEventListener("click", () => editItem(index, "Task", pTag));
    } else {
        listaEvento.appendChild(containerN);
        ///Eliminar evento///
        btnD.addEventListener("click", () => deleteItem(index, "Event", containerN));
        ///Editar evento///
        btnE.addEventListener("click", () => editItem(index, "Event", pTag));
    }
}

btnSave.addEventListener("click", function () {
    const selection = selectah.value;
    const taskEventValue = tareaEvent.value + " " + DateR.value;
////////////////////////////tareas///////////////////////////////////////////////////////////////////////////////
    if (selection === "Task") {
        taskLista.push(taskEventValue);
        localStorage.setItem("taskInfo", JSON.stringify(taskLista));
        renderItem(taskEventValue, taskLista.length - 1, "Task");
////////////////////////////eventos///////////////////////////////////////////////////////////////////////////////
    } else if (selection === "Event") {
        eventLista.push(taskEventValue);
        localStorage.setItem("eventInfo", JSON.stringify(eventLista));
        renderItem(taskEventValue, eventLista.length - 1, "Event");
    }
});

///Función para eliminar un ítem de la lista y del DOM, actualizando también el local storage///
function deleteItem(index, type, element) {
    if (type === "Task") {
        taskLista.splice(index, 1);
        localStorage.setItem("taskInfo", JSON.stringify(taskLista));
        listaTarea.removeChild(element);
    } else {
        eventLista.splice(index, 1);
        localStorage.setItem("eventInfo", JSON.stringify(eventLista));
        listaEvento.removeChild(element);
    }
}

 ///Función para editar un ítem, guardando los cambios en la lista y en el local storage///
  function editItem(index, type, pTag) {
    const btnA = document.createElement("button");
    btnA.innerHTML = "Apply";
    pTag.contentEditable = true;

    pTag.appendChild(btnA);

    btnA.addEventListener("click", function () {
        pTag.contentEditable = false;
        const updatedValue = pTag.innerText;

        ///Eliminar el botón "Apply" antes de guardar///
        pTag.removeChild(btnA);

        if (type === "Task") {
            taskLista[index] = updatedValue;
            localStorage.setItem("taskInfo", JSON.stringify(taskLista));
        } else {
            eventLista[index] = updatedValue;
            localStorage.setItem("eventInfo", JSON.stringify(eventLista));
        }
    });
}

///Renderizar la lista al cargar la página///
renderList();
