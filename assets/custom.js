$(document).ready(function() { 
  let items = document.querySelector(".header__inline-menu").querySelectorAll("details"); 
    items.forEach(item => {
      item.addEventListener("mouseover", () => {
        item.setAttribute("open", true);
        item.querySelector("ul").addEventListener("mouseleave", () => {
          item.removeAttribute("open");
        });
      item.addEventListener("mouseleave", () => {
        item.removeAttribute("open");
      });
    });
    
  });
  
   //mobile previous button function
      function previousPage() {
        window.history.back();
      }
  
  $('button.size_btn.size-chart-poppup').on('click', function(e) {
    e.preventDefault();
    $('.modalcstm').toggleClass('is-visible');
  });
  
  // Close popup
      $(".cstm-close").click(function() {
          $(".modalcstm").removeClass('is-visible');
      });
     $(".modal-overlay.modal-toggle").click(function() {
          $(".modalcstm").removeClass('is-visible');
      }); 

     $(".cstm--modal-overlay").click(function() {
          $(".popup").hide();
         $(".popup").removeClass('show--image--lightbox');
      });
  
     if ($('.drawer__inner-empty').length) {
          $('.drawer__inner-empty').prev('div').hide();
          $('.drawer__inner-empty').next('div').hide();
      } 
});