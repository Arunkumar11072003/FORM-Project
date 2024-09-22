let form=document.querySelector("form")
let username=document.querySelector("#username")
let gmail=document.querySelector("#gmail")
let password=document.querySelector("#password")
let cpassword=document.querySelector("#conform-password")
 



form.addEventListener("submit",(e)=>{ 
    e.preventDefault()  
    Validate()

    
})

function Validate(){
    let usernamevalue=username.value
    let gmailvalue=gmail.value
    let passwordvalue=password.value
    let cpasswordvalue=cpassword.value


    
if (usernamevalue==""){
     seterror(username,"user is required")
    
    }

 else{
    setsuccess(username)
 }   
if (gmailvalue==""){
     seterror(gmail ,"gmail is required")
     
       }
else if(! (gmailvalue.includes("gmail.com"))||(gmailvalue.includes("email.com"))){
    seterror(gmail,"gmail is invalide")

}       
else{
        setsuccess(gmail)
     }          
if (passwordvalue==""){
    seterror(password,"password is required")

       } 
else if(!(passwordvalue.length<8) && (passwordvalue.length>16) && (passwordvalue.includes("@"))){
        seterror(password,"password is invalide and compalsary include @")
    
    }  

else{
        setsuccess(password)
     }          
if (cpasswordvalue==""){
     seterror(cpassword,"cpassword is required")
     
       }
else if(passwordvalue!=cpasswordvalue){
        seterror(cpassword,"not matched")
    
    }        
else{
        setsuccess(cpassword)
     }          
       
       

}
    
function seterror(tag,msg){
       
    let parent=tag.parentElement
    parent.querySelector("#error").innerHTML=msg
    parent.classList.add("error")
    parent.classList.remove("success")
    console.log(parent)
   
 }
 function setsuccess(tag){
    let parent=tag.parentElement
    parent.querySelector("#error").innerHTML=""
    parent.classList.add("success")
    parent.classList.remove("error")
    console.log(parent )
 }