$('.owl-carousel').owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 4,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 1250,
    autoplayHoverPause: true,
});

let sira = true;

$("#wishlist").click(function () {
    if (sira) {
        $("#wishlist").click(function () {
            $("#wishlist").attr("class", "fas fa-heart")
        });
        sira = false;
    } else {
        $("#wishlist").click(function () {
            $("#wishlist").attr("class", "far fa-heart")
        });
        sira = true;
    };
});


$("#wishlist2").click(function () {
    if (sira) {
        $("#wishlist2").click(function () {
            $("#wishlist2").attr("class", "far fa-heart")
        });
        sira = false;
    } else {
        $("#wishlist2").click(function () {
            $("#wishlist2").attr("class", "fas fa-heart")
        });
        sira = true;
    };
});

$("#wishlist3").click(function () {
    if (sira) {
        $("#wishlist3").click(function () {
            $("#wishlist3").attr("class", "fas fa-heart")
        });
        sira = false;
    } else {
        $("#wishlist3").click(function () {
            $("#wishlist3").attr("class", "far fa-heart")
        });
        sira = true;
    };
});

$("#wishlist4").click(function () {
    if (sira) {
        $("#wishlist4").click(function () {
            $("#wishlist4").attr("class", "fas fa-heart")
        });
        sira = false;
    } else {
        $("#wishlist4").click(function () {
            $("#wishlist4").attr("class", "far fa-heart")
        });
        sira = true;
    };
});

$("#wishlist5").click(function () {
    if (sira) {
        $("#wishlist5").click(function () {
            $("#wishlist5").attr("class", "far fa-heart")
        });
        sira = false;
    } else {
        $("#wishlist5").click(function () {
            $("#wishlist5").attr("class", "fas fa-heart")
        });
        sira = true;
    };
});

$("#wishlist6").click(function () {
    if (sira) {
        $("#wishlist6").click(function () {
            $("#wishlist6").attr("class", "fas fa-heart")
        });
        sira = false;
    } else {
        $("#wishlist6").click(function () {
            $("#wishlist6").attr("class", "far fa-heart")
        });
        sira = true;
    };
});

$("#wishlist7").click(function () {
    if (sira) {
        $("#wishlist7").click(function () {
            $("#wishlist7").attr("class", "fas fa-heart")
        });
        sira = false;
    } else {
        $("#wishlist7").click(function () {
            $("#wishlist7").attr("class", "far fa-heart")
        });
        sira = true;
    };
});

$("#wishlist8").click(function () {
    if (sira) {
        $("#wishlist8").click(function () {
            $("#wishlist8").attr("class", "far fa-heart")
        });
        sira = false;
    } else {
        $("#wishlist8").click(function () {
            $("#wishlist8").attr("class", "fas fa-heart")
        });
        sira = true;
    };
});

$("#wishlist9").click(function () {
    if (sira) {
        $("#wishlist9").click(function () {
            $("#wishlist9").attr("class", "fas fa-heart")
        });
        sira = false;
    } else {
        $("#wishlist9").click(function () {
            $("#wishlist9").attr("class", "far fa-heart")
        });
        sira = true;
    };
});

AOS.init();

$(".addcart").click(function () {

    swal({
        icon: "success",
        title: "Added to Cart",
        timer: 1100,
    });

})