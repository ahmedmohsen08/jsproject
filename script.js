$(function () {
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
    var images = $('img');
    for (var i = 0; i < images.length; i++) {
        images[i].src = loadedImages[i];
    }

    $('#colBtn1 #leftBtn').on('click', function (e) {
        var col = $('.col1')[0];
        var width = getComputedStyle(col).width;
        if (parseInt(width) > 150) {
            width = (parseInt(width) - 10) + 'px';
            col.style.width = width;

            var btn = $('#colBtn1')[0];
            var left = getComputedStyle(btn).left;
            left = (parseInt(left) - 10) + 'px';
            btn.style.left = left;

            var col = $('.col2')[0];
            var width = getComputedStyle(col).width;
            width = (parseInt(width) + 10) + 'px';
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

    $('#changeRatioBtn1_1').on('click',function(){
        var view=$("#imageView")[0];
        view.style.width='500px';
        view.style.height='500px';
    });

    $('#changeRatioBtn2_1').on('click',function(){
        var view=$("#imageView")[0];
        view.style.width='500px';
        view.style.height=500/2+'px';
    });

    $('#changeRatioBtn1_2').on('click',function(){
        var view=$("#imageView")[0];
        view.style.width=500/2+'px';
        view.style.height='500px';
    });

    $('#changeRatioBtn3_2').on('click',function(){
        var view=$("#imageView")[0];
        view.style.width=500+'px';
        view.style.height=(500*2)/3+'px';
    });

});