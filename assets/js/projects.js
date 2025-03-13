// projects-data.js
const projects = [
    {
      id: "image-retrieval-system",
      title: 'Image Retrieval System',
      img: 'assets/img/projects/image-retrieval-system/retrieval-pipeline.png',
      breadcrumb: [
        "assets/img/projects/image-retrieval-system/feature-extraction.png", 
        "assets/img/projects/image-retrieval-system/retrieval-pipeline.png",
        "assets/img/projects/image-retrieval-system/asr-pipeline.png"
      ],
      desc: "This paper presents a comprehensive system for Video Text Retrieval (VTR) that leverages cutting-edge technologies from computer vision, natural language processing, and machine learning. Our system aims to streamline the extraction, indexing, and retrieval of information from videos, enabling users to access and interpret multimedia content with unprecedented ease and precision.",
      key: "CLIP, FAISS, Flask, NLP, Computer Vision, Object detection, ASR, Python",
      github: "https://github.com/LeHoang510/Image-Retrieval-System",
      filter: ["filter-ai", "filter-software", "filter-web"]
    },
    {
      id: "end-to-end-machine-learning-pipeline",
      title: 'End-to-End Machine Learning Pipeline',
      img: 'assets/img/projects/end-to-end-machine-learning-pipeline/pipeline.png',
      breadcrumb: [
        "assets/img/projects/end-to-end-machine-learning-pipeline/pipeline.png",
        "assets/img/projects/end-to-end-machine-learning-pipeline/airflow_ui.png", 
        "assets/img/projects/end-to-end-machine-learning-pipeline/feast_ui.png",
      ],
      desc: "Designed and implemented a comprehensive end-to-end machine learning system by architecting and managing multiple pipelines, including:\n<ul><li>Data Pipeline: Automated data ingestion, preprocessing, and feature engineering to ensure high-quality input for model training.</li><li>Training Pipeline: Streamlined model development, hyperparameter tuning, and evaluation to optimize performance.</li><li>Serving Pipeline: Deployed scalable and efficient model serving solutions for real-time inference.</li></ul>This project enabled efficient data-to-decision workflows, reducing development cycles and improving model reliability in production environments.",
      key: "Feast, MLflow, Bentoml, Docker, Python, Machine Learning, Airflow, Gitlab CI/CD, AWS, Sklearn",
      github: "https://github.com/LeHoang510/MLOPSVN",
      filter: ["filter-ai", "filter-software"]
    },
    {
      id: "xai-for-gan",
      title: 'Explainable AI for Generative Adversarial Networks (GANs)',
      img: 'assets/img/projects/xai-for-gan/GAN model.png',
      breadcrumb: [
        "assets/img/projects/xai-for-gan/GAN model.png", 
        "assets/img/projects/xai-for-gan/Training loss.png",
        "assets/img/projects/xai-for-gan/Result.png"

      ],
      desc: "This project focuses on analyzing the internal mechanisms and decision-making processes of a Convolutional Generative Adversarial Network (GAN) trained on a dataset of IMDb movie posters. The GAN is designed to generate new images from random noise, mimicking the style and content of the training dataset. Once the model achieves satisfactory performance, we conduct an in-depth analysis of both the discriminator and the generator to uncover their inner workings.",
      key: "GAN, XAI, Python, Computer Vision, Pytorch",
      github: "https://github.com/LeHoang510/XAI-for-GAN",
      filter: ["filter-ai"]
    },
    {
      id: "sleep-detection",
      title: 'Sleep detection',
      img: 'assets/img/projects/sleep-detection/prediction.png',
      breadcrumb: [
        "assets/img/projects/sleep-detection/missing.png", 
        "assets/img/projects/sleep-detection/density.png",
        "assets/img/projects/sleep-detection/lightgbm.png",
        "assets/img/projects/sleep-detection/confusion-matrix.png",
        "assets/img/projects/sleep-detection/prediction.png",
      ],
      desc: "This project is part of the Child Mind Institute - Detect Sleep States competition on Kaggle. The goal is to develop a machine learning model that accurately detects sleep states (e.g., asleep or awake) using accelerometer data from wearable devices. ",
      key: "Time series, Sklearn, Pandas, Polars, Numpy, Matplotlib, Seaborn",
      github: "https://github.com/LeHoang510/Sleep-detection",
      filter: ["filter-ai"]
    },
    {
      id: "sudoku",
      title: 'Sudoku',
      img: 'assets/img/projects/Sudoku.png',
      breadcrumb: ["assets/img/projects/Sudoku.png", "assets/img/projects/Sudoku.png"],
      desc: "Basic sudoku game",
      key: "Angular, Spring boot, HTML, CSS, Bootstrap, Javascript, Typescript, Java, Design Pattern",
      github: "https://github.com/LeHoang510/Sudoku",
      filter: ["filter-software", "filter-web"]
    },
    {
      id: "sample-app",
      title: 'Sample App',
      img: 'assets/img/projects/SampleApp.png',
      breadcrumb: ["assets/img/projects/SampleApp.png"],
      desc: "Basic social website",
      key: "Ruby, Rails, HTML, CSS, Bootstrap, Javascript, MVC Architecture, SQL",
      github: "https://github.com/LeHoang510/sample-app",
      filter: ["filter-web"]
    }
  ];