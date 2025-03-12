/**
* Template Name: iPortfolio
* Updated: Nov 17 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

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
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
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
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }
  /**
   * Define projects
   */
  const projects = [
    {
      title: 'Image Retrieval System',
      img: 'assets/img/projects/AI/HCMAI.png',
      desc: "A system that can retrieve images from a database based on the user's input image",
      key: "CLIP, FAISS, Flask, NLP, Computer Vision, Object detection, ASR, Python",
      github: "https://github.com/LeHoang510/Image-Retrieval-System",
      filter: ["filter-ai"]
    },
    {
      title: 'End-to-End Machine Learning Pipeline',
      img: 'assets/img/projects/AI/MLOPSVN.png',
      desc: "A pipeline for the data processing, model training, model deployment of machine learning systems",
      key: "Feast, MLflow, Bentoml, Docker, Python, Machine Learning, Airflow, Gitlab CI/CD, AWS, Sklearn",
      github: "https://github.com/LeHoang510/MLOPSVN",
      filter: ["filter-ai"]
    },
    {
      title: 'xAI for GAN',
      img: 'assets/img/projects/AI/XAIGAN.jpg',
      desc: "Explainable AI for Generative Adversarial Networks",
      key: "GAN, XAI, Python, Computer Vision, Pytorch",
      github: "https://github.com/LeHoang510/XAI-for-GAN",
      filter: ["filter-ai"]
    },
    {
      title: 'Sleep detection',
      img: 'assets/img/projects/AI/SleepDetection.png',
      desc: "Sleep detection",
      key: "Time series, Sklearn, Pandas, Polars, Numpy, Matplotlib, Seaborn",
      github: "https://github.com/LeHoang510/Sleep-detection",
      filter: ["filter-ai"]
    },
    {
      title: 'Image Retrieval System',
      img: 'assets/img/projects/AI/HCMAI.png',
      desc: "A system that can retrieve images from a database based on the user's input image",
      key: "CLIP, FAISS, Flask, NLP, Computer Vision, Object detection, ASR, Python",
      github: "https://github.com/LeHoang510/Image-Retrieval-System",
      filter: ["filter-ai"]
    },
    {
      title: 'End-to-End Machine Learning Pipeline',
      img: 'assets/img/projects/AI/MLOPSVN.png',
      desc: "A pipeline for the data processing, model training, model deployment of machine learning systems",
      key: "Feast, MLflow, Bentoml, Docker, Python, Machine Learning, Airflow, Gitlab CI/CD, AWS, Sklearn",
      github: "https://github.com/LeHoang510/MLOPSVN",
      filter: ["filter-ai"]
    },
    {
      title: 'xAI for GAN',
      img: 'assets/img/projects/AI/XAIGAN.jpg',
      desc: "Explainable AI for Generative Adversarial Networks",
      key: "GAN, XAI, Python, Computer Vision, Pytorch",
      github: "https://github.com/LeHoang510/XAI-for-GAN",
      filter: ["filter-ai"]
    },
    {
      title: 'Sleep detection',
      img: 'assets/img/projects/AI/SleepDetection.png',
      desc: "Sleep detection",
      key: "Time series, Sklearn, Pandas, Polars, Numpy, Matplotlib, Seaborn",
      github: "https://github.com/LeHoang510/Sleep-detection",
      filter: ["filter-ai"]
    },
    {
      title: 'Image Retrieval System',
      img: 'assets/img/projects/AI/HCMAI.png',
      desc: "A system that can retrieve images from a database based on the user's input image",
      key: "CLIP, FAISS, Flask, NLP, Computer Vision, Object detection, ASR, Python",
      github: "https://github.com/LeHoang510/Image-Retrieval-System",
      filter: ["filter-ai"]
    },
    {
      title: 'End-to-End Machine Learning Pipeline',
      img: 'assets/img/projects/AI/MLOPSVN.png',
      desc: "A pipeline for the data processing, model training, model deployment of machine learning systems",
      key: "Feast, MLflow, Bentoml, Docker, Python, Machine Learning, Airflow, Gitlab CI/CD, AWS, Sklearn",
      github: "https://github.com/LeHoang510/MLOPSVN",
      filter: ["filter-ai"]
    },
    {
      title: 'xAI for GAN',
      img: 'assets/img/projects/AI/XAIGAN.jpg',
      desc: "Explainable AI for Generative Adversarial Networks",
      key: "GAN, XAI, Python, Computer Vision, Pytorch",
      github: "https://github.com/LeHoang510/XAI-for-GAN",
      filter: ["filter-ai"]
    },
    {
      title: 'Sleep detection',
      img: 'assets/img/projects/AI/SleepDetection.png',
      desc: "Sleep detection",
      key: "Time series, Sklearn, Pandas, Polars, Numpy, Matplotlib, Seaborn",
      github: "https://github.com/LeHoang510/Sleep-detection",
      filter: ["filter-ai", "filter-web"]
    },
    {
      title: 'Sudoku',
      img: 'assets/img/projects/Web/Sudoku.png',
      desc: "Basic sudoku game",
      key: "Angular, Spring boot, HTML, CSS, Bootstrap, Javascript, Typescript, Java, Design Pattern",
      github: "https://github.com/LeHoang510/Sudoku",
      filter: ["filter-software"]
    },
    {
      title: 'Sample App',
      img: 'assets/img/projects/Web/Sample-app.png',
      desc: "Basic social website",
      key: "Ruby, Rails, HTML, CSS, Bootstrap, Javascript, MVC Architecture, SQL",
      github: "https://github.com/LeHoang510/sample-app",
      filter: ["filter-web", "filter-ai"]
    }
  ]

  const portfolioContainer = document.querySelector('.portfolio-container');
  const filters = document.querySelectorAll('#portfolio-flters li');
  let currentFilter = '*';
  let currentPage = 1;
  const itemsPerPage = 8; // Number of items per page
  
  // Function to render projects based on filter and page
  function renderProjects(filter, page) {
    let filteredProjects = [];
  
    if (filter === '*') {
      // Show all projects if no filter is selected
      filteredProjects = projects;
    } else {
      // Filter projects that include the selected filter in their `filter` array
      filteredProjects = projects.filter(project => project.filter.includes(filter));
    }
  
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProjects = filteredProjects.slice(start, end);
  
    // Get current items
    const currentItems = portfolioContainer.querySelectorAll('.portfolio-item');
  
    // Animate out current items
    currentItems.forEach(item => {
      item.classList.add('animate-out');
    });
  
    // Wait for the transition to complete before removing the items
    setTimeout(() => {
      // Clear the container
      portfolioContainer.innerHTML = '';
  
      // Add new items with animate-in class
      paginatedProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = `col-lg-3 col-md-6 col-sm-12 portfolio-item animate-in ${project.filter}`;
        projectItem.innerHTML = `
          <a href="portfolio-details.html" class="portfolio-link"> 
            <div class="portfolio-wrap">
              <img src="${project.img}" class="portfolio-img" alt="">     
              <img src="assets/img/icon/eye.png" class="icon-overlay" alt="">
            </div>
          </a>
          <div class="portfolio-description">
            <h6><strong>${project.title}</strong></h6>
          </div>
        `;
        portfolioContainer.appendChild(projectItem);
      });
  
      // Trigger the animate-in transition
      setTimeout(() => {
        const newItems = portfolioContainer.querySelectorAll('.portfolio-item');
        newItems.forEach(item => {
          item.classList.add('active');
        });
      }, 50); // Small delay to ensure the DOM has updated
  
      // Update pagination
      updatePagination(filteredProjects.length, page);
    }, 500); // Match this delay with the CSS transition duration
  }
  
  // Function to update pagination
  function updatePagination(totalItems, currentPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';
  
    if (totalPages > 1) {
      for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
        pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageItem.addEventListener('click', (e) => {
          e.preventDefault();
          renderProjects(currentFilter, i);
        });
        paginationContainer.appendChild(pageItem);
      }
    }
  }
  
  // Event listeners for filters
  filters.forEach(filter => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      filters.forEach(f => f.classList.remove('filter-active'));
      filter.classList.add('filter-active');
      currentFilter = filter.getAttribute('data-filter');
      currentPage = 1;
      renderProjects(currentFilter, currentPage);
    });
  });
  
  // Initial render
  renderProjects(currentFilter, currentPage);

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

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()