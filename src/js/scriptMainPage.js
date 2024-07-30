const container = document.getElementById("containerT");
const tareaEvent = document.getElementById("tareaEvent");
const listaTarea = document.getElementById("listaTarea");
const listaEvento = document.getElementById("listaEvento");
const selectah = document.getElementById("selectah");
const DateR = document.getElementById("DateR");
const priority = document.getElementById("priority");
const btnSave = document.getElementById("btnSave");

let taskLista = JSON.parse(localStorage.getItem("taskInfo")) || [];
let eventLista = JSON.parse(localStorage.getItem("eventInfo")) || [];

// Render // 
taskLista.forEach((tsk, index) => createTaskEventElement(tsk, index, "Task"));
eventLista.forEach((evnt, index) => createTaskEventElement(evnt, index, "Event"));

///Función para crear el elemento de tarea/evento en el DOM////
function createTaskEventElement(item, index, type) {
    const containerN = document.createElement("div");
    const pTag = document.createElement("p");
    pTag.id = "TextoP";
    const btnD = document.createElement("button");
    const btnE = document.createElement("button");

    containerN.appendChild(pTag);
    containerN.appendChild(btnD);
    containerN.appendChild(btnE);

    pTag.textContent = `${item.text} (${item.priority})`;

    btnD.innerHTML = "Delete";
    btnE.innerHTML = "Edit";

    if (type === "Task") {
        insertSorted(listaTarea, containerN, item.priority);
        btnD.addEventListener("click", () => deleteItem(index, "Task", containerN));
        btnE.addEventListener("click", () => editItem(index, "Task", pTag));
    } else {
        insertSorted(listaEvento, containerN, item.priority);
        btnD.addEventListener("click", () => deleteItem(index, "Event", containerN));
        btnE.addEventListener("click", () => editItem(index, "Event", pTag));
    }
}

//InsertSorted//
///Función para insertar ítem en el DOM en orden de prioridad///
function insertSorted(container, newItem, priority) {
    const children = Array.from(container.children);
    for (let i = 1; i < children.length; i++) {
        const itemPriority = children[i].querySelector("p").textContent.split(" (")[1].replace(")", "").trim();
        if (priorityOrder(priority) < priorityOrder(itemPriority)) {
            container.insertBefore(newItem, children[i]);
            return;
        }
    }
    container.appendChild(newItem);
}


///Función para determinar el orden de prioridad///
function priorityOrder(priority) {
    if (priority === "High") return 1;
    if (priority === "Medium") return 2;
    if (priority === "Low") return 3;
}

/// Agregar nuevo ítem (tarea o evento) al hacer clic en el botón Guardar ///
//Sin el addItemToDOM aplicando el push() 
btnSave.addEventListener("click", function () {
    const selection = selectah.value;
    const taskEventValue = {
        text: `${tareaEvent.value} ${DateR.value}`,
        priority: priority.value
    };

    if (selection === "Task") {
        taskLista.push(taskEventValue); // Agregar a la lista de tareas
        localStorage.setItem("taskInfo", JSON.stringify(taskLista));
        // Crear y agregar directamente al DOM
        createTaskEventElement(taskEventValue, taskLista.length - 1, "Task");
    } else if (selection === "Event") {
        eventLista.push(taskEventValue); // Agregar a la lista de eventos
        localStorage.setItem("eventInfo", JSON.stringify(eventLista));
        // Crear y agregar directamente al DOM
        createTaskEventElement(taskEventValue, eventLista.length - 1, "Event");
    }
});

/// Función para eliminar un ítem de la lista y del DOM, actualizando también el local storage ///
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

/// Función para editar un ítem, guardando los cambios en la lista y en el local storage ///
//Parte Problematica (apply en la consola)//
function editItem(index, type, pTag) {
    const btnA = document.createElement("button");
    btnA.innerHTML = "Apply";
    pTag.contentEditable = true;
    pTag.appendChild(btnA);

    btnA.addEventListener("click", function () {
        pTag.contentEditable = false;

        const updatedValue = pTag.textContent.split(" (")[0].trim();
        const updatedPriority = pTag.textContent.split(" (")[1].replace(")", "").trim();

        pTag.removeChild(btnA);

        if (type === "Task") {
            taskLista[index].text = updatedValue;
            taskLista[index].priority = updatedPriority;
            localStorage.setItem("taskInfo", JSON.stringify(taskLista));
            refreshList("Task");
        } else {
            eventLista[index].text = updatedValue;
            eventLista[index].priority = updatedPriority;
            localStorage.setItem("eventInfo", JSON.stringify(eventLista));
            refreshList("Event");
        }
    });
}

/// Función para refrescar la lista después de editar ///
function refreshList(type) {
    if (type === "Task") {
        listaTarea.innerHTML = "<h2>Tareas</h2>";
        taskLista.forEach((tsk, index) => createTaskEventElement(tsk, index, "Task"));
    } else {
        listaEvento.innerHTML = "<h2>Eventos</h2>";
        eventLista.forEach((evnt, index) => createTaskEventElement(evnt, index, "Event"));
    }
}
