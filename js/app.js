/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */


 /* Define Global Variables*/
 var i = 0;
 const sections = document.querySelectorAll('section');
 const ul = document.createElement("ul");
//  const list = document.createElement("li");
 const lists = document.getElementsByTagName("li");
 




 /* End Global Variables*/
 /* Start Helper Functions*/
 for (section of sections){
     var lii = document.createElement("li");
     lii.innerHTML=`<a href="#${section.id}" class="menu__link" id="element${++i}">${section.id}</a> `;
     document.getElementById('navbar__list').appendChild(lii);
     
    }
    
    
    
    


    //   function scrollBehavior(li, section){
    //       li.addEventListener('click', function(){

    //           window.scrollTo({
    //               top: section.offsetTop,
    //               behavior:"smooth"
    //           });
    //       });
    //   }

    //    list.forEach(element => {
    //      element.click(function() {
    //          $('html,body').animate({
    //              scrollTop: $(section.id).offset().top},
    //              'slow');
    //      });
          
        //  var elmntToView = document.getElementById("sectionId");
        //  elmntToView.scrollIntoView(); 

        //  function scrollToSection(){
            
        //         list .forEach(element => {
        //             element.addEventListener("click", function() {
        //                 window.scrollTo({
        //                   top:$("#section").offsetTop,
        //                   behavior:"smooth"
        //               });
                     
        //          });


        //      })
        //  }
        //  scrollToSection();
        for(list of lists){
            
            // list.addEventListener("click", function() {
            //              window.scrollTo({
            //                top:.offsetTop,
            //                behavior:"smooth"
            //            });
               
            //       });
        }


 
    // function joinLink() {
                  
    //     // Create anchor element.
    //     var a = document.createElement('a'); 
          
    //     // Create the text node for anchor element.
    //     var link = document.createTextNode("This is link");
          
    //     // Append the text node to anchor element.
    //     a.appendChild(link); 
          
    //     // Set the title.
    //     a.title = "This is Link"; 
          
    //     // Set the href property.
    //     a.href = "https://www.geeksforgeeks.org"; 
          
    //     // Append the anchor element to the body.
    //     document.body.appendChild(a); 
    // }

 




 /* End Helper Functions*/
 /* Begin Main Functions
 *
 */

// build the nav
// sections.forEach(createLink);




// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
