$(function () {
    var currentTab="";
    $("#framesBtn").on('click',function(){
        $(currentTab).hide();
        currentTab='#framesBar';
        $(currentTab).slideToggle();
    });

    $("#blurBtn").on('click', function () {
        $(currentTab).hide();
        currentTab='#blurBar';
        $(currentTab).slideToggle();
    });

    $("#backgroundBtn").on('click', function () {
        $(currentTab).hide();
        currentTab='#background';
        $(currentTab).slideToggle();
    });

    $("#ratioBtn").on('click', function () {
        $(currentTab).hide();
        currentTab='#ratio';
        $(currentTab).slideToggle();
    });

    $("#textBtn").on('click', function () {
        $(currentTab).hide();
        currentTab='#text';
        $(currentTab).slideToggle();
    });

    $("#filterBtn").on('click', function () {
        $(currentTab).hide();
        currentTab='#filter';
        $(currentTab).slideToggle();
    });
});