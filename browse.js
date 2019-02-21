window.addEventListener('load', function () {
  /*---------AboutUs/Contacts/Home-----------*/
  var AboutUs = document.getElementById('AboutUs');
  var Contacts = document.getElementById('Contacts');
  var Home = document.getElementById('Home');

  AboutUs.addEventListener('click', function () {
    window.location.replace('aboutUs.html', '_blank');
  });
  Contacts.addEventListener('click', function () {
    window.location.replace('contactUs.html', '_blank');
  });
  Home.addEventListener('click', function () {
    window.location.replace('mainPage.html', '_blank');
  });

  /*------------Pic.s Path-------------------*/

  var path1 = document.getElementById('path1');
  var path2 = document.getElementById('path2');
  var path3 = document.getElementById('path3');
  var path4 = document.getElementById('path4');
  var path5 = document.getElementById('path5');


  function storeImagePath() {
    path1.name = path1.value;
    path2.name = path2.value;
    path3.name = path3.value;
    path4.name = path4.value;

  }

  /*----------Text Path interface------------*/

  var pathTxt1 = document.getElementById('pathTxt1');
  var pathTxt2 = document.getElementById('pathTxt2');
  var pathTxt3 = document.getElementById('pathTxt3');
  var pathTxt4 = document.getElementById('pathTxt4');
  var pathTxt5 = document.getElementById('pathTxt5');

  function showPath() {
    pathTxt1.placeholder = path1.value;
    pathTxt2.placeholder = path2.value;
    pathTxt3.placeholder = path3.value;
    pathTxt4.placeholder = path4.value;
    pathTxt5.placeholder = path5.value;

  }

  function ShowAndStorePath() {
    showPath();
    storeImagePath();
  }

  path1.addEventListener('change', ShowAndStorePath);
  path2.addEventListener('change', ShowAndStorePath);
  path3.addEventListener('change', ShowAndStorePath);
  path4.addEventListener('change', ShowAndStorePath);
  path5.addEventListener('change', ShowAndStorePath);

  /*-----show and hide avaliable pathes------*/

  var selected = localStorage.getItem('number');

  function hideTwo() {
    path2.style.display = 'none';
    pathTxt2.style.display = 'none';
  }
  function hideThree() {
    path3.style.display = 'none';
    pathTxt3.style.display = 'none';
  }
  function hideFour() {
    path4.style.display = 'none';
    pathTxt4.style.display = 'none';
  }
  function hideFive() {
    path5.style.display = 'none';
    pathTxt5.style.display = 'none';
  }

  if (selected === 'one') {
    hideTwo();
    hideThree();
    hideFour();
    hideFive();
  }
  if (selected === 'two') {
    hideThree();
    hideFour();
    hideFive();
  }
  if (selected === 'three') {
    hideFour();
    hideFive();
  }
  if (selected === 'four') {
    hideFive();
  }

  var imgArr = [];
  document.getElementById('Done').addEventListener('click', function (e) {
    var btns = document.querySelectorAll('input[type=file]');
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].value != '') {
        imgArr.push(btns[i].files[0].name);
      }
    }
    localStorage.setItem('images',JSON.stringify(imgArr));
    window.location.replace('edit.html', '_blank');
  })

}); 