 const showing_class = "showing";

    const firstSlide = document.querySelector(".slider_item:first-child");

    function slide(){

      const currentSlide = document.querySelector(`.${showing_class}`); 

      if(currentSlide){

        currentSlide.classList.remove(showing_class);
        const nextSlide = currentSlide.nextElementSibling;
  
        if (nextSlide){
          console.log(currentSlide);
          nextSlide.classList.add(showing_class);
        } else {
          firstSlide.classList.add(showing_class);
        }

      } else { 

        firstSlide.classList.add(showing_class); 

      }

    }

    slide();

    setInterval(slide, 3000); // 1000은 1초 

    function openCity(evt, cityName) {
  
  var i, tabcontent, tablinks;


  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCity2(evt, cityName) {

  var i, tabcontent2, tablinks2;

  
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }


  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}




