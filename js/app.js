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
  //creating li element for each section
     var lii = document.createElement("li");
  //adding the html to the element
     lii.innerHTML=`<a href="#${section.id}" class="menu__link" id="element${++i}">${section.id}</a> `;
  //adding the element to navbar
     document.getElementById('navbar__list').appendChild(lii);
     scrollToSection(lii, section);
     
    }


    // Scroll to anchor ID using scrollTO event
    // Scroll to section on link click

    function scrollToSection(lii, section){
        lii.addEventListener('click', function(e){
            e.preventDefault();
            window.scrollTo({
                top: section.offsetTop,
                behavior:"smooth"
            });
        });
    }


// Add class 'active' to section when near top of viewport

// Set sections as active

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
    
