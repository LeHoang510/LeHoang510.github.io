// projects-data.js
const projects = [
  {
    id: "capfilt",
    title: "CapFilt",
    img: "assets/img/projects/capfilt/Feature_Extraction_Pipeline.png",
    carousel: [
      "assets/img/projects/capfilt/Scene_Extraction_Pipeline.png",
      "assets/img/projects/capfilt/Feature_Extraction_Pipeline.png",
      "assets/img/projects/capfilt/Scene_Text_Recognition_Pipeline.png",
      "assets/img/projects/capfilt/Video_Captioning_Pipeline.png",
      "assets/img/projects/capfilt/SigLIP_Retrieval_with_textual_context_feature_enhancements.png",
      "assets/img/projects/capfilt/Retrieval_pipeline.png",
      "assets/img/projects/capfilt/Single_Query_Retrieval.png",
      "assets/img/projects/capfilt/query - banco.png",
      "assets/img/projects/capfilt/query - bongda.png",
      "assets/img/projects/capfilt/query - 3chiecxe.png",
      "assets/img/projects/capfilt/query - ssireum.png",
    ],
    desc: "CapFilt is a comprehensive system for video content analysis that leverages cutting-edge technologies from computer vision, natural language processing, and machine learning. The system aims to streamline the extraction, indexing, and retrieval of information from videos, enabling users to access and interpret multimedia content with unprecedented ease and precision.\nIn this paper, we present CapFilt, a system based on the above strategy with the following main contributions: <ul><li>(1) Proposing a data processing and feature extraction process that supplements contextual information through text for retrieval and filtering results;</li><li>(2) Proposing a query process that supports a variety of text and image methods, including both single and string queries;</li> <li>(3) Proposing to replace the core query model from CLIP to SigLIP to improve the ability to understand the semantic relationship between text and images;</li> <li> (4) Implementing all the proposed pipelines into a complete system with backend, frontend and database components, and experimenting on provided data and queries from the Ho Chi Minh AI Challenge 2024 </li></ul>",
    key: "Imagebind, SigLIP, OCR, Qdrant, Redis, Nanollava, FastAPI, NLP, Computer Vision, Object detection, ASR, Python",
    github: "",
    filter: ["filter-ai", "filter-software", "filter-web"]
  },
  {
    id: "vqa",
    title: "Visual Question Answering (VQA)",
    img: "assets/img/projects/vqa/The-Overall-VQA-Structure.png",
    carousel: [
      "assets/img/projects/vqa/The-Overall-VQA-Structure.png",
      "assets/img/projects/vqa/loss.png",
      "assets/img/projects/vqa/Figure_3.png",
    ],
    desc: "This project focuses on building Visual Question Answering (VQA) models capable of answering yes/no questions based on input images. The models are trained using the VQA COCO dataset and aim to improve understanding of image content through a combination of computer vision (CV) and natural language processing (NLP) techniques. <br> To ensure a comprehensive evaluation, three different models are implemented, and their results are compared. This approach helps analyze their effectiveness in understanding images and accurately answering binary questions, as well as evaluating the efficiency of different methodologies.",
    key: "VQA, Python, Computer Vision, NLP, Pytorch",
    github: "https://github.com/LeHoang510/VisualQuestionAnswering",
    filter: ["filter-ai"]
  },
  {
    id: "cv",
    title: "My CV",
    img: "assets/img/hero-bg.png",
    carousel: ["assets/img/hero-bg.png"],
    desc: "You are looking at it :D",
    key: "HTML, CSS, Javascript, Bootstrap",
    github: "https://github.com/LeHoang510/LeHoang510.github.io",
    filter: ["filter-web"]
  },
  {
    id: "pet-segmentation",
    title: "Pet Image Segmentation",
    img: "assets/img/projects/pet-segmentation/Figure_5.png",
    carousel: [
      "assets/img/projects/pet-segmentation/u-net-architecture.png",
      "assets/img/projects/pet-segmentation/training_result.png",
      "assets/img/projects/pet-segmentation/Figure_5.png",
      "assets/img/projects/pet-segmentation/Figure_9.png",
    ],
    desc: "This project focuses on building a U-Net model for image segmentation using the Oxford-IIIT Pet Dataset",
    key: "U-Net, Python, Computer Vision, Pytorch",
    github: "https://github.com/LeHoang510/U-net-Segmentation",
    filter: ["filter-ai"]
  },
  {
    id: "image-retrieval-system",
    title: "Image Retrieval System",
    img: "assets/img/projects/image-retrieval-system/retrieval-pipeline.png",
    carousel: [
      "assets/img/projects/image-retrieval-system/feature-extraction.png", 
      "assets/img/projects/image-retrieval-system/retrieval-pipeline.png",
      "assets/img/projects/image-retrieval-system/asr-pipeline.png"
    ],
    desc: "This paper presents a comprehensive system for Video Text Retrieval (VTR) that leverages cutting-edge technologies from computer vision, natural language processing, and machine learning. Our system aims to streamline the extraction, indexing, and retrieval of information from videos, enabling users to access and interpret multimedia content with unprecedented ease and precision.",
    key: "CLIP, FAISS, Flask, NLP, Computer Vision, Object detection, ASR, Python",
    github: "",
    filter: ["filter-ai", "filter-software", "filter-web"]
  },
  {
    id: "knowledge-distillation",
    title: "Knowledge Distillation for Weather Classification",
    img: "assets/img/projects/knowledge-distillation/kd_figure.png",
    carousel: [
      "assets/img/projects/knowledge-distillation/kd_figure.png", 
      "assets/img/projects/knowledge-distillation/loss.png",
      "assets/img/projects/knowledge-distillation/accuracy.png"
    ],
    desc: "This project implements knowledge distillation (KD) techniques to improve model training efficiency by transferring knowledge from a larger teacher model to a more compact student model. The implementation focuses on response-based knowledge distillation for weather classification across 11 weather types.",
    key: "ResNet, DenseNet, Pytorch, Pillow, Computer Vision",
    github: "https://github.com/LeHoang510/Knowledge-Distillation-Basic",
    filter: ["filter-ai"]
  },
  {
    id: "end-to-end-machine-learning-pipeline",
    title: "End-to-End Machine Learning Pipeline",
    img: "assets/img/projects/end-to-end-machine-learning-pipeline/pipeline.png",
    carousel: [
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
    title: "Explainable AI for Generative Adversarial Networks (GANs)",
    img: "assets/img/projects/xai-for-gan/GAN model.png",
    carousel: [
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
    id: "ihm",
    title: "Interactive Human-Machine testing",
    img: "assets/img/projects/ihm/login.png",
    carousel: ["assets/img/projects/ihm/login.png"],
    desc: "The project focus on enhancing the ergonomics of a website. Angular is employed as the primary frontend framework for development. The main goal of the project is on advancing the frontend, and as such, no backend is utilized. All data within the application is mock data. The project is designed to be a user-friendly and interactive platform for users to test the functionality of a human-machine interface.",
    key: "Angular, HTML, CSS, Bootstrap, Javascript, Typescript",
    github: "https://github.com/LeHoang510/ihm-testing",
    filter: ["filter-web"]
  },
  {
    id: "sleep-detection",
    title: "Sleep detection",
    img: "assets/img/projects/sleep-detection/prediction.png",
    carousel: [
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
    title: "Sudoku",
    img: "assets/img/projects/sudoku/error.png",
    carousel: [
      "assets/img/projects/sudoku/home.png", 
      "assets/img/projects/sudoku/board.png",
      "assets/img/projects/sudoku/error.png",
    ],
    desc: "This project involves the development of a web-based Sudoku game with advanced features such as undo/redo functionality and a robust DevOps pipeline for continuous integration and deployment. The game is built using Angular for the frontend and Spring Boot for the backend, providing a seamless and interactive user experience. The second phase of the project focuses on implementing DevOps practices to automate the build, testing, and deployment processes.",
    key: "Angular, Spring boot, HTML, CSS, Bootstrap, Javascript, Typescript, Java, Design Pattern",
    github: "https://github.com/LeHoang510/sudoku-devops",
    filter: ["filter-software", "filter-web"]
  },
  {
    id: "sample-app",
    title: "Sample App",
    img: "assets/img/projects/sample-app/SampleApp.png",
    carousel: ["assets/img/projects/sample-app/SampleApp.png"],
    desc: "This project is a basic social website built using Ruby on Rails, showcasing full-stack web development skills. It includes essential features such as user authentication, profile management, and post creation, providing a solid foundation for building more advanced social networking platforms. The project demonstrates clean, maintainable code and follows best practices in web development.",
    key: "Ruby, Rails, HTML, CSS, Bootstrap, Javascript, MVC Architecture, SQL",
    github: "https://github.com/LeHoang510/sample_app",
    filter: ["filter-web"]
  }
];
