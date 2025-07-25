      // highlights the active navbar item (also while on the same html page)
      function highlightActive(load=true) {

        // Get current page URL
        var currentUrl = window.location.hash;

        // on initial page load the url directs to index.html, which leads to an initially empty string
        if (currentUrl == "") {
          currentUrl = "#"
        }

        // Find the matching navbar item
        $('.navbar-nav a').each(function() {

          var linkUrl = $(this).attr('href');

          if (currentUrl === linkUrl) {
            // Add 'active' class to parent <li>
            $(this).parent().addClass('active'); 
            console.log(window.location.href)
            // only highlight code links on window load to avoid double triggers
            if ((currentUrl === "#Code") && (load)){
              $('#codeCard').effect('highlight',{color:"#c7e3ff"},1000);
            }
          }
          // remove active class from others navbar items
          else {
            $(this).parent().removeClass('active')
          }

        })
      
      };

      $(document).ready(function(){

        // highlight appropriate navbar items on load or hashchange
        $(window).on('hashchange', function(event){

          highlightActive(load = false);

        }).on('load', function(event){

          highlightActive(load = true);

        });

        // highlight code cards on clicking Code navbar item 
        $('#codeLink').click(function(){
          $('#codeCard').effect('highlight', {color:"#c7e3ff"}, 1000);
        });

      });