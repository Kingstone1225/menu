let but = document.querySelector(".menu");
let blyat = document.querySelector(".main")
let  input1 =   document.getElementById("input-id") ;
let  input2 =   document.getElementById("input-id2") ;
 
 
function butc(){
    but.classList.remove("menu");
    
    blyat.classList.add("blure2")
}
function sen(){ 
    blyat.classList.remove("blure2");

    but.classList.add("menu");
    localStorage.setItem('test',input1.value);
    localStorage.setItem('testik',input2.value);
    let arc1 = localStorage.getItem('testik');
    let arc = localStorage.getItem('test');
    console.log(arc1);   
    console.log(arc);  
     
}