document.getElementById("london").style.display="none";
document.getElementById("spain").style.display="none";
document.getElementById("france").style.display="none";



function myFunction(){
    var x=document.getElementById("dom").value;
    if(x==="london"){
        document.getElementById("london").style.display="block";
        document.getElementById("spain").style.display="none";
        document.getElementById("france").style.display="none";

    }else if(x==="spain"){
        document.getElementById("spain").style.display="block";
        document.getElementById("france").style.display="none";
        document.getElementById("london").style.display="none";
    }else if(x==="france"){
        document.getElementById("france").style.display="block";
        document.getElementById("london").style.display="none";
        document.getElementById("spain").style.display="none";
    }else{
        document.getElementById("london").style.display="none";
        document.getElementById("spain").style.display="none";
        document.getElementById("france").style.display="none";

    }
}




