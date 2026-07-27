function Contact(){
    window.open("https://discord.com/");
}


const socialButton = document.querySelector(".social-toggle");
const socialContainer = document.querySelector(".social-container");


if (socialButton && socialContainer) {

    socialButton.addEventListener("click", () => {

        socialContainer.classList.toggle("active");

    });

} else {

    console.log("Social menu elements not found");

}

/* ================= */
/* CHESPIN MASCOT */
/* ================= */


const chespin = document.getElementById("chespin");


if(chespin){


    let x = 100;
    let y = 100;


    let speedX = 2;
    let speedY = 2;



    function moveChespin(){


        x += speedX;
        y += speedY;



        if(x + chespin.width >= window.innerWidth || x <= 0){

            speedX *= -1;

        }



        if(y + chespin.height >= window.innerHeight || y <= 0){

            speedY *= -1;

        }



        chespin.style.left = x + "px";
        chespin.style.top = y + "px";



        requestAnimationFrame(moveChespin);


    }



    moveChespin();



    /* ================= */
    /* CHESPIN SOUND */
    /* ================= */


    const chespinSound = new Audio("sounds/fennekin.mp3");

chespin.addEventListener("click", () => {

    console.log("Chespin clicked!");

    chespinSound.currentTime = 0;

    chespinSound.play()
        .then(() => console.log("Sound played!"))
        .catch(err => console.error(err));

});


}

document.addEventListener("click", function(e){

    const sparkle = document.createElement("div");

    sparkle.innerHTML="✦";

    sparkle.className="sparkle";

    sparkle.style.left=e.clientX+"px";
    sparkle.style.top=e.clientY+"px";


    document.body.appendChild(sparkle);


    setTimeout(()=>{

        sparkle.remove();

    },800);

});
const galleryImages = document.querySelectorAll(".gallery img");

const viewer = document.querySelector(".image-viewer");

const viewerImage = document.querySelector(".viewer-image");

const closeViewer = document.querySelector(".close-viewer");



galleryImages.forEach(image => {


    image.addEventListener("click", () => {


        viewerImage.src = image.src;


        viewer.classList.add("active");


    });


});



closeViewer.addEventListener("click", () => {


    viewer.classList.remove("active");


});



viewer.addEventListener("click", (e)=>{


    if(e.target === viewer){

        viewer.classList.remove("active");

    }


});



document.addEventListener("keydown", (e)=>{


    if(e.key === "Escape"){

        viewer.classList.remove("active");

    }


});
/* ================= */
/* SECTION NAVIGATION */
/* ================= */

const navButtons = document.querySelectorAll(".nav-link");


navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const section = document.getElementById(
            button.dataset.target
        );


        if(section){

            section.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
