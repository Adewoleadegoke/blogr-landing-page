var openIcon = document.getElementById('open-icon');
var closeIcon = document.getElementById('close-icon');

openIcon.addEventListener('click', function () {
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    document.querySelector('nav').classList.remove('hidden');
})
closeIcon.addEventListener('click', function () {
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    document.querySelector('nav').classList.add('hidden');
})




let dropdownWord = document.querySelectorAll('.dropdown-word');


dropdownWord.forEach(function (dropWord) {
    dropWord.addEventListener('click', function () {
    
    
      let dropdownContainer = document.querySelectorAll('.dropdown');
         
      //code for interactivity on dropdown
     //   dropdownContainer.forEach(function (dropContainer) {
            //dropContainer.classList.add('hidden');
            
   dropdownContainer.forEach(function (dropContainer) {
       dropContainer.classList.add('hidden');
   });
   
   
   
      let dropdownProductWord = document.getElementById('dropdown-product');
      var dropdownCompanyWord = document.getElementById('dropdown-company');
      var dropdownConnectWord = document.getElementById('dropdown-connect');
      // For the containers
      var dropdownProductContainer = document.getElementById('dropdown-product-container');      
       var dropdownCompanyContainer = document.getElementById('dropdown-company-container');
      var dropdownConnectContainer = document.getElementById('dropdown-connect-container');
            
  dropdownProductWord.addEventListener('click', function () {
      dropdownProductContainer.classList.toggle('hidden');
  })
                
   dropdownCompanyWord.addEventListener('click', function () {
       dropdownCompanyContainer.classList.toggle('hidden');
   })
   dropdownConnectWord.addEventListener('click', function () {
       dropdownConnectContainer.classList.toggle('hidden');
   })
  })
 })
 
            
     

//Code for Nav on 1000px screen size 
function adjustNavOnDesktop() {
   var nav = document.querySelector('nav');
   
    if (window.innerWidth >= 1000) {
        nav.classList.remove('hidden')
    }
}

window.addEventListener('load', adjustNavOnDesktop);
window.addEventListener('resize', adjustNavOnDesktop);