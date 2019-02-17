var filterdisplaybar;
var currentfilter;
var currentImg;
var currentbackgroundColor;
var filtervalue;
var outerimage = "#imageView";
var inputtxt = "";
var fontcolor = "black";
var fontstyle = "normal";
var fontfamily = "cursive";
var fontbold = "200";
var fontsize = "25";
var textalign = "left";
var checkbold = false;
var currentMainBlur = "#imageView";//holds the current imageView
var pressed=false;
var currentImageSrc="";


$(function () {
    initialLoad();

    var currentTab = "";
    $("#framesBtn").on('click', function () {
        $(currentTab).hide();
        currentTab = '#framesBar';
        $(currentTab).slideToggle();
    });

    $("#blurBtn").on('click', function () {
        $(currentTab).hide();
        currentTab = '#blurBar';
        $(currentTab).slideToggle();
    });

    $("#backgroundBtn").on('click', function () {
        $(currentTab).hide();
        currentTab = '#background';
        $(currentTab).slideToggle();
    });

    $("#ratioBtn").on('click', function () {
        $(currentTab).hide();
        currentTab = '#ratio';
        $(currentTab).slideToggle();
    });

    $("#textBtn").on('click', function () {
        $(currentTab).hide();
        currentTab = '#text';
        $(currentTab).slideToggle();
    });

    $("#filterBtn").on('click', function () {
        $(currentTab).hide();
        currentTab = '#filter';
        $(currentTab).slideToggle();
    });

    var loadedImages = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg', './images/6.jpg', './images/7.jpg', './images/8.jpg'];
    var images = $('#imageView img');
    for (var i = 0; i < images.length; i++) {
        images[i].src = loadedImages[i];
    }

    // $('#colBtn1 #leftBtn').on('click', function (e) {
    //     var col = $('.col1')[0];
    //     var width = getComputedStyle(col).width;
    //     if (parseInt(width) > 150) {
    //         width = (parseInt(width) - 10) + 'px';
    //         col.style.width = width;

    //         var btn = $('#colBtn1')[0];
    //         var left = getComputedStyle(btn).left;
    //         left = (parseInt(left) - 10) + 'px';
    //         btn.style.left = left;

    //         var col = $('.col2')[0];
    //         var width = getComputedStyle(col).width;
    //         width = (parseInt(width) + 10) + 'px';
    //         col.style.width = width;
    //     }
    // });

    $('#colBtn1 #leftBtn').on('click', function (e) {
        var col = $('.col1')[0];
        var width = getComputedStyle(col).width;
        if (parseInt(width) > 150) {
            width = ((parseInt(width) / 500) * 100 - 1) + '%';
            col.style.width = width;

            var btn = $('#colBtn1')[0];
            var left = getComputedStyle(btn).left;
            left = ((parseInt(left) / 500) * 100 - 1) + '%';
            btn.style.left = left;

            var col = $('.col2')[0];
            var width = getComputedStyle(col).width;
            width = ((parseInt(width) / 500) * 100 + 1) + '%';
            col.style.width = width;
        }
    });

    $('#colBtn1 #rightBtn').on('click', function (e) {
        var col = $('.col1')[0];
        var width = getComputedStyle(col).width;
        if (parseInt(width) < parseInt(getComputedStyle($('#imageView')[0]).width) - 150) {
            width = (parseInt(width) + 10) + 'px';
            col.style.width = width;

            var btn = $('#colBtn1')[0];
            var left = getComputedStyle(btn).left;
            left = (parseInt(left) + 10) + 'px';
            btn.style.left = left;

            var col = $('.col2')[0];
            var width = getComputedStyle(col).width;
            width = (parseInt(width) - 10) + 'px';
            col.style.width = width;
        }
    });

    $('#colBtn2 #leftBtn').on('click', function (e) {
        var col = $('.col1')[1];
        var width = getComputedStyle(col).width;
        if (parseInt(width) > 150) {
            width = (parseInt(width) - 10) + 'px';
            col.style.width = width;

            var btn = $('#colBtn2')[0];
            var left = getComputedStyle(btn).left;
            left = (parseInt(left) - 10) + 'px';
            btn.style.left = left;

            var col = $('.col2')[1];
            var width = getComputedStyle(col).width;
            width = (parseInt(width) + 10) + 'px';
            col.style.width = width;
        }
    });

    $('#colBtn2 #rightBtn').on('click', function (e) {
        var col = $('.col1')[1];
        var width = getComputedStyle(col).width;
        if (parseInt(width) < parseInt(getComputedStyle($('#imageView')[0]).width) - 150) {
            width = (parseInt(width) + 10) + 'px';
            col.style.width = width;

            var btn = $('#colBtn2')[0];
            var left = getComputedStyle(btn).left;
            left = (parseInt(left) + 10) + 'px';
            btn.style.left = left;

            var col = $('.col2')[1];
            var width = getComputedStyle(col).width;
            width = (parseInt(width) - 10) + 'px';
            col.style.width = width;
        }
    });

    $('#upBtn').on('click', function (e) {
        var row = $('.row1')[0];
        var height = getComputedStyle(row).height;
        if (parseInt(height) > 150) {
            height = (parseInt(height) - 10) + 'px';
            row.style.height = height;

            var btn = $('#rowBtn')[0];
            var top = getComputedStyle(btn).top;
            top = (parseInt(top) - 10) + 'px';
            btn.style.top = top;

            var row = $('.row2')[0];
            var height = getComputedStyle(row).height;
            height = (parseInt(height) + 10) + 'px';
            row.style.height = height;
        }
    });

    $('#downBtn').on('click', function (e) {
        var row = $('.row1')[0];
        var height = getComputedStyle(row).height;
        if (parseInt(height) < parseInt(getComputedStyle($('#imageView')[0]).height) - 150) {
            height = (parseInt(height) + 10) + 'px';
            row.style.height = height;

            var btn = $('#rowBtn')[0];
            var top = getComputedStyle(btn).top;
            top = (parseInt(top) + 10) + 'px';
            btn.style.top = top;

            var row = $('.row2')[0];
            var height = getComputedStyle(row).height;
            height = (parseInt(height) - 10) + 'px';
            row.style.height = height;
        }
    });




    var getCanvas;

    $("#btn-Preview-Image").on('click', function () {
        var element = $("#imageView")[0];
        html2canvas(element, {
            onrendered: function (canvas) {
                $("#previewImage").empty().append(canvas);
                getCanvas = canvas;
                console.log(canvas);
            }
        });
    });

    $("#btn-Convert-Html2Image").on('click', function () {
        var imgageData = getCanvas.toDataURL("image/png");
        var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
    });

    $('#changeRatioBtn1_1').on('click', function () {
        var view = $("#imageView")[0];
        view.style.width = '500px';
        view.style.height = '500px';
    });

    $('#changeRatioBtn2_1').on('click', function () {
        var view = $("#imageView")[0];
        view.style.width = '500px';
        view.style.height = 500 / 2 + 'px';
    });

    $('#changeRatioBtn1_2').on('click', function () {
        var view = $("#imageView")[0];
        view.style.width = 500 / 2 + 'px';
        view.style.height = '500px';
    });

    $('#changeRatioBtn3_2').on('click', function () {
        var view = $("#imageView")[0];
        view.style.width = 500 + 'px';
        view.style.height = (500 * 2) / 3 + 'px';
    });

    $('#changeRatioBtn2_3').on('click', function () {
        var view = $("#imageView")[0];
        view.style.width = (500 * 2) / 3 + 'px';
        view.style.height = 500 + 'px';
    });

    $('#changeRatioBtn4_3').on('click', function () {
        var view = $("#imageView")[0];
        view.style.width = '500px';
        view.style.height = (500 * 3) / 4 + 'px';
    });

    $('#changeRatioBtn3_4').on('click', function () {
        var view = $("#imageView")[0];
        view.style.width = (500 * 3) / 4 + 'px';
        view.style.height = 500 + 'px';
    });

    $('#changeRatioBtn4_5').on('click', function () {
        var view = $("#imageView")[0];
        view.style.width = (500 * 4) / 5 + 'px';
        view.style.height = 500 + 'px';
    });

    $('#changeRatioBtn5_7').on('click', function () {
        var view = $("#imageView")[0];
        view.style.width = (500 * 5) / 7 + 'px';
        view.style.height = 500 + 'px';
    });

    $('#changeRatioBtn16_9').on('click', function () {
        var view = $("#imageView")[0];
        view.style.width = '500px';
        view.style.height = (500 * 9) / 16 + 'px';
    });

    $('#changeRatioBtn9_16').on('click', function () {
        var view = $("#imageView")[0];
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

        $(currentMainBlur).css("filter", filtervalue);
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
    // $(".zoomin").on("click", function () {
    //     countzoomin += .1;
    //     var v = "scale(" + (1 * countzoomin) + ")";
    //     if (countzoomin == 1.5) {
    //         countzoomin = 1;


    //     }
    //     $(currentImg).css("transform", v);


    // })

    $(".zoomin").on("click", function () {
        var img = $(currentImg)[0];
        var scaleX = (img.getBoundingClientRect().width / img.offsetWidth) + 0.1;
        if (scaleX < 1.5) {
            scaleX = "scale(" + scaleX + ")";
            $(currentImg).css("transform", scaleX);
        }
    })

    // var countzoomout = countzoomin;
    // $(".zoomout").on("click", function () {
    //     countzoomout -= .1;
    //     var v = "scale(" + (1 * countzoomout) + ")";
    //     $(currentImg).css("transform", v);
    //     if (countzoomout == 0)
    //         countzoomout = 1;

    // })

    var countzoomout = countzoomin;
    $(".zoomout").on("click", function () {
        var img = $(currentImg)[0];
        var scaleX = (img.getBoundingClientRect().width / img.offsetWidth) - 0.1;
        if (scaleX > 0.5) {
            scaleX = "scale(" + scaleX + ")";
            $(currentImg).css("transform", scaleX);
        }
    })


    /////////////////////////////////////////////////////////////////////////////////////////////////

    //move right and left

    $(".left").on("click", function () {
        var img = getComputedStyle($(currentImg)).left

        $(currentImg).css("left", leftimg + "px");

    })

    $(".right").on("click", function () {
        var rightimg = parseInt($(currentImg).css("right"));
        var leftimg = parseInt($(currentImg).css("left"));
        var rightborder = parseInt($(".imgborder").css("right"));
        if (rightimg < rightborder) {
            leftimg += 15;
        }
        var newpos = "" + leftimg + "px"
        $(currentImg).css("left", newpos);

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
        pressed=true;
        currentImageSrc=$(currentImg).attr("src");
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

    $(".DimGray").on("click", function () {

        SetBackgroundColor($(outerimage), "DimGray");

    })

    $(".Wheat").on("click", function () {

        SetBackgroundColor($(outerimage), "Wheat");

    })

    $(".DimGray").on("click", function () {

        SetBackgroundColor($(outerimage), "DimGray");

    })

    $(".Black").on("click", function () {

        SetBackgroundColor($(outerimage), "Black");

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


        document.querySelector(".output").insertAdjacentHTML('beforeend', "<p id=" + "textoutput" + (++countParag) + "></p>");

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



    })


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

    var images = ["1.jpg", "2.jpg", "3.jpg", "img.jpg"];
    var img = document.createElement("img");

    for (var i = 0; i < images.length; i++) {

        document.querySelector(".scraper").insertAdjacentHTML('beforeend', "<img id=" + "inputScraperImg" + (i + 1) + " src=" + images[i] + ">");

    }

    var angle = 10;
    var flag = -1;
    var rotate = "rotate(" + flag * angle + "deg)";
    switch (images.length) {
        case 4:
            //insertScraperImg(element,angle,flag,left,top,width,height)
            insertScraperImg($("#inputScraperImg1"), angle, flag, 34, 22, 250, 200)
            insertScraperImg($("#inputScraperImg2"), angle, flag, 35, 250, 250, 200)
            insertScraperImg($("#inputScraperImg3"), angle, flag, 340, 270, 250, 200)
            insertScraperImg($("#inputScraperImg4"), angle, flag, 320, 30, 250, 200)

            break;


        case 3:
            //insertScraperImg(element,angle,flag,left,top,width,height) 
            insertScraperImg($("#inputScraperImg1"), angle, flag, 40, 28, 280, 200)
            insertScraperImg($("#inputScraperImg2"), angle, flag, 35, 250, 280, 200)
            insertScraperImg($("#inputScraperImg3"), angle, -1 * flag, 360, 130, 280, 200)

            break;

        case 2:
            //insertScraperImg(element,angle,flag,left,top,width,height)             
            insertScraperImg($("#inputScraperImg1"), angle, flag, 25, 40, 330, 210)
            insertScraperImg($("#inputScraperImg2"), angle, flag, 320, 230, 330, 210)

            break;


        case 1:
            //insertScraperImg(element,angle,flag,left,top,width,height)             
            insertScraperImg($("#inputScraperImg1"), angle, flag, 130, 95, 400, 300)
            break;

    }

    $('img').on('click',function(e){
        if(pressed==true)
        {
            $(currentImg).attr("src",$(e.currentTarget).attr("src"));
            $(e.currentTarget).attr('src',currentImageSrc);
            pressed=false;
        }
        currentImg=e.currentTarget;
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
});


function insertScraperImg(element, angle, flag, left, top, width, height) {
    var rotate = "rotate(" + flag * angle + "deg)";

    element.css("width", width);
    element.css("height", height);
    element.css("left", left);
    element.css("top", top);
    element.css("transform", rotate);

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

    $(".singleBar").hide();
    $(".multiredbar").show();
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
}
function ShowFilter() {

    filterdisplaybar = $(".AllFilters").css("display");

    if (filterdisplaybar == "none")
        $(".AllFilters").css("display", "flex");
    else
        $(".AllFilters").css({ "display": "none" })

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
    }

}

function SetBackgroundColor(element, color) {
    element.css("background-color", color);
}

function swap(firstImg, SecImg) {



}