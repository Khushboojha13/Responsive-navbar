
/*function show(){
  /*  
    let mysrc=  img.getAttribute("src");
    if(mysrc=="icons8-menu-50.png")
    {
        
        img.setAttribute(mysrc,"icons8-macos-close-30.png");
    }
    else{
          img.setAttribute(mysrc,"icons8-menu-50.png");
    } 
    let img= document.querySelector("img");
    console.log(img);
    console.log(img.src);
    /*if (img.src == "icons8-menu-50.png") {

        img.src="icons8-macos-close-30.png";
        console.log(img.src);
    } 
    img.src="icons8-macos-close-30.png";
    let nav= document.querySelector("nav");
    nav.style.display="block";

    console.log(img.src);
} 
*/


let count=0;
const img= document.querySelector(".img");
const headerji= document.querySelector("header");
img.addEventListener("click",toggle);

function toggle(){
    
    imageo();
    // img.src="icons8-macos-close-30.png";
     headerji.classList.toggle("active");
     count++;
     console.log(count);
}

function imageo(){
    let img1= document.querySelector("img");
    
   /* if(img1.src="icons8-menu-50.png"){
        img1.src="icons8-macos-close-30.png";
    
    console.log(img1);
    }
    else{
        img1.src="icons8-menu-50.png";
        console.log(img1);
    }  */

    if(count%2==0){
        img1.src="icons8-macos-close-30.png";
    }
    else{
         img1.src="icons8-menu-50.png";
    }
}