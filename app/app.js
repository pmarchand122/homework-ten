import * as MODEL from "../model/model.js";

function init() {
    $("nav a").click(function () {
        let btnId = this.id;
        let contentId = btnId + "Content";
        console.log(btnId)

        if (btnId == "home"){
            $(".hero")
                .addClass("backgroundImage");

            $("nav")
                .removeClass("blackNav")
                .addClass("whiteNav");
            
            $(".logo a")
                .html(`<img src="images/logo/logo-white.png">`)
            
            $(".links a")
                .removeClass("blackLines")
                .addClass("whiteLines")
                .css("color", "white");
        } else {
            $(".hero")
                .removeClass("backgroundImage");

            $("nav")
                .removeClass("whiteNav")
                .addClass("blackNav")
            
            $(".logo a")
                .html(`<img src="images/logo/logo-black.png">`)

            
            $(".links a")
                .removeClass("whiteLines")
                .addClass("blackLines")
                .css("color", "black");
    
        }

        MODEL.getPageContent(contentId)
    });

    $("footer a").click(function() {
        let btnId = this.id;
        let contentId = btnId + "Content";
        $(".hero")
            .addClass("backgroundImage")

            $("nav")
                .removeClass("blackNav")
                .addClass("whiteNav")
            
            $(".logo a")
                .html("<img src='images/logo/logo-white.png'>")
            
            $(".links a")
                .removeClass("blackLines")
                .addClass("whiteLines")
                .css("color","white")

        MODEL.getPageContent(contentId)
            
    })
    
    $(".learnMORE a").click(function() {
        let btnId = this.id;
        let contentId = btnId + "Content";
        $(".hero")
                .removeClass("backgroundImage");

            $("nav")
                .removeClass("whiteNav")
                .addClass("blackNav")
            
            $(".logo a")
                .html(`<img src="images/logo/logo-black.png">`)

            
            $(".links a")
                .removeClass("whiteLines")
                .addClass("blackLines")
                .css("color", "black");

        MODEL.getPageContent(contentId)
    })

}

$(document).ready(function(){
    MODEL.getPageContent("homeContent");
    $(".hero").addClass("backgroundImage");
    $("nav").addClass("whiteNav");
    $(".links a").addClass("whiteLines");
    init();
    
    
})