      window.addEventListener('load',function()
         { 
            var AboutUs  = document.getElementById('AboutUs');
            var Home     = document.getElementById('Home');
            
            AboutUs.addEventListener('click',function()
              {
                window.location.replace('aboutUs.html','_blank');
              });
         
            Home.addEventListener('click',function()
              {
                window.location.replace('mainPage.html');
              });
 
//        var userDataQuery = location.search.substring(1,location.search.length).split('&');
//        var userData = new Array;
//        for(var i=0; i<str.length; i++)
//            userData[i] = userDataQuery[i].split('=');
//        console.log(userData);
//          
//        for(var i=0; i<userData.length; i++)
//          localStorage.setItem(userData[i][0],decodeURIComponent(userData[i][1]));
//        
//        var Name = localStorage.getItem(userData[0][0]);
//        var currentLocation = localStorage.getItem('Current+Location');
//        var distenation = localStorage.getItem('Distenation');
//        document.writeln("<h1>Hello "+Nameame+"!</h1>");
//        document.writeln("<h2>Thank you for your feedback ^_^</h1>");
//        
                              
         });