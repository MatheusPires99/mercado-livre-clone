var navCEP = document.getElementById("nav-cep");
var openPopUpUnlogged = document.getElementById("pop-up-cep-unlogged");
var openPopUpLogged = document.getElementById("pop-up-cep-logged");
var closePopUp = document.getElementById("close-pop-up-cep");

navCEP.addEventListener("click", function() {
    openPopUpUnlogged.style.display = "flex";
    openPopUpUnlogged.style.flexDirection = "column";
    openPopUpUnlogged.style.animation = "x 0.3s";
});

closePopUp.addEventListener("click", function(){
    openPopUpUnlogged.style.display = "none";
});

// ********************************************************* //

navCEP.addEventListener("click", function() {
    openPopUpLogged.style.display = "flex";
    openPopUpLogged.style.flexDirection = "column";
    openPopUpLogged.style.animation = "x 0.3s";
});

closePopUp.addEventListener("click", function(){
    openPopUpLogged.style.display = "none";
});