// Select plus-btn,popup-box,overlay

plusBtn=document.querySelector(".plus-btn")
popupBox=document.querySelector(".popup-box")
overlay=document.querySelector(".overlay")

plusBtn.addEventListener("click",function(){
    popupBox.style.display="block"
    overlay.style.display="block"
})

// Select addBtn,cancelBtn
var addBtn=document.getElementById("addBtn")
var cancelBtn=document.getElementById("cancelBtn")

cancelBtn.addEventListener("click",function(){
    event.preventDefault()
    popupBox.style.display="none"
    overlay.style.display="none"
})
// container,bookTitle,bookAuthor,bookDescription

var container=document.querySelector(".container")
var bookTitle=document.getElementById("bookTitle")
var bookAuthor=document.getElementById("bookAuthor")
var bookDescription=document.getElementById("bookDescription")

addBtn.addEventListener("click",function(){
    
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h2>${bookTitle.value}</h2>
    <h4 style="text-align: right">${bookAuthor.value}</h4>
    <p>${bookDescription.value}</p>
    <button onclick="Delete(event)">Delete</button>`
    container.append(div)
    popupBox.style.display="none"
    overlay.style.display="none"
    
})

function Delete(event)
{
    event.target.parentElement.remove()
}