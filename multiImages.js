window.addEventListener('load',function()
    { 
/*---------AboutUs/Contacts/Home-----------*/                
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
      
/*------------local Storage----------------*/                
      var two   = document.getElementById("twoImagesIcon");
      var three = document.getElementById("threeImagesIcon");
      var four  = document.getElementById("fourImagesIcon");
      var five  = document.getElementById("fiveImagesIcon");
    
     two.addEventListener('click',function()
              {
                localStorage.setItem('number','two');
              });
    
    three.addEventListener('click',function()
              {
                localStorage.setItem('number','three');
              });
    
    four.addEventListener('click',function()
              {
                localStorage.setItem('number','four');
              });
    
    five.addEventListener('click',function()
              {
                localStorage.setItem('number','five');
              });
       
    /*
    
    
          <input id="twoImagesIcon" type="submit" value=" " name="two">
          <label id="label5" class="label">Two Images</label>
          <br>
          
          <input id="threeImagesIcon" type="submit" value=" " name="three">
          <label id="label6" class="label">Three Images</label>
          <br>
          
          <input id="fourImagesIcon" type="submit" value=" " name="four">
          <label id="label7" class="label">Four Images</label>
          <br>
          
          <input id="fiveImagesIcon" type="submit" value=" " name="five">
          <label id="label8" class="label">Five Images</label>
          
    
    
    */
    
      }); 