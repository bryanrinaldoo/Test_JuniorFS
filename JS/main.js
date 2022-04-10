const typedSpan = document.querySelector(".typed");
const cursorSpan = document.querySelector(".cursor");

const arrayNama = ["Bryan Rinaldo Lie", "Bryan Rinaldo", "Bryan", "BR", "Aldo"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let arrayNamaIndex = 0 ;
let charIndex = 0;

function ketik(){
    if(charIndex < arrayNama[arrayNamaIndex].length){
        if(!cursorSpan.classList.contains("typingstop")) cursorSpan.classList.add("typingstop")
        typedSpan.textContent += arrayNama[arrayNamaIndex].charAt(charIndex);
        charIndex++;
        setTimeout(ketik, typingDelay);
    }
    else{
        cursorSpan.classList.remove("typingstop")
        setTimeout(hapus, newTextDelay);
    }
}

function hapus(){
    if(charIndex>0){
        typedSpan.textContent = arrayNama[arrayNamaIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(hapus, erasingDelay);
    }
    else{
        cursorSpan.classList.remove("typingstop")
        arrayNamaIndex++;
        if(arrayNamaIndex>=arrayNama.length){
            arrayNamaIndex=0;
        }
        setTimeout(ketik, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function(){
    setTimeout(ketik, newTextDelay);
});