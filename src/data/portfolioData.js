// Portfolio Data Configuration - Keshav Sarda

export const personalInfo = {
  name: "Keshav Sarda",
  title: "Data Enthusiast | B.Tech CSE (AI-ML)",
  tagline: "Transforming Data into Insights",
  email: "dakeshav000@gmail.com",
  phone: "+919707535127", // Add your phone number
  location: "Jaipur, Rajasthan, India",
  
  // Social Media Links
  social: {
    linkedin: "https://www.linkedin.com/in/keshav-sardaofficial/",
    github: "https://github.com/dakeshav2028",
    kaggle: "https://www.kaggle.com/keshavsarda123",
    twitter: "", // Add if you have Twitter
    medium: "", // Add if you have Medium
    portfolio: ""
  },
  
  // Resume PDF file name (place in src/assets/pdfs/)
  resumeFile: "KESHAV_SARDA_resume.pdf",
  
  // Profile image file name (place in src/assets/images/)
  profileImage: "k1086.jpg",
  
  // Brief bio for About section
  bio: `I'm passionate about Data Analytics, Visualization, and Machine Learning. 
        Currently pursuing B.Tech CSE (AI-ML) 3rd Year at JECRC University, 
        I love transforming complex datasets into actionable business insights.`,
  
  // Detailed description
  description: `As a dedicated data enthusiast, I specialize in data analytics, machine learning, 
                and business intelligence. My expertise includes Python, SQL, Power BI, and various 
                ML frameworks. I have hands-on experience in predictive modeling, data visualization, 
                and statistical analysis across multiple domains including real estate, e-commerce, 
                and academic predictions.`
};

export const skills = {
  "Data Analysis": {
    level: 85,
    tools: ["Python", "SQL", "Excel", "Pandas", "NumPy"]
  },
  "Machine Learning": {
    level: 80,
    tools: ["Scikit-learn", "Regression Models", "Classification", "Predictive Analytics"]
  },
  "Data Visualization": {
    level: 90,
    tools: ["Power BI", "Plotly", "Matplotlib", "Seaborn", "Excel Charts"]
  },
  "Programming": {
    level: 85,
    tools: ["Python", "SQL", "Git", "Jupyter Notebooks", "Google Colab"]
  },
  "Business Intelligence": {
    level: 80,
    tools: ["Power BI", "Dashboard Creation", "KPI Analysis", "Reporting"]
  },
  "Database Management": {
    level: 75,
    tools: ["SQL", "Data Cleaning", "Data Preprocessing", "ETL Processes"]
  }
};

export const experience = [
  {
    id: 1,
    company: "CodVeda Technologies",
    position: "Data Science Intern",
    duration: "2024",
    location: "Remote",
    description: [
      "Worked on real-world data science projects and machine learning implementations",
      "Gained hands-on experience in data preprocessing and model development",
      "Collaborated with team members on various analytics projects"
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis", "Pandas", "NumPy"],
    verifyUrl: "https://drive.google.com/file/d/1fmTIZ2FxpxypG0AtGZxerlFIB4N8ybUt/view?usp=drive_link"
  },
  {
    id: 2,
    company: "Samatrix.io",
    position: "Data Analyst Intern",
    duration: "2024",
    location: "Remote",
    description: [
      "Completed comprehensive data analysis training and certification",
      "Worked on data visualization and reporting projects",
      "Applied statistical methods for business insights"
    ],
    technologies: ["Python", "Data Analysis", "Statistics", "Visualization", "Excel"],
    verifyUrl: "https://drive.google.com/file/d/1XiW0iFv_M17tPZRKXvR8IJOnJQ92G1m3/view?usp=drive_link"
  },
  {
    id: 3,
    company: "NullClass",
    position: "Data Science Intern",
    duration: "2024",
    location: "Remote",
    description: [
      "Participated in data science bootcamp and practical projects",
      "Developed skills in machine learning algorithms and data processing",
      "Created data-driven solutions for business problems"
    ],
    technologies: ["Python", "Machine Learning", "Data Science", "Analytics"],
    verifyUrl:"https://www.nullclass.com/certificates/67a0683c6055f48cf895b518"
  }
];

export const projects = [
  {
    id: 1,
    title: "Predicting House Price Of USA",
    description: "Predicted house prices of USA using various ML models with comprehensive data analysis and feature engineering.",
    image: "HPPUML.png", // Place in src/assets/images/
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    category: "Machine Learning",
    demoUrl: "",
    githubUrl: "https://github.com/dakeshav2028/Predicting-House-Price-Of-USA.git",
    caseStudyUrl: "https://www.linkedin.com/posts/keshav-sardaofficial_datascience-machinelearning-python-activity-7357710707989131264-4n2T",
    featured: true
  },
  {
    id: 2,
    title: "Sales Data Analysis for Pizza Chain",
    description: "Analyzed sales trends, customer segmentation, and profit margins using SQL for comprehensive business insights.",
    image: "psaus.png",
    technologies: ["SQL", "Data Analysis", "Business Intelligence", "Database Management"],
    category: "Data Analysis",
    demoUrl: "",
    githubUrl: "https://github.com/dakeshav2028/pizza-sales-analysis-using-sql.git",
    caseStudyUrl: "",
    featured: true
  },
  {
    id: 6,
    title: "Data Professional Survey Breakdown",
    description: "Comprehensive Power BI dashboard breaking down survey data from data professionals across different domains.",
    image: "dpsdash.png",
    technologies: ["Power BI", "Survey Analysis", "Data Visualization", "Statistical Analysis"],
    category: "Business Intelligence",
    demoUrl: "",
    githubUrl: "https://github.com/dakeshav2028/Data_Professional_Survey.git",
    caseStudyUrl: "https://www.linkedin.com/posts/keshav-sardaofficial_turningabrdataabrintoabrinsights-dataabrprofessionalabrsurveyabrbreakdown-activity-7380611908489474048-EODv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER9uc4B7yd9IoNsokiJHNOWQx2ibt3TM7E",
    featured: false
  },
  {
    id: 4,
    title: "Predicting Graduate School Admissions",
    description: "Predicted Graduate School Admissions using various ML models to help students understand admission probability.",
    image: "gsap.jpg",
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"],
    category: "Machine Learning",
    demoUrl: "",
    githubUrl: "https://github.com/dakeshav2028/Predicting-Graduate-School-Admissions.git",
    caseStudyUrl: "https://www.linkedin.com/posts/keshav-sardaofficial_kaggle-machinelearning-datascience-activity-7352415913716965376-QGPD",
    featured: false
  },
  {
    id: 5,
    title: "Amazon Prime Video Data Analysis Dashboard",
    description: "Interactive Power BI dashboard analyzing Amazon Prime Video content trends and user preferences.",
    image: "apvdadash.png",
    technologies: ["Power BI", "Data Visualization", "Business Intelligence", "Dashboard Design"],
    category: "Business Intelligence",
    demoUrl: "",
    githubUrl: "https://github.com/dakeshav2028/Amazon-Prime-Video-Data-Analysis.git",
    caseStudyUrl: "https://www.linkedin.com/posts/keshav-sardaofficial_powerbiabrdashboardabrproject-amazonabrprimeabrvideoabrcontent-activity-7378977046611263488--sa7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER9uc4B7yd9IoNsokiJHNOWQx2ibt3TM7E",
    featured: false
  },
  
  {
    id: 3,
    title: "Google Play Store Review Analytics",
    description: "Created comprehensive data visualization using Google Play Store review datasets to extract meaningful insights.",
    image: "gpsra.png",
    technologies: ["Python", "Data Visualization", "Pandas", "Matplotlib"],
    category: "Data Visualization",
    demoUrl: "",
    githubUrl: "https://github.com/dakeshav2028/Keshav_google-play-store-review-analytics.git",
    caseStudyUrl: "https://www.linkedin.com/posts/keshav-sardaofficial_dataanalytics-python-googleplaystore-activity-7291171445638893568-Zn7F",
    featured: true
  }
];

export const certifications = [
  {
    id: 1,
    title: "Tata - Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata Group (via Forage)",
    date: "2024",
    credentialId: "WSHeaWFR25fPK2ywp_1751211372883",
    image: "tata.png", // Place in src/assets/images/
    pdfFile: "tata.pdf", // Place in src/assets/pdfs/
    verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_WSHeaWFR25fPK2ywp_1751211372883_completion_certificate.pdf"
  },
  {
    id: 2,
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Deloitte Australia (via Forage)",
    date: "2024",
    credentialId: "WSHeaWFR25fPK2ywp_1739816223784",
    image: "deloite.png",
    pdfFile: "deloite.pdf",
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_WSHeaWFR25fPK2ywp_1739816223784_completion_certificate.pdf"
  },
  {
    id: 3,
    title: "Data Analysis Using Python",
    issuer: "Samatrix.io",
    date: "2024",
    credentialId: "roy8pgLIPV",
    image: "samatrix.png",
    pdfFile: "samatrix.pdf",
    verifyUrl: "https://verify.netcredential.com/roy8pgLIPV"
  },
  {
    id: 4,
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "2024",
    credentialId: "9e897c730e8e",
    image: "hack.png",
    pdfFile: "hack.pdf",
    verifyUrl: "https://www.hackerrank.com/certificates/iframe/9e897c730e8e"
  },
  {
    id: 5,
    title: "NASA Space Apps Challenge Global Nominee(Team - ExoSkyFive",
    issuer: "NASA",
    date: "2024",
    credentialId: "Global Nominee 2024",
    image: "nasa.png",
    pdfFile: "NASA Space Apps Challenge.pdf",
    verifyUrl:"https://www.spaceappschallenge.org/nasa-space-apps-2024/awards/global-nominees"
  }
];

export const education = [
  {
    id: 1,
    degree: "B.Tech Computer Science Engineering (AI-ML)",
    school: "JECRC University",
    duration: "2023 - 2027 (3rd Year)",
    location: "Jaipur, Rajasthan, India",
    cgpa: "8.76",
    coursework: ["Machine Learning", "Artificial Intelligence", "Data Structures", "Database Management", "Statistics", "Python Programming"]
  }
];

export const achievements = [
  {
    id: 1,
    title: "NASA Space Apps Challenge Global Nominee",
    description: "Selected as Global Nominee in NASA International Space Apps Challenge 2024",
    date: "2024"
  },
  {
    id: 2,
    title: "Multiple Data Science Internships",
    description: "Successfully completed internships at CodVeda Technologies, Samatrix.io, and NullClass",
    date: "2024"
  },
  {
    id: 3,
    title: "Professional Certifications",
    description: "Earned multiple industry-recognized certifications in Data Analysis and Visualization",
    date: "2024"
  }
];

// Theme configuration
export const theme = {
  colors: {
    primary: "#0EF6CC",
    secondary: "#6A5ACD", 
    background: "#0A0F1F",
    card: "#222C3A",
    text: "#FAFAFA"
  },
  animations: {
    duration: {
      fast: 0.3,
      normal: 0.5,
      slow: 0.8
    }
  }
};
