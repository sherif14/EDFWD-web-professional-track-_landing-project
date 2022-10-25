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
 var k=0;
 const sections = document.querySelectorAll('section');
 const ul = document.createElement("ul");
 const lists = document.getElementsByTagName("li");
 




 /* End Global Variables*/
 /* Start Helper Functions*/


 // build the nav
 for (section of sections){
     var lii = document.createElement("li");
     lii.innerHTML=`<a href="#${section.id}" class="menu__link" id="element${++i}">${section.id}</a> `;
     document.getElementById('navbar__list').appendChild(lii);
     scrollToSection(lii, section);
     
    }

    // Scroll to anchor ID using scrollTO event
    function scrollToSection(lii, section){
        lii.addEventListener('click', function(e){
            e.preventDefault();
            window.scrollTo({
                top: section.offsetTop,
                behavior:"smooth"
            });
        });
    }

    

    
    document.addEventListener("scroll",function(){
       
        const navbarButtons = document.querySelectorAll(".menu__link")
        navbarButtons.forEach((navbarButton)=>{
            
            const bounding = section.getBoundingClientRect();
         
            if (bounding.top <= 300 && bounding.bottom >= 300){
               
                navbarButton.classList.add("activated_button");
            } else{
                
                
                navbarButton.classList.remove("activated_button");
            }
        })
    });
    document.addEventListener("scroll",function(){
        // Select all anchor using "menu__link" class
        
        sections.forEach((section)=>{
            
            const sectionInformation = section.getBoundingClientRect();
             
            if (sectionInformation.top <= 300 && sectionInformation.bottom >= 300){
               
                section.classList.add("your-active-class");
               
                
            } else{
                
                section.classList.remove("your-active-class");
               
            }
        })
    });
    
    

    
    
   
    
    
    


   

 




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
