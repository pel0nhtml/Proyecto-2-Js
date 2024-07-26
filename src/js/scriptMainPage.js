const container = document.getElementById("containerT");
const tareaEvent = document.getElementById ("tareaEvent")
const textM = document.getElementById("listaTarea");
const listaEvento =document.getElementById("listaEvento");
const selectah = document.getElementById("selectah");
const DateR = document.getElementById("DateR");


let taskLista= []
let eventLista= []

btnSave.addEventListener("click", function () {
    const selection = selectah.value
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////tareas///////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    if (selection === "Task") {
        const containerN =document.createElement("div")
        const pTag = document.createElement("p");
        pTag.id ="TextoP"
        const btnD = document.createElement("button");
        const btnE = document.createElement("button");
        containerN.appendChild(pTag);
        containerN.appendChild(btnD);
        containerN.appendChild(btnE);
       
    //////////////////////
        let tsk = tareaEvent.value +" "+ DateR.value;
        pTag.innerHTML = tsk
    /////////////////////
       
        btnD.innerHTML = "Delete Tasks"; 
        btnE.innerHTML = "Edit";
        listaTarea.appendChild(containerN);


    ////////////////////
        taskLista.push (tsk);
        localStorage.setItem ("taskInfo", JSON.stringify(taskLista))
    ///////////////////

        if (btnD.addEventListener("click", function () {
            listaTarea.removeChild(containerN);
            alert("Deleted Succesfully");
        })) {}
        
        if (btnE.addEventListener("click", function () {
            const btnA = document.createElement("button");
            containerN.appendChild(btnA);
            btnA.innerHTML = "Apply";
            pTag.contentEditable = true;
        
        if (btnA.addEventListener("click", function () {
            pTag.contentEditable = false;

            /////////////////////////////////////////////////////////////////////////////////////////////////////
        })){} /////////////////Eventos///////////////////////////////
        })){}
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////// 

    } else { if (selection === "Event") {
        const containerN =document.createElement("div")
        const pTag = document.createElement("p");
        pTag.id ="TextoP"
        const btnD = document.createElement("button");
        const btnE = document.createElement("button");
        containerN.appendChild(pTag);
        containerN.appendChild(btnD);
        containerN.appendChild(btnE);

        ////////////////
        let evnt = tareaEvent.value +" "+ DateR.value;
        pTag.innerHTML = evnt
        ////////////////
        
        btnD.innerHTML = "Delete Tasks";
        btnE.innerHTML = "Edit";
        listaEvento.appendChild(containerN)

        ///////////////
        taskLista.push (evnt);
        localStorage.setItem ("eventInfo", JSON.stringify(eventLista))
        //////////////

        if (btnD.addEventListener("click", function () {
            listaEvento.removeChild(containerN);
            alert("Deleted Succesfully");
        })) {}
        
        if (btnE.addEventListener("click", function () {
            const btnA = document.createElement("button");
            containerN.appendChild(btnA);
            btnA.innerHTML = "Apply";
            pTag.contentEditable = true;
        
        if (btnA.addEventListener("click", function () {
            pTag.contentEditable = false;
            
        })){}
        })){}
    } }})