// Logging anchor clicks
document.onclick = function (event) {
    console.log(event.target);
}

$(document).ready(function () {
    var clickable = false;
    // Modal //
    // Open Modal
    $(".img-fluid").click(function () {
        var clickedIndex = $(".img-fluid").index(this);

        $(".modal-container:eq(0)").css("visibility", "visible");

        $(".modal-container:eq(0)").css("opacity", "0.9");

        $(".modal-textbox:eq(" + clickedIndex + ")").show();
        $(".modal-textbox:eq(" + clickedIndex + ")").animate({
            height: "200px"
        }, "easein", function () {
            clickable = true;
        });
    });


    // Close Modal
    $(".modal-container:eq(0)").click(function () {
        closeModal()
    });

    $(".close").click(function () {
        closeModal()
    });

    function closeModal() {
        if (clickable) {
            clickable = false;
            var transitionDurationInteger = ($(".modal-container:eq(0)").css("transition-duration").substring(0, $(".modal-container:eq(0)").css("transition-duration").length - 1)) * 1000
            $(".modal-textbox").animate({
                height: "0px"
            }, 200);

            setTimeout(function () {
                $(".modal-textbox").hide()
            }, 200);

            $(".modal-container:eq(0)").css("opacity", "0");
            setTimeout(function () {
                $(".modal-container:eq(0)").css("visibility", "hidden");
            }, transitionDurationInteger);
        }
    }
});