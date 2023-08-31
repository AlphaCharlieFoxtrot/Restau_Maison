/**un systême de réservation à créer donc un compte admin pour les gèrer 
+ système de comptes d'abonné pour pouvoir faire des réservation et payé en ligne si on veut
(+rajouté un système de payement ou un lien vers paypal notamment...la sécurité informatique c'est pas ma spé)*/

//un slider a ajouter après la section intro notamment

const carousel = document.querySelector(".carousel");

let isDragStart = false, prevPageX, perScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup", dragStop)