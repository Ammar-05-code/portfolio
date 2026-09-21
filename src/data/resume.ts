export interface ResumeData {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  location: string;
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    role: string;
    company: string;
    location: string;
    period: string;
    highlights: string[];
  }[];
  projects: {
    title: string;
    subtitle: string;
    period: string;
    highlights: string[];
  }[];
  education: {
    institution: string;
    location: string;
    period: string;
    degree: string;
    score: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    date: string;
  }[];
  languages: string[];
  achievements: string[];
}

export const resumeData: ResumeData = {
  name: "Mohammed Ammar F",
  title: "Data Analyst",
  phone: "+91 9043091945",
  email: "ammar786543@gmail.com",
  linkedin: "linkedin.com/in/ammar56",
  linkedinUrl: "https://linkedin.com/in/ammar56",
  github: "github.com/Ammar-05-code",
  githubUrl: "https://github.com/Ammar-05-code",
  location: "Chennai, Tamil Nadu, India",
  summary:
    "Driven Data Analyst with hands-on experience in SQL, Python, and Power BI, turning complex data into actionable business insights. Skilled in data visualization, statistical modeling, predictive analytics, and dashboard development, with a track record of improving efficiency and supporting data-driven decision-making. Strong communicator adept at stakeholder collaboration, KPI tracking, and report automation.",
  skills: [
    {
      category: "Core Technical",
      items: ["Python", "SQL", "PostgreSQL", "PowerBI", "Excel", "Git and GitHub", "Scikit-learn", "TensorFlow"],
    },
    {
      category: "Data Lifecycle & Analytics",
      items: [
        "Data Extraction",
        "Data Transformation",
        "Data Loading",
        "Data Cleaning",
        "Data Manipulation",
        "Data Visualization",
        "Database Management",
        "Historical Data Handling",
        "Exploratory Data Analysis (EDA)",
      ],
    },
    {
      category: "Professional & Methodologies",
      items: [
        "Critical Thinking",
        "Problem Solving",
        "Decision Making",
        "Time Management",
        "Team Collaboration",
        "KPI Tracking",
        "Report Automation",
      ],
    },
  ],
  experience: [
    {
      role: "Data Analytics Trainee",
      company: "MedTourEasy",
      location: "Gurugram, Haryana",
      period: "February 2025 – March 2025",
      highlights: [
        "Executed data preprocessing, cleansing, transformation, and EDA on COVID-19 datasets using Python.",
        "Designed and implemented interactive dashboards and data visualizations to communicate key analytical insights.",
        "Performed trend and comparative analysis of COVID-19 cases, testing metrics, demographics, and regional patterns to generate actionable insights.",
      ],
    },
    {
      role: "Data Science Intern",
      company: "Vebbox Software Solutions",
      location: "Kumbakonam, Tamil Nadu",
      period: "July 2025 – August 2025",
      highlights: [
        "Performed data preprocessing, cleaning, filtering, and manipulation on real-world datasets using Python.",
        "Developed a web-based application for dataset ingestion and automated data analysis using Python.",
        "Implemented and evaluated machine learning algorithms using Scikit-learn, assessing model performance through accuracy, precision, recall, and F1-score.",
      ],
    },
  ],
  projects: [
    {
      title: "Autism Detection",
      subtitle: "A Machine Learning Project",
      period: "August 2025",
      highlights: [
        "Developed a web application using HTML for user authentication and dataset uploading.",
        "Implemented and compared supervised learning algorithms including Linear Regression, Logistic Regression, Decision Tree, Random Forest, and SVM using scikit-learn and TensorFlow, integrating the models with the backend.",
        "Evaluated model performance using accuracy, precision, recall, and F1-score to identify the most effective model for autism detection, using a publicly available Kaggle dataset.",
      ],
    },
    {
      title: "Customer Shopping Analysis",
      subtitle: "A Data Analytics Project",
      period: "July 2026",
      highlights: [
        "Sourced a dataset and performed data cleaning and preprocessing using Python to ensure data quality and consistency.",
        "Utilized PostgreSQL for data manipulation, filtering, aggregation, and analysis to identify customer shopping trends and behavioral patterns.",
        "Developed an interactive Power BI dashboard to visualize key insights and support data-driven decision-making.",
      ],
    },
  ],
  education: [
    {
      institution: "Mohamed Sathak AJ College Of Engineering",
      location: "Chennai, Tamil Nadu",
      period: "2023 – 2027",
      degree: "B.Tech, Artificial Intelligence and Data Science",
      score: "CGPA: 7.9",
    },
    {
      institution: "Tansri Ubaidullah Matriculation Higher Secondary School (HSC)",
      location: "Thanjavur, Tamil Nadu",
      period: "2022 – 2023",
      degree: "Computer Science, Physics, Chemistry, Mathematics",
      score: "84%",
    },
  ],
  certifications: [
    {
      title: "Google Data Analytics",
      issuer: "Coursera",
      date: "February 27, 2025",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "TCS ION",
      date: "May 22, 2026",
    },
    {
      title: "Introduction to Python",
      issuer: "IBM",
      date: "March 14, 2024",
    },
    {
      title: "Spoken Tutorial Certifications",
      issuer: "IIT Bombay Spoken Tutorial",
      date: "70%+ Assessment Scores",
    },
  ],
  languages: ["English", "Tamil"],
  achievements: [
    "Participated in IIT Madras Shaastra Techathon 2024.",
    "Secured multiple first prizes in essay writing competitions, demonstrating strong written communication.",
    "Earned multiple Spoken Tutorial certifications with 70%+ assessment scores.",
  ],
};
