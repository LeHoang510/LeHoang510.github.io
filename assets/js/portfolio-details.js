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
  project.breadcrumb.forEach((item, index) => {
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
  
  window.openPopup = function(imageSrc) {
    // Create a pop-up container
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popup.style.display = 'flex';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.zIndex = '100000';

    // Create the image element for the pop-up
    const popupImage = document.createElement('img');
    popupImage.src = imageSrc;
    popupImage.style.maxWidth = '90%';
    popupImage.style.maxHeight = '90%';
    popupImage.style.borderRadius = '8px';

    // Add the image to the pop-up container
    popup.appendChild(popupImage);

    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.innerText = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';

    // Close the pop-up when the button is clicked
    closeButton.onclick = function () {
      document.body.removeChild(popup);
    };

    popup.appendChild(closeButton);

    // Close the pop-up when clicking outside the image
    popup.onclick = function (event) {
      if (event.target === popup) {
        document.body.removeChild(popup);
      }
    };

    // Add the pop-up to the body
    document.body.appendChild(popup);
  }

})();