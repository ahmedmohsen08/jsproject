      window.addEventListener('load',function()
         { 
/*----------------SlideShow----------------*/  
          
           var i = 0;
           var slideShowImages = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
           setInterval(slideShow,2000);
           function slideShow()
            {
                if(i >= slideShowImages.length-1)
                    i=0;
                else
                    i++;
                document.images[0].src= slideShowImages[i];
            }
            
/*---------AboutUs/Contacts/Home-----------*/                
            var AboutUs  = document.getElementById('AboutUs');
            var Contacts = document.getElementById('Contacts');
            
            AboutUs.addEventListener('click',function()
              {
                window.location.replace('aboutUs.html','_blank');
              });
            Contacts.addEventListener('click',function()
              {
                window.location.replace('contactUs.html','_blank');
              });
          
/*------------local Storage----------------*/                
                 
            var multiPicIcon     = document.getElementById('multiPicIcon');
            var scrapIcon        = document.getElementById('scrapIcon');
            var singleEditorIcon = document.getElementById('singleEditorIcon');
            
            var form    = document.getElementsByTagName('form')[0];
            
          
            multiPicIcon.addEventListener('click',function()
              {
                localStorage.setItem('option','multi');
                form.action  = "multiImages.html";
              });
          
            scrapIcon.addEventListener('click',function()
              {
                localStorage.setItem('option','scraper');
                form.action = "multiImages.html";
              });
          
            singleEditorIcon.addEventListener('click',function()
              {
                localStorage.setItem('option','single');
                localStorage.setItem('number','one');
                form.action = "browse.html";
              });
          
          
         });