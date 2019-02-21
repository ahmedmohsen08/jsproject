      window.addEventListener('load',function()
         { 
            var Contacts = document.getElementById('Contacts');
            var Home     = document.getElementById('Home');
            
            Contacts.addEventListener('click',function()
              {
                window.location.replace('contactUs.html','_blank');
              });
            Home.addEventListener('click',function()
              {
                window.location.replace('mainPage.html');
              });
                              
         });