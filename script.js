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

    var loadedImages=['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg','./images/6.jpg','./images/7.jpg','./images/8.jpg'];
    var images=$('img');
    for(var i=0;i<images.length;i++)
    {
        images[i].src=loadedImages[i];
    }
    
    $('#leftBtn').on('click',function(e){
        var col=$('.col1')[0];
        var width=getComputedStyle(col).width;
        width=(parseInt(width)-10)+'px';
        col.width=width;

        var btn=$('#colBtn')[0];
        var left=getComputedStyle(btn).left;
        left=(parseInt(left)-10)+'px';
        btn.style.left=left;
    });

    $('#rightBtn').on('click',function(e){
        var col=$('.col1')[0];
        var width=getComputedStyle(col).width;
        width=(parseInt(width)+10)+'px';
        col.width=width;

        var btn=$('#colBtn')[0];
        var left=getComputedStyle(btn).left;
        left=(parseInt(left)+10)+'px';
        btn.style.left=left;
    });

    $('#upBtn').on('click',function(e){
        var row=$('.row1')[0];
        var height=getComputedStyle(row).height;
        height=(parseInt(height)-10)+'px';
        row.style.height=height;

        var btn=$('#rowBtn')[0];
        var top=getComputedStyle(btn).top;
        top=(parseInt(top)-10)+'px';
        btn.style.top=top;
    });

    $('#downBtn').on('click',function(e){
        var row=$('.row1')[0];
        var height=getComputedStyle(row).height;
        height=(parseInt(height)+10)+'px';
        row.style.height=height;

        var btn=$('#rowBtn')[0];
        var top=getComputedStyle(btn).top;
        top=(parseInt(top)+10)+'px';
        btn.style.top=top;
    });
});