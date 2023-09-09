const notesContainer = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn")
console.log(creatBtn)

let notes = document.querySelectorAll(".input-box");
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

creatBtn.addEventListener("click",() =>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "delete.png"
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    inputBox.append(img);
    notesContainer.append(inputBox);
    updateStorage();
})

notesContainer.addEventListener("click",(e) =>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll("input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })

    }
})

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})