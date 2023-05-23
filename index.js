let contact=document.querySelector(".contact")
let button=document.querySelector('.request_button')
let btn2=document.querySelector('.btn')
button.addEventListener("click",()=>{
    console.log("hello")
    contact.classList.add('active')

    
})
btn2.addEventListener("click",()=>{
    console.log("hello")
    contact.classList.add('active')
    
    
})


let first=document.querySelector('.firstName')
console.log(first)
let last=document.querySelector('.lastName')
let form =document.getElementById('form')
let email=document.querySelector('.email')
let number=document.querySelector('.number')
let company=document.querySelector('.company')
let state=document.querySelector('.state')
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(first.value)
    let messages=[]
    if(first.value==="" || last.value==='' || email.value===null || number.value===null || company.value===null || state.value===null){
       alert("mandatory section should be required")
    }
    else if(first.value<=3 || last.value>=3){
        console.log("name should be 5 digit")

    }
    
})