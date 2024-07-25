const container = document.getElementById("containerT");
const listaTarea = document.getElementById("listaTarea");
const listaEvento =document.getElementById("listaEvento");
const selectah = document.getElementById("selectah");
const DateR = document.getElementById("DateR");

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
        pTag.innerHTML = textM.value +" "+ DateR.value;
        btnD.innerHTML = "Delete Tasks"; 
        btnE.innerHTML = "Edit";
        listaTarea.appendChild(containerN);

        if (btnD.addEventListener("click", function () {
            listaTarea.removeChild(containerN);
            alert("Deleted Succesfully");
        })) {}
        
        if (btnE.addEventListener("click", function () {
            const btnA = document.createElement("button");
            containerN.appendChild(btnA);
            btnA.innerHTML = "Apply";
            pTag.contentEditable = true;
            pTag.style.backgroundColor = "#666";
            pTag.style.color = "white";
        
        if (btnA.addEventListener("click", function () {
            pTag.contentEditable = false;
            pTag.style.backgroundColor = "White";
            pTag.style.color = "Black";
       /////////////////////////////////////////////////////////////////////////////////////////////////////
       
        })){}/////////////////Eventos///////////////////////////////
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
        pTag.innerHTML = textM.value +" "+ DateR.value;
        btnD.innerHTML = "Delete Tasks";
        btnE.innerHTML = "Edit";
        listaEvento.appendChild(containerN);

        if (btnD.addEventListener("click", function () {
            listaEvento.removeChild(containerN);
            alert("Deleted Succesfully");
        })) {}
        
        if (btnE.addEventListener("click", function () {
            const btnA = document.createElement("button");
            containerN.appendChild(btnA);
            btnA.innerHTML = "Apply";
            pTag.contentEditable = true;
            pTag.style.backgroundColor = "#666";
            pTag.style.color = "white";
        
        if (btnA.addEventListener("click", function () {
            pTag.contentEditable = false;
            pTag.style.backgroundColor = "White";
            pTag.style.color = "Black";
        })){}
        })){}
    } }})