const textM =document.getElementById("textM");
const btnC = document.getElementById("btnC");
const container = document.getElementById("containerT");
const btnU = document.getElementById("btnU");

btnC.addEventListener("click", function () {
    const containerN =document.createElement("div")
    const pTag = document.createElement("p");
    pTag.id ="TextoP"
    const btnD = document.createElement("button");
    const btnE = document.createElement("button");
    containerN.appendChild(pTag);
    containerN.appendChild(btnD);
    containerN.appendChild(btnE);
    pTag.innerHTML = textM.value;
    btnD.innerHTML = "Delete Tasks";
    btnE.innerHTML = "Edit";
    let undoDelete = textM.value;
    localStorage.setItem('recover',undoDelete);
    containerT.appendChild(containerN);

if (btnD.addEventListener("click", function () {
    containerT.removeChild(containerN);
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

if (btnU.addEventListener("click",function () {
    let taskDeleted =localStorage.getItem('recover')
    TextoP.innerHTML= taskDeleted


})) {}

})){}
})){}
})
