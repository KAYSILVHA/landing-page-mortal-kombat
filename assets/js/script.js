const imageInitial = document.querySelector(".image-initial");

function showImageKitana() {
    const image = document.getElementById('characterImage');
    image.src = "../assets/images/kitana-avatar.png";
    imageInitial.setAttribute("class", "");
}

function showImageKratos() {
    const image = document.getElementById('characterImage');
    image.src = "../assets/images/kratos-avatar.png";
    imageInitial.setAttribute("class", "");
}

function showImageKungLao() {
    const image = document.getElementById('characterImage');
    image.src = "../assets/images/kungLao-avatar.png";
    imageInitial.setAttribute("class", "");
}


function showImageSubZero() {
    const image = document.getElementById('characterImage');
    image.src = "../assets/images/subZero-avatar.png";
    imageInitial.setAttribute("class", "");
}


function showImageScorpion() {
    const image = document.getElementById('characterImage');
    image.src = "../assets/images/scorpion-avatar.png";
    imageInitial.setAttribute("class", "");
}


function showImageSindel() {
    const image = document.getElementById('characterImage');
    image.src = "../assets/images/sindel-avatar.png";
    imageInitial.setAttribute("class", "");
}



document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});