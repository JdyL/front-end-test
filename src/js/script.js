document.onclick = function (event) {
    console.log(event.target);
}



$(document).ready(function () {
    // Modal

    var fluidImages = document.getElementsByClassName("img-fluid");

    var modalContainer = document.getElementsByClassName("modal-container")[0];
    var closeButton = document.getElementsByClassName("close")[0];


    var modalTextbox = document.getElementsByClassName("modal-textbox");

    for (var i = 0; i < fluidImages.length; i++) {
        console.log(i)
        fluidImages[i].onclick = function () {
            console.log(i);
            modalContainer.style.display = "block";

            modalTextbox[0].style.display = "block";
        }

        modalContainer.onclick = function () {
            modalContainer.style.display = "none";
            modalTextbox[0].style.display = "none";
        }

        closeButton.onclick = function () {
            modalContainer.style.display = "none";
            modalTextbox[0].style.display = "none";
        }
    }
})