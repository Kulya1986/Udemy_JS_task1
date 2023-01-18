var userInput = document.getElementById("userEnter");
var btnEnter = document.getElementById("buttonCtrl");
var ul = document.querySelector("ul");
var itemsList = document.querySelectorAll("li");

function inputLength(){
    return userInput.value.length;
}

function addNewItem(){
    var li=document.createElement("li");
    li.appendChild(createListItemText());
    li.appendChild(createListItemButton());
    ul.appendChild(li);
    userInput.value = ""; 
}

function createListItemText(){
    var p=document.createElement("p");
    p.appendChild(document.createTextNode(userInput.value));
    p.addEventListener("click",addLineThroughToListItem);
    return p;
}

function createListItemButton(){
    var buttonDelete=document.createElement("button");
    buttonDelete.appendChild(document.createTextNode("Delete"));
    buttonDelete.classList.add("del");
    buttonDelete.addEventListener("click",deleteListItemOnButtonClick);
    return buttonDelete;
}

function addItemOnMouseClick(){
    if (inputLength()>0)
        addNewItem();
}

function addItemOnEnterPress(event){
    if (inputLength()>0 && event.key === "Enter"){
       addNewItem();
    }
}

function addLineThroughToListItem(e){
    e.target.classList.toggle("done");
}

function deleteListItemOnButtonClick(e){
    e.target.parentElement.remove();
}

btnEnter.addEventListener("click", addItemOnMouseClick);
userInput.addEventListener("keydown", addItemOnEnterPress);

for (var i=0; i<itemsList.length; i++){
    itemsList[i].querySelector("p").addEventListener("click",addLineThroughToListItem);
    itemsList[i].querySelector("button").addEventListener("click",deleteListItemOnButtonClick);
}
