(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  function getObjectById(id, list) {
    return list.find(item => item.id === id);
  }
  const formatFilter = (filterString) => {
    return filterString
      .join(",")
      .split(",") // Split by comma
      .map(f => f.replace("filter-", "")) // Remove "filter-" and capitalize
      .join(", "); // Join back into a string
  };

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project-id');

  const project = getObjectById(projectId, projects);

  const swiper = document.querySelector('.swiper-wrapper');
  project.carousel.forEach((item, index) => {
    swiper.innerHTML += `
      <div class="swiper-slide">
        <a href="#" onclick="openPopup('${item}')">
          <img src="${item}" alt="">
        </a>
      </div>
    `;
  })
  
  document.getElementById('title').innerHTML += `<span class="title">${project.title}</span>`;
  document.getElementById('category').innerHTML += `${formatFilter(project.filter)}`;
  if (project.github!==""){
    document.getElementById('url').innerHTML += `<a href="${project.github}" target="_blank" rel="noopener noreferrer">Link</a>`;
  }
  else{
    document.getElementById('url').innerHTML += `Private project`;
  }
  document.getElementById('key').innerHTML += `${project.key}`;
  document.getElementById('description').innerHTML += `${project.desc}`;
  
  window.openPopup = function (imageSrc) {
    // Create a pop-up container
    const popup = document.createElement("div");
    popup.classList.add("popup-container");
  
    // Create the image element for the pop-up
    const popupImage = document.createElement("img");
    popupImage.src = imageSrc;
    popupImage.classList.add("popup-image");
  
    // Add the image to the pop-up container
    popup.appendChild(popupImage);
  
    // Add a close button
    const closeButton = document.createElement("button");
    closeButton.innerText = "×";
    closeButton.classList.add("popup-close-button");
  
    // Close the pop-up when the button is clicked
    closeButton.onclick = function () {
      popup.classList.add("exit"); // Add exit animation
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 200); // Wait for the animation to finish (0.3s)
    };
  
    popup.appendChild(closeButton);
  
    // Close the pop-up when clicking outside the image
    popup.onclick = function (event) {
      if (event.target === popup) {
        popup.classList.add("exit"); // Add exit animation
        setTimeout(() => {
          document.body.removeChild(popup);
        }, 200); // Wait for the animation to finish (0.3s)
      }
    };
  
    // Add the pop-up to the body
    document.body.appendChild(popup);
  };
})();