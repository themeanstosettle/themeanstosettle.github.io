//$(function () { // wait for document ready
//    
//    // init controller
//    var controller = new ScrollMagic.Controller();
//    console.log("controller inited")
//
//    // show pin state
//    function updateBox (e) {
//        console.log("updateBox Fired")
//        if (e.type == "enter") {
//            $(".tittle").slideUp;
//        } else {
//            $(".tittle").slideUp;
//        }
//    }
//
//    // build scenes
//    new ScrollMagic.Scene({
//            duration: scroll,
//        })
//        .on("enter leave", updateBox)
//        .addIndicators() // add indicators (requires plugin)
//        .addTo(controller);
//});