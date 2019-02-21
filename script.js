var filterdisplaybar;
var currentfilter;
var currentImg;
var currentbackgroundColor;
var filtervalue;
var outerimage;
var inputtxt = "";
var fontcolor = "black";
var fontstyle = "normal";
var fontfamily = "cursive";
var fontbold = "200";
var fontsize = "25";
var textalign = "left";
var checkbold = false;
var currentMainBlur;//holds the current imageView
var pressed = false;
var currentImageSrc = "";



var retrievedData = localStorage.getItem("images");
var retrievedImages = JSON.parse(retrievedData);
console.log(retrievedImages);

var retrievedOption = localStorage.getItem("option");


$(function () {
    initialLoad();

    function btnMoveLeft(rightCol, leftCol, btn) {
        var width = getComputedStyle(leftCol).width;
        if (parseInt(width) > 150) {
            width = (parseInt(width) - 10) + 'px';
            leftCol.style.width = width;

            var left = getComputedStyle(btn).left;
            left = (parseInt(left) - 10) + 'px';
            btn.style.left = left;

            console.log(rightCol);
            var width = getComputedStyle(rightCol).width;
            width = (parseInt(width) + 10) + 'px';
            rightCol.style.width = width;
        }
    }

    function btnMoveRight(rightCol, leftCol, btn) {
        var width = getComputedStyle(leftCol).width;
        if (parseInt(width) < parseInt(getComputedStyle($('#imageView')[0]).width) - 150) {
            width = (parseInt(width) + 10) + 'px';
            leftCol.style.width = width;

            var left = getComputedStyle(btn).left;
            left = (parseInt(left) + 10) + 'px';
            btn.style.left = left;

            var width = getComputedStyle(rightCol).width;
            width = (parseInt(width) - 10) + 'px';
            rightCol.style.width = width;
        }
    }

    function btnMoveUp(topRow, bottomRow, btn) {
        var height = getComputedStyle(topRow).height;
        if (parseInt(height) > 150) {
            height = (parseInt(height) - 10) + 'px';
            topRow.style.height = height;

            var top = getComputedStyle(btn).top;
            top = (parseInt(top) - 10) + 'px';
            btn.style.top = top;

            var height = getComputedStyle(bottomRow).height;
            height = (parseInt(height) + 10) + 'px';
            bottomRow.style.height = height;
        }
    }

    function btnMoveDown(topRow, bottomRow, btn) {
        var height = getComputedStyle(topRow).height;
        if (parseInt(height) < parseInt(getComputedStyle($('#imageView')[0]).height) - 150) {
            height = (parseInt(height) + 10) + 'px';
            topRow.style.height = height;

            var top = getComputedStyle(btn).top;
            top = (parseInt(top) + 10) + 'px';
            btn.style.top = top;

            var height = getComputedStyle(bottomRow).height;
            height = (parseInt(height) - 10) + 'px';
            bottomRow.style.height = height;
        }
    }


    //imageView btns
    $('#imageView #colBtn1 #leftBtn').on('click', function (e) {
        var leftCol = $('#imageView .row1 .col1')[0];
        var rightCol = $('#imageView .row1 .col2')[0];
        var btn = $('#imageView #colBtn1')[0];
        btnMoveLeft(rightCol, leftCol, btn);
    });

    $('#imageView #colBtn1 #rightBtn').on('click', function (e) {
        var leftCol = $('#imageView .row1 .col1')[0];
        var rightCol = $('#imageView .row1 .col2')[0];
        var btn = $('#imageView #colBtn1')[0];
        btnMoveRight(rightCol, leftCol, btn);
    });

    $('#imageView #colBtn2 #leftBtn').on('click', function (e) {
        var leftCol = $('#imageView .row2 .col1')[0];
        var rightCol = $('#imageView .row2 .col2')[0];
        var btn = $('#imageView #colBtn2')[0];
        btnMoveLeft(rightCol, leftCol, btn);
    });


    $('#imageView #colBtn2 #rightBtn').on('click', function (e) {
        var leftCol = $('#imageView .row2 .col1')[0];
        var rightCol = $('#imageView .row2 .col2')[0];
        var btn = $('#imageView #colBtn2')[0];
        btnMoveRight(rightCol, leftCol, btn);
    });

    $('#imageView #rowBtn #upBtn').on('click', function (e) {
        var topRow = $('#imageView .row1')[0];
        var bottomRow = $('#imageView .row2')[0];
        var btn = $('#imageView #rowBtn')[0];
        btnMoveUp(topRow, bottomRow, btn);
    });

    $('#imageView #rowBtn #downBtn').on('click', function (e) {
        var topRow = $('#imageView .row1')[0];
        var bottomRow = $('#imageView .row2')[0];
        var btn = $('#imageView #rowBtn')[0];
        btnMoveDown(topRow, bottomRow, btn);
    });


    //imageView3 btn
    $('#imageView3 #colBtn1 #leftBtn').on('click', function () {
        var leftCol = $('#imageView3 .row2 .col1')[0];
        var rightCol = $('#imageView3 .row2 .col2')[0];
        var btn = $('#imageView3 #colBtn1')[0];
        btnMoveLeft(rightCol, leftCol, btn);
    })

    $('#imageView3 #colBtn1 #rightBtn').on('click', function () {
        var leftCol = $('#imageView3 .row2 .col1')[0];
        var rightCol = $('#imageView3 .row2 .col2')[0];
        var btn = $('#imageView3 #colBtn1')[0];
        btnMoveRight(rightCol, leftCol, btn);
    })

    $('#imageView3 #rowBtn1 #upBtn').on('click', function () {
        var topRow = $('#imageView3 .row1')[0];
        var bottomRow = $('#imageView3 .row2')[0];
        var btn = $('#imageView3 #rowBtn1')[0];
        btnMoveUp(topRow, bottomRow, btn);
    })

    $('#imageView3 #rowBtn1 #downBtn').on('click', function () {
        var topRow = $('#imageView3 .row1')[0];
        var bottomRow = $('#imageView3 .row2')[0];
        var btn = $('#imageView3 #rowBtn1')[0];
        btnMoveDown(topRow, bottomRow, btn);
    })

    //imageView2 btns
    $('#imageView2 #rowBtn1 #upBtn').on('click', function () {
        var topRow = $('#imageView2 .row1')[0];
        var bottomRow = $('#imageView2 .row2')[0];
        var btn = $('#imageView2 #rowBtn1')[0];
        btnMoveUp(topRow, bottomRow, btn);
    })

    $('#imageView2 #rowBtn1 #downBtn').on('click', function () {
        var topRow = $('#imageView2 .row1')[0];
        var bottomRow = $('#imageView2 .row2')[0];
        var btn = $('#imageView2 #rowBtn1')[0];
        btnMoveDown(topRow, bottomRow, btn);
    })

    //imageView5 btns
    $('#imageView5 #rowBtn1 #upBtn').on('click', function () {
        var topRow = $('#imageView5 .row1')[0];
        var bottomRow = $('#imageView5 .row2')[0];
        var btn = $('#imageView5 #rowBtn1')[0];
        btnMoveUp(topRow, bottomRow, btn);
    })

    $('#imageView5 #rowBtn1 #downBtn').on('click', function () {
        var topRow = $('#imageView5 .row1')[0];
        var bottomRow = $('#imageView5 .row2')[0];
        var btn = $('#imageView5 #rowBtn1')[0];
        btnMoveDown(topRow, bottomRow, btn);
    })

    $('#imageView5 #rowBtn2 #upBtn').on('click', function () {
        var topRow = $('#imageView5 .row2')[0];
        var bottomRow = $('#imageView5 .row3')[0];
        var btn = $('#imageView5 #rowBtn2')[0];
        btnMoveUp(topRow, bottomRow, btn);
    })

    $('#imageView5 #rowBtn2 #downBtn').on('click', function () {
        var topRow = $('#imageView5 .row2')[0];
        var bottomRow = $('#imageView5 .row3')[0];
        var btn = $('#imageView5 #rowBtn2')[0];
        btnMoveDown(topRow, bottomRow, btn);
    })

    $('#imageView5 #colBtn1 #leftBtn').on('click', function () {
        var leftCol = $('#imageView5 .row1 .col1')[0];
        var rightCol = $('#imageView5 .row1 .col2')[0];
        var btn = $('#imageView5 #colBtn1')[0];
        btnMoveLeft(rightCol, leftCol, btn);
    })

    $('#imageView5 #colBtn1 #rightBtn').on('click', function () {
        var leftCol = $('#imageView5 .row1 .col1')[0];
        var rightCol = $('#imageView5 .row1 .col2')[0];
        var btn = $('#imageView5 #colBtn1')[0];
        btnMoveRight(rightCol, leftCol, btn);
    })

    $('#imageView5 #colBtn2 #leftBtn').on('click', function () {
        var leftCol = $('#imageView5 .row3 .col1')[0];
        var rightCol = $('#imageView5 .row3 .col2')[0];
        var btn = $('#imageView5 #colBtn2')[0];
        btnMoveLeft(rightCol, leftCol, btn);
    })

    $('#imageView5 #colBtn2 #rightBtn').on('click', function () {
        var leftCol = $('#imageView5 .row3 .col1')[0];
        var rightCol = $('#imageView5 .row3 .col2')[0];
        var btn = $('#imageView5 #colBtn2')[0];
        btnMoveRight(rightCol, leftCol, btn);
    })



    var getCanvas;

    $("#btn-Preview-Image").on('click', function () {

        
        $(outerimage).clone().appendTo('#previewClone');
        $('#previewClone button').remove();
        var element = $('#previewClone');

        html2canvas(element, {
            onrendered: function (canvas) {
                $("#previewImage").empty().append(canvas);
                getCanvas = canvas;
            }
        });
        reviewImg();
        $('#previewClone').hide();
    });

    $("#btn-Convert-Html2Image").on('click', function () {
        var imgageData = getCanvas.toDataURL("image/png");
        var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
        $('#previewImage').children().remove();
        window.location.replace('mainPage.html', '_blank');
    });

    $('#changeRatioBtn1_1').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = '500px';
        view.style.height = '500px';
    });

    $('#changeRatioBtn2_1').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = '500px';
        view.style.height = 500 / 2 + 'px';
    });

    $('#changeRatioBtn1_2').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = 500 / 2 + 'px';
        view.style.height = '500px';
    });

    $('#changeRatioBtn3_2').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = 500 + 'px';
        view.style.height = (500 * 2) / 3 + 'px';
    });

    $('#changeRatioBtn2_3').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = (500 * 2) / 3 + 'px';
        view.style.height = 500 + 'px';
    });

    $('#changeRatioBtn4_3').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = '500px';
        view.style.height = (500 * 3) / 4 + 'px';
    });

    $('#changeRatioBtn3_4').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = (500 * 3) / 4 + 'px';
        view.style.height = 500 + 'px';
    });

    $('#changeRatioBtn4_5').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = (500 * 4) / 5 + 'px';
        view.style.height = 500 + 'px';
    });

    $('#changeRatioBtn5_7').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = (500 * 5) / 7 + 'px';
        view.style.height = 500 + 'px';
    });

    $('#changeRatioBtn16_9').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = '500px';
        view.style.height = (500 * 9) / 16 + 'px';
    });

    $('#changeRatioBtn9_16').on('click', function () {
        var view = $(outerimage)[0];
        view.style.width = (500 * 9) / 16 + 'px';
        view.style.height = 500 + 'px';
    });


    /////////////////////////////////////////////////////

    //$(".output").draggable();

    $(".filter").on('click', ShowFilter)


    $(".ratio").on('click', function () {

        $(".ratioBar").toggle();

        $(".backgroundColorBar").hide();
        $(".spaceRange").hide();
        $(".MainblurRange").hide();

        $(".allImageFilterRange").hide();
        $(".textbar").hide();
    })


    $(".background").on('click', function () {

        $(".backgroundColorBar").toggle();
        $(".ratioBar").hide();
        $(".spaceRange").hide();
        $(".MainblurRange").hide();
        $(".allImageFilterRange").hide();
        $(".textbar").hide();
    })


    $(".space").on("click", function () {
        $(".backgroundColorBar").hide();
        $(".ratioBar").hide();
        $(".MainblurRange").hide();

        $(".spaceRange").toggle();
        $(".allImageFilterRange").hide();
        $(".textbar").hide();
    })


    $(".blurr").on("click", function () {

        $(".backgroundColorBar").hide();
        $(".ratioBar").hide();
        $(".spaceRange").hide();
        $(".MainblurRange").show();
        $(".allImageFilterRange").hide();
        $(".textbar").hide();

        $(".mainblur").attr("min", 0);
        $(".mainblur").attr("max", 100);
        $(".mainblur").attr("value", 0);
    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

    $("#mainblur").on("input", function (e) {

        var blurValue = $("#mainblur").val();
        currentfilter = "blur";
        filtervalue = currentfilter + "(" + blurValue + "px)";

        $(outerimage).css("filter", filtervalue);
        //e.stopPropagation();
    })


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    $("#none").on("click", function () {
        $(".allImageFilterRange").hide();
        $(currentImg).css("filter", "none");
    })

    $("#brightness").on("click", function () {
        $(currentImg).css("filter", "none");

        $(".allImageFilterRange").show();
        Min0Max200();

        currentfilter = "brightness";
    })

    $("#grayscale").on("click", function () {
        $(currentImg).css("filter", "none");

        $(".allImageFilterRange").show();
        Min0Max100();

        currentfilter = "grayscale";

    })

    $("#hue-rotate").on("click", function () {
        $(currentImg).css("filter", "none");

        $(".allImageFilterRange").show();

        $("#imageFilterrange").attr("value", 0);
        $("#imageFilterrange").attr("min", 0);
        $("#imageFilterrange").attr("max", 360);


        currentfilter = "hue-rotate";
    })

    $("#opacity").on("click", function () {
        $(currentImg).css("filter", "none");

        $(".allImageFilterRange").show();
        Min0Max100();
        currentfilter = "opacity";


    })
    $("#contrast").on("click", function () {
        $(currentImg).css("filter", "none");

        $(".allImageFilterRange").show();
        Min0Max200();
        currentfilter = "contrast";


    })
    $("#sepia").on("click", function () {
        $(currentImg).css("filter", "none");
        $(".allImageFilterRange").show();
        Min0Max100();

        currentfilter = "sepia";


    })
    $("#invert").on("click", function () {
        $(currentImg).css("filter", "none");
        $(".allImageFilterRange").show();
        Min0Max100();

        currentfilter = "invert";


    })
    $("#contrast-brightness").on("click", function () {
        $(currentImg).css("filter", "none");
        $(".allImageFilterRange").show();
        Min0Max200();
        currentfilter = "contrast-brightness";


    })
    $("#drop-shadow").on("click", function () {
        $("#test").css("filter", "none");

        $(".allImageFilterRange").show();
        $("#imageFilterrange").attr("value", 0);
        $("#imageFilterrange").attr("min", 0);
        $("#imageFilterrange").attr("max", 20);

        currentfilter = "drop-shadow";

    })
    $("#saturate").on("click", function () {
        $(currentImg).css("filter", "none");

        $(".allImageFilterRange").show();
        Min0Max200();
        currentfilter = "saturate";

    })
    $("#blur").on("click", function () {
        $(currentImg).css("filter", "none");

        $(".allImageFilterRange").show();
        Min0Max100();
        currentfilter = "blur";
    })



    $("#imageFilterrange").on('input', function () {


        var rangevalue = $("#imageFilterrange").val();
        var filtervalue;
        if (currentfilter == "brightness" || currentfilter == "contrast" || currentfilter == "grayscale" || currentfilter == "opacity" || currentfilter == "sepia" || currentfilter == "saturate" || currentfilter == "invert") {

            //  $("#test").css("filter",currentfilter+"("+rangevalue+"%)");
            filtervalue = currentfilter + "(" + rangevalue + "%)";

        }
        else if (currentfilter == "drop-shadow") {
            filtervalue = "drop-shadow(" + 8 + "px " + 8 + "px " + rangevalue + "px gray)"

        }
        else if (currentfilter == "blur") {
            filtervalue = "blur(" + parseInt(rangevalue) + "px)";

        }
        else if (currentfilter == "contrast-brightness") {
            filtervalue = "contrast(" + (rangevalue + 20) + "%)" + " brightness(" + (rangevalue - 10) + "%)";

        }

        else if (currentfilter == "hue-rotate") {
            filtervalue = " hue-rotate(" + rangevalue + "deg)";
        }

        $(currentImg).css("filter", filtervalue);


    });
    var count = 0;
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //rotation left & right
    $(".rotateleft").on('click', function () {
        $(".allImageFilterRange").hide();
        $(".AllFilters").hide();
        count++;
        var angle = (90 * count * -1) % 360;
        var v = "rotate(" + angle + "deg)";
        $(currentImg).css("transform", v);

    })

    $(".rotateright").on('click', function () {
        $(".allImageFilterRange").hide();
        $(".AllFilters").hide();


        count++;
        var angle = (90 * count) % 360;
        var v = "rotate(" + angle + "deg)";
        $(currentImg).css("transform", v);
        if (count == 4)
            count = 0;
    })

    /////////////////////////////////////////////////////////////////////////////////////////////
    //zooming
    var countzoomin = 1;
    var countzoomout = countzoomin;
    countzoomin = countzoomout;

    $(".zoomin").on("click", function () {
        var img = $(currentImg)[0];
        var scaleX = (img.getBoundingClientRect().width / img.offsetWidth) + 0.1;
        if (scaleX < 2) {
            scaleX = "scale(" + scaleX + ")";
            $(currentImg).css("transform", scaleX);
        }
    })

    var countzoomout = countzoomin;
    $(".zoomout").on("click", function () {
        var img = $(currentImg)[0];
        var scaleX = (img.getBoundingClientRect().width / img.offsetWidth) - 0.1;
        if (scaleX > 0.5) {
            scaleX = "scale(" + scaleX + ")";
            $(currentImg).css("transform", scaleX);
        }
    })

    ///////////////////////////////////////////////////
    //vertical and reverse

    var reverse = 1;
    $(".reverse").on('click', function () {
        var oldtransform = $(currentImg).css("transform");
        $(currentImg).css({ "transform": "scalex(" + (reverse *= -1) + ")" })

        //$(currentImg).css("transform","scalex("+(reverse*=-1)+")");
    })
    var vertical = 1;
    $(".vertical").on('click', function () {
        var oldtransform = $(currentImg).css("transform");
        $(currentImg).css({ "transform": "scaley(" + (vertical *= -1) + ")" })
        //$(currentImg).css("transform","scaley("+(vertical*=-1)+")");
    })
    /////////////////////////////////////////////////////////////////////////////////////////////////

    //move right and left

    $(".left").on("click", function () {
        var imgleft = $(currentImg).css("left");
        if (imgleft == 'auto') {
            console.log('true');
            imgleft = 0;
        }
        else {
            imgleft = parseInt(imgleft);
        }
        console.log(imgleft);
        imgleft -= 15;
        $(currentImg).css("left", imgleft + 'px');
        console.log($(currentImg).css("left"));
    })

    $(".right").on("click", function () {
        var imgleft = $(currentImg).css("left");
        if (imgleft == 'auto') {
            console.log('true');
            imgleft = 0;
        }
        else {
            imgleft = parseInt(imgleft);
        }
        console.log(imgleft);
        imgleft += 15;
        $(currentImg).css("left", imgleft + 'px');
        console.log($(currentImg).css("left"));

    })

    $(".up").on("click", function () {
        var imgtop = $(currentImg).css("top");
        if (imgtop == 'auto') {
            imgtop = 0;
        }
        else {
            imgtop = parseInt(imgtop);
        }
        imgtop -= 15;
        $(currentImg).css("top", imgtop + 'px');
        console.log($(currentImg).css("top"));

    })

    $(".down").on("click", function () {
        var imgtop = $(currentImg).css("top");
        if (imgtop == 'auto') {
            imgtop = 0;
        }
        else {
            imgtop = parseInt(imgtop);
        }
        imgtop += 15;
        $(currentImg).css("top", imgtop + 'px');
        console.log($(currentImg).css("top"));

    })


    /////////////////////////////////////////////////////////////////////////////////////    
    //space    

    $("#sizeRange").on("input", function (e) {

        var rangeVal = parseInt($("#sizeRange").val());
        $(outerimage).css("border", rangeVal + "px solid black");
    })

    $("#cornerRange").on("input", function (e) {

        var rangeVal = parseInt($("#cornerRange").val());
        $(outerimage).css("border-radius", rangeVal + "px");
    })
    /////////////////////////////////////////////////////////////////////////////////////

    //swap 2 image

    $(".swap").on("click", function () {
        pressed = true;
        currentImageSrc = $(currentImg).attr("src");
    })

    //////////////////////////////////////////////////////////////////////////////////////
    //Set background color
    $(".AliceBlue").on("click", function () {

        SetBackgroundColor($(outerimage), "AliceBlue");
    })

    $(".Aqua").on("click", function () {

        SetBackgroundColor($(outerimage), "Aqua");
    })


    $(".Aquamarine").on("click", function () {

        SetBackgroundColor($(outerimage), "Aquamarine");
    })


    $(".DarkCyan").on("click", function () {

        SetBackgroundColor($(outerimage), "DarkCyan");
    })


    $(".DarkTurquoise").on("click", function () {

        SetBackgroundColor($(outerimage), "DarkTurquoise");
    })


    $(".LightSkyBlue").on("click", function () {

        SetBackgroundColor($(outerimage), "LightSkyBlue");
    })


    $(".DodgerBlue").on("click", function () {

        SetBackgroundColor($(outerimage), "DodgerBlue");
    })


    $(".Brown").on("click", function () {

        SetBackgroundColor($(outerimage), "Brown");
    })


    $(".Maroon").on("click", function () {

        SetBackgroundColor($(outerimage), "Maroon");
    })


    $(".Red").on("click", function () {

        SetBackgroundColor($(outerimage), "Red");
    })


    $(".OrangeRed").on("click", function () {

        SetBackgroundColor($(outerimage), "OrangeRed");
    })


    $(".Orange").on("click", function () {

        SetBackgroundColor($(outerimage), "Orange");

    })

    $(".Indigo").on("click", function () {

        SetBackgroundColor($(outerimage), "Indigo");

    })

    $(".DarkOrchid").on("click", function () {

        SetBackgroundColor($(outerimage), "DarkOrchid");

    })

    $(".DarkViolet").on("click", function () {

        SetBackgroundColor($(outerimage), "DarkViolet");

    })

    $(".Blue").on("click", function () {

        SetBackgroundColor($(outerimage), "Blue");

    })

    $(".ForestGreen").on("click", function () {

        SetBackgroundColor($(outerimage), "ForestGreen");

    })

    $(".LimeGreen").on("click", function () {

        SetBackgroundColor($(outerimage), "LimeGreen");

    })

    $(".PaleGreen").on("click", function () {

        SetBackgroundColor($(outerimage), "PaleGreen");

    })

    $(".SpringGreen").on("click", function () {

        SetBackgroundColor($(outerimage), "SpringGreen");

    })

    $(".Fuchsia").on("click", function () {

        SetBackgroundColor($(outerimage), "Fuchsia");
    })

    $(".HotPink").on("click", function () {

        SetBackgroundColor($(outerimage), "HotPink");

    })

    $(".LightPink").on("click", function () {

        SetBackgroundColor($(outerimage), "LightPink");

    })

    $(".SaddleBrown").on("click", function () {

        SetBackgroundColor($(outerimage), "SaddleBrown");

    })

    $(".Sienna").on("click", function () {

        SetBackgroundColor($(outerimage), "Sienna");

    })

    $(".Peru").on("click", function () {

        SetBackgroundColor($(outerimage), "Peru");

    })



    /////////////////////////////////////////////////////////////////////////////////
    //delete image
    $(".delete1").on("click", function () {
        DeleteImg();
    })

    ////////////////////////////////////////////////////////////////////////////////////////
    //show text

    $(".text").on("click", function () {

        ShowTextBar();

    })

    var countParag = 0;
    $("#textdone").on("click", function () {

        console.log(outerimage);
        document.querySelector(outerimage + " .output").insertAdjacentHTML('beforeend', "<p id=" + "textoutput" + (++countParag) + "></p>");

        inputtxt = $("#inputtext").val();
        $("#textoutput" + (countParag)).text(inputtxt);
        $("#textoutput" + (countParag)).css("text-align", textalign);
        $("#textoutput" + (countParag)).css("font-weight", fontbold);
        $("#textoutput" + (countParag)).css("color", fontcolor);
        $("#textoutput" + (countParag)).css("font-style", fontstyle);
        $("#textoutput" + (countParag)).css("font-family", fontfamily);
        $("#textoutput" + (countParag)).css("font-size", fontsize);

        $("#textoutput" + (countParag)).draggable();
        $(".textbar").val(" ");
        $(".textbar").hide();

        $("#textoutput" + (countParag)).on('click', function (e) {
            var currentText = e.currentTarget;
            console.log(currentText);
            ShowTextBar();
            e.stopPropagation();
        })
    })

    $('#deletetext').on("click", function () {

        $('.output p').remove();
        $(".textbar").hide();
    })
    $(".textbar").draggable();


    $("#aligncenter").on("click", function () {

        textalign = "center";
        $("#inputtext").css("text-align", textalign);

    })


    $("#alignleft").on("click", function () {

        textalign = "left";
        $("#inputtext").css("text-align", textalign);

    })

    $("#alignright").on("click", function () {

        textalign = "right";
        $("#inputtext").css("text-align", textalign);

    })

    $("#textbold").on("click", function () {
        if (checkbold) {
            fontbold = "200";
            checkbold = false;
        }
        else {
            checkbold = true;
            fontbold = "bold";
        }

        $("#inputtext").css("font-weight", fontbold);

    })

    $(".fontcolors").on("mouseup", function () {
        fontcolor = $(".fontcolors").val();
        $("#inputtext").css("color", fontcolor);


    })

    $(".fontstyle").on("mouseup", function () {
        fontstyle = $(".fontstyle").val();
        $("#inputtext").css("font-style", fontstyle);


    })

    $(".fontfamily").on("mouseup", function () {
        fontfamily = $(".fontfamily").val();
        $("#inputtext").css("font-family", fontfamily);


    })

    $("#fontsize").on("keyup", function () {
        fontsize = parseInt($("#fontsize").val());
        $("#inputtext").css("font-size", fontsize);


        ;
    })


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('#imageContainer img').on('click', function (e) {
        if (pressed == true) {
            $(currentImg).attr("src", $(e.currentTarget).attr("src"));
            $(e.currentTarget).attr('src', currentImageSrc);
            pressed = false;
        }
        currentImg = e.currentTarget;
        showRedBar(e);
        e.stopPropagation();
    })

    $("#imageView").on("click", function (e) {
        outerimage = "#imageView";
        ShowBlackBar(e);
        e.stopPropagation();
    });

    $("#imageContainer").on("click", function (e) {
        ShowBlackBar(e);
        e.stopPropagation();
    });


    var AboutUs  = document.getElementById('AboutUs');
    var Contacts = document.getElementById('Contacts');
    var Home     = document.getElementById('Home');
          
    AboutUs.addEventListener('click',function()
      {
        window.location.replace('aboutUs.html','_blank');
      });
    Contacts.addEventListener('click',function()
      {
        window.location.replace('contactUs.html','_blank');
      });
    Home.addEventListener('click',function()
       {
         window.location.replace('mainPage.html','_blank');
       });   

});


function insertScraperImg(element, left, top, width, height) {
    element.css("width", width);
    element.css("height", height);
    element.css("left", left);
    element.css("top", top);

}

function Min0Max200() {

    $("#imageFilterrange").attr("value", 0);
    $("#imageFilterrange").attr("min", 0);
    $("#imageFilterrange").attr("max", 200);

}

function Min0Max100() {
    $("#imageFilterrange").attr("value", 0);
    $("#imageFilterrange").attr("min", 0);
    $("#imageFilterrange").attr("max", 100);
}

function showRedBar(e) {
    $(".backgroundColorBar").hide();
    $(".ratioBar").hide();
    $(".spaceRange").hide();
    $(".MainblurRange").hide();
    $(".allImageFilterRange").hide();
    $(".textbar").hide();
    $(".multiBlack").hide();
    $(".textbar").hide();
    if (retrievedImages.length == 1) {
        $(".singleBar").show();
        $(".multiredbar").hide();
    }
    else {
        $(".singleBar").hide();
        $(".multiredbar").show();
    }

    e.stopPropagation();
}



function initialLoad() {
    $(".multiBlack").show();
    $(".singleBar").hide();
    $(".multiredbar").hide();
    $(".ratioBar").hide();
    $(".backgroundColorBar").hide();
    $(".spaceRange").hide();
    $(".MainblurRange").hide();
    $(".allImageFilterRange").hide();
    $(".textbar").hide();
    $('#imageView').hide();
    $('#scraper').hide();
    $('#imageView3').hide();
    $('#imageView2').hide();
    $('#imageView5').hide();
    $('#imageView1').hide();


    GetLayoutOptions(retrievedImages, retrievedOption);


}

function GetLayoutOptions(retrievedImages, retrievedOption) {

    if (retrievedOption != 'scraper' || retrievedImages.length == 1) {
        switch (retrievedImages.length) {
            case 5:
                var images = $('#imageView5 img');
                for (var i = 0; i < retrievedImages.length; i++) {
                    images[i].src = retrievedImages[i];
                }
                $('#imageView5 img').draggable();
                $('#imageView5').show();
                outerimage = '#imageView5';
                break;
            case 4:
                var images = $('#imageView img');
                for (var i = 0; i < retrievedImages.length; i++) {
                    images[i].src = retrievedImages[i];
                }
                $('#imageView img').draggable();
                $('#imageView').show();
                outerimage = '#imageView';
                break;
            case 3:
                var images = $('#imageView3 img');
                for (var i = 0; i < retrievedImages.length; i++) {
                    images[i].src = retrievedImages[i];
                }
                $('#imageView3 img').draggable();
                $('#imageView3').show();
                outerimage = '#imageView3';
                break;
            case 2:
                var images = $('#imageView2 img');
                for (var i = 0; i < retrievedImages.length; i++) {
                    images[i].src = retrievedImages[i];
                }
                $('#imageView2 img').draggable();
                $('#imageView2').show();
                outerimage = '#imageView2';
                break;
            case 1:

                var images = $('#imageView1 img');
                for (var i = 0; i < retrievedImages.length; i++) {
                    images[i].src = retrievedImages[i];
                }
                $('#imageView1 img').draggable();

                $('#imageView1').show();

                outerimage = '#imageView1';
                break;
        }
    }
    else {
        var img = document.createElement("img");
        var left = 1;
        var top = 50;
        for (var i = 0; i < retrievedImages.length; i++) {

            document.querySelector("#scraper").insertAdjacentHTML('beforeend', "<img id=" + "inputScraperImg" + (i + 1) + " src=" + retrievedImages[i] + ">");
            $("#inputScraperImg" + (i + 1)).css("position", "absolute");
            $("#inputScraperImg" + (i + 1)).draggable();
            $("#inputScraperImg" + (i + 1)).css("border-radius", 13 + "px " + 80 + "px");
            insertScraperImg($("#inputScraperImg" + (i + 1)), left += 12, top, 220, 180);

        }
        $('#scraper').show();
        outerimage = '#scraper';
    }
}

function ShowFilter() {

    filterdisplaybar = $(".AllFilters").css("display");

    if (filterdisplaybar == "none")
        $(".AllFilters").css("display", "flex");
    else
    {
        $(".AllFilters").css({ "display": "none" })
        $(".allImageFilterRange").hide();

    }
        
}

function ShowBlackBar(e) {
    $(".allImageFilterRange").hide();
    $(".singleBar").hide();
    $(".multiBlack").show();
    $("#imageFilterrange").hide();
    $(".AllFilters").hide();
    $(".multiredbar").hide();
}
function ShowTextBar() {
    $(".backgroundColorBar").hide();
    $(".ratioBar").hide();
    $(".spaceRange").hide();
    $(".MainblurRange").hide();
    $(".allImageFilterRange").hide();
    $(".textbar").show();
}

function DeleteImg() {
    var reply = confirm("Do you want to delete this image???");
    if (reply) {
        $(currentImg).remove();
        var index = retrievedImages.indexOf($(currentImg).attr("src"));
        retrievedImages.splice(index, 1);
        initialLoad();

    }

}

function SetBackgroundColor(element, color) {
    element.css("background-color", color);
}

function reviewImg() {  


    $(".multiBlack").hide();
    $(".singleBar").hide();
    $(".multiredbar").hide();
    $(".ratioBar").hide();
    $(".backgroundColorBar").hide();
    $(".spaceRange").hide();
    $(".MainblurRange").hide();
    $(".allImageFilterRange").hide();
    $(".textbar").hide();
    $('#imageView').hide();
    $('#scraper').hide();
    $('#imageView3').hide();
    $('#imageView2').hide();
    $('#imageView5').hide();
    $('#imageView1').hide();

}