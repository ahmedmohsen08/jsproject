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
/*---------local Storage/User Data---------*/                
    
        var userDataQuery = location.search.substring(1,location.search.length).split('&');
        var userData = new Array;
        for(var i=0; i<userDataQuery.length; i++)
            userData[i] = userDataQuery[i].split('=');
        console.log(userData);
          
        for(var i=0; i<userData.length; i++)
          localStorage.setItem(userData[i][0],decodeURIComponent(userData[i][1]));
        
        var Name = localStorage.getItem(userData[0][0]);
        var currentLocation = localStorage.getItem('Current+Location');
        var distenation = localStorage.getItem('Distenation');
    
        var welcomeMsg = document.getElementById('welcomeMsg');
        var thanksMsg  = document.getElementById('thanksMsg');
        
        welcomeMsg.innerText = "Hello "+Name+"!";
        thanksMsg.innerText  = "Thank you for your feedback ^_^";
    
    
       
      }); 