function Login(){ 
var done=0; 
var usuario=document.login.usuario.value; 
var password=document.login.password.value; 

if (usuario=="Admi" && password=="Admi") { 
    window.location="https://sites.google.com/view/calidadfonedh/p%C3%A1gina-principal?authuser=1"; 
} else{
    if (usuario=="asesorcalidad" && password=="Dralei89") { 
        window.location="https://sites.google.com/view/calidadfonedh/p%C3%A1gina-principal?authuser=1"; 
} else{
    if (usuario=="" && password=="") { 
        window.location="errorpopup.html"; 
    }
    alert("Porfavor ingrese el nombre de usuario y contraseña para iniciar."); 
} 
} 
document.oncontextmenu = function(){return false} 
}
