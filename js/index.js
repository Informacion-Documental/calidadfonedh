function Login(){ 
var done=0; 
var usuario=document.login.usuario.value; 
var password=document.login.password.value; 

if (usuario=="Admi" && password=="Admi") { 
    window.location="https://sites.google.com/view/calidadfonedh/calidad?authuser=1"; 
} else{
    if (usuario=="Gerente" && password=="hmekRJJv") { 
        window.location="https://sites.google.com/view/calidadfonedh/calidad?authuser=1"; 
} else{
    if (usuario=="" && password=="") { 
        window.location="errorpopup.html"; 
    }
    alert("Porfavor ingrese el nombre de usuario y contraseña para iniciar."); 
} 
} 
document.oncontextmenu = function(){return false} 
}
