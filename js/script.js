var circleBottom = true;
var circleBottomL = true;
var circleL = true;
var circleLUpper = true;
var circleTop = true;
var circleTopR = true;
var circleR = true;
var circleBottomR = true;
var circleLargeGreyFront = true;


// CIRCLE BOTTOM---------------------------------------------------------------------------------
$("#togglecircleBottom").on("click", function () {
    circleBottom = !circleBottom;
    $("#circleBottom").fadeToggle()
    if (circleBottom) {
        $("#togglecircleBottom").text("check_circle")
        $("#circleBottom").show("#circleBottom")
    } else {
        $("#togglecircleBottom").text("add_circle")
        $("#circleBottom").show()
    }
    // $("#circleBottom").on("click",function () {
    //     // circleBottom = true; 
    //     $("#circleBottom").css('fill', '#546788');
    //     $("#circleBottom").css('stroke', '158844');
    // });
})


// CIRCLE BOTTOM LEFT-------------------------------------------------------------------------------
$("#togglecircleBottomL").on("click", function () {
    circleBottomL = !circleBottomL;
    $("#circleBottomL").fadeToggle()
    if (circle2) {
        $("#togglecircleBottomL").text("check_circle")
        $("#circleBottomL").show("#circleBottomL")
    } else {
        $("#togglecircleBottomL").text("add_circle")
        $("#circleBottomL").show()
    }
    // $("#circle2").on("click",function () {
    //     // circleBottom = true; 
    //     $("#circle2").css('fill', '#546788');
    //     $("#circle2").css('stroke', '158844');
    // })

})



// CIRCLE LEFT-------------------------------------------------------------------------------------------------
$("#togglecircleL").on("click", function () {
    circleL = !circleL;
    $("#circleL").fadeToggle()
    if (circleL) {
        $("#togglecircleL").text("check_circle")
        $("#circleL").show("#circleL")
    } else {
        $("#togglecircleL").text("add_circle")
        $("#circleL").show()
    }
    // $("#circle2").on("click",function () {
    //     // circleBottom = true; 
    //     $("#circle2").css('fill', '#546788');
    //     $("#circle2").css('stroke', '158844');
    // })

})

// CIRCLE LEFT UPPER----------------------------------------------------------------------------------------------
$("#togglecircleLUpper").on("click", function () {
    circleLUpper = !circleLUpper;
    $("#circleLUpper").fadeToggle()
    if (circleLUpper) {
        $("#togglecircleLUpper").text("check_circle")
        $("#circleLUpper").show("#circleLUpper")
    } else {
        $("#togglecircleLUpper").text("add_circle")
        $("#circleLUpper").show()
    }
    // $("#circle2").on("click",function () {
    //     // circleBottom = true; 
    //     $("#circle2").css('fill', '#546788');
    //     $("#circle2").css('stroke', '158844');
    // })

})

// CIRCLE TOP----------------------------------------------------------------------------------------------
$("#togglecircleTop").on("click", function () {
    circleTop = !circleTop;
    $("#circleTop").fadeToggle()
    if (circleTop) {
        $("#togglecircleTop").text("check_circle")
        $("#circleTop").show("#circleTop")
    } else {
        $("#togglecircleTop").text("add_circle")
        $("#circleTop").show()
    }
    // $("#circle2").on("click",function () {
    //     // circleBottom = true; 
    //     $("#circle2").css('fill', '#546788');
    //     $("#circle2").css('stroke', '158844');
    // })

})


// CIRCLE TOP RIGHT------------------------------------------------------------------------------------------------
$("#togglecircleTopR").on("click", function () {
    circleTopR = !circleTopR;
    $("#circleTopR").fadeToggle()
    if (circleTopR) {
        $("#togglecircleTopR").text("check_circle")
        $("#circleTopR").show("#circleTopR")
    } else {
        $("#togglecircleTopR").text("add_circle")
        $("#circleTopR").show()
    }
    // $("#circle2").on("click",function () {
    //     // circleBottom = true; 
    //     $("#circle2").css('fill', '#546788');
    //     $("#circle2").css('stroke', '158844');
    // })

})

// CIRCLE RIGHT------------------------------------------------------------------------------------------------
$("#togglecircleR").on("click", function () {
    circleR = !circleR;
    $("#circleR").fadeToggle()
    if (circleR) {
        $("#togglecircleR").text("check_circle")
        $("#circleR").show("#circleR")
    } else {
        $("#togglecircleR").text("add_circle")
        $("#circleR").show()
    }
    // $("#circle2").on("click",function () {
    //     // circleBottom = true; 
    //     $("#circle2").css('fill', '#546788');
    //     $("#circle2").css('stroke', '158844');
    // })

})


// CIRCLE BOTTOM RIGHT----------------------------------------------------------------------------------------------
$("#togglecircleBottomR").on("click", function () {
    circleBottomR = !circleBottomR;
    $("#circleBottomR").fadeToggle()
    if (circleBottomR) {
        $("#togglecircleBottomR").text("check_circle")
        $("#circleBottomR").show("#circleBottomR")
    } else {
        $("#togglecircleBottomR").text("add_circle")
        $("#circlBottomR").show()
    }
    // $("#circle2").on("click",function () {
    //     // circleBottom = true; 
    //     $("#circle2").css('fill', '#546788');
    //     $("#circle2").css('stroke', '158844');
    // })

})


// COLOR CHANGES------------------------------------------------------------------------------------------------------

$("#circleBottomcolor").on("change", function () {
    $("#circleBottom .st2").css("fill", $(this).val())
})


$("#circleBottomLcolor").on("change", function () {
    $("#circleBottomL .st2").css("fill", $(this).val())
})


$("#circleLcolor").on("change", function () {
    $("#circleL .st2").css("fill", $(this).val())
})

$("#circleLUppercolor").on("change", function () {
    $("#circleLUpper .st2").css("fill", $(this).val())
})

$("#circleTopcolor").on("change", function () {
    $("#circleTop .st2").css("fill", $(this).val())
})

$("#circleTopRcolor").on("change", function () {
    $("#circleTopR .st2").css("fill", $(this).val())
})

$("#circleRcolor").on("change", function () {
    $("#circleR .st2").css("fill", $(this).val())
})

$("#circleBottomRcolor").on("change", function () {
    $("#circleBottomR .st2").css("fill", $(this).val())
})

$("#LargeGreyFrontcolor").on("change", function () {
    $("#LargeGreyFront .st1").css("fill", $(this).val())
})
