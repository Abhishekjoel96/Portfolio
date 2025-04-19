import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Abhishek Tadepalli",
  title: "Hey, I'm Abhishek",
  subTitle: emoji(
    "An energetic and innovative Generative AI Engineer 🚀 specializing in agentic LLM frameworks, chatbots, and cloud deployments. Passionate about developing state-of-the-art AI solutions within a dynamic team setting."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UTJ-GC9Vibq82v_VAAYvCvI88DysqNg9/view?usp=drive_link",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Abhishekjoel96",
  linkedin: "https://www.linkedin.com/in/abhishek-tadepalli-56245ab3",
  gmail: "abhishekjoel58@gmail.com",
  display: true
};

const skillsSection = {
  title: "My Skills",
  subTitle: "PASSIONATE AI ENGINEER WHO ENJOYS CREATING INTELLIGENT SYSTEMS",
  skills: [
    emoji(
      "⚡ Implementing state-of-the-art language models like GPT-4 and Claude for diverse AI services"
    ),
    emoji("⚡ Developing robust chatbot solutions for customer engagement"),
    emoji(
      "⚡ Creating multi-agent AI infrastructures for complex decision-making workflows"
    )
  ],
  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "GITAM University",
      logo: require("./assets/images/gitam-university.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2018 - May 2020",
      desc: "Conducted research in Machine Learning and Deep Learning applications.",
      descBullets: [
        "Developed projects using Python, TensorFlow, and PyTorch",
        "Specialized in Neural Network design and implementation",
        "Completed courses in Advanced Algorithms, Data Mining, and AI"
      ]
    },
    {
      schoolName: "100x Engineers",
      logo: require("./assets/images/100x-engineers.png"),
      subHeader: "Advanced AI Engineering Program",
      duration: "January 2024 - Present",
      desc: "Intensive training focused on frontier LLM technologies and AI applications.",
      descBullets: [
        "Learned advanced LLM architectures and fine-tuning",
        "Studied retrieval-augmented generation systems",
        "Implemented production-grade multi-agent frameworks"
      ]
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Generative AI Engineer",
      company: "AiTrails",
      companylogo: require("./assets/images/experience-logo-1.png"),
      date: "Jan 2023 – Present",
      desc: "Leading AI agent development for enterprise solutions",
      descBullets: [
        "Built a Python-based agentic framework using GPT-4 API",
        "Implemented customer service bots for global clients",
        "Optimized token usage and response quality for cost efficiency"
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "DataSoft",
      companylogo: require("./assets/images/experience-logo-2.png"),
      date: "June 2021 – Dec 2022",
      desc: "Focused on model development and deployment for natural language processing",
      descBullets: [
        "Engineered text classification systems using transformer models",
        "Deployed NLP pipelines in production cloud environments",
        "Achieved 30% improvement in sentiment analysis accuracy"
      ]
    },
    {
      role: "Software Developer",
      company: "TechInnovate",
      companylogo: require("./assets/images/experience-logo-3.png"),
      date: "July 2020 – May 2021",
      desc: "Full-stack development for web applications",
      descBullets: [
        "Created responsive user interfaces using React.js",
        "Implemented RESTful APIs using Node.js and Express",
        "Integrated with database systems including MongoDB and MySQL"
      ]
    },
    {
      role: "Research Intern",
      company: "AI Research Labs",
      companylogo: require("./assets/images/experience-logo-4.png"),
      date: "Jan 2020 – June 2020",
      desc: "Worked on research in computer vision applications",
      descBullets: [
        "Trained object detection models using PyTorch",
        "Implemented real-time video processing algorithms",
        "Created research papers on efficient model training techniques"
      ]
    }
  ]
};

const startupProjects = {
  title: "Recent Projects",
  subtitle: "Innovative AI applications I've developed to solve real-world problems",
  projects: [
    {
      image: require("./assets/images/ai-whatsapp-fashion-assistant.png"),
      projectName: "AI WhatsApp Fashion Assistant",
      projectDesc: "Advanced LLM-powered WhatsApp bot for a fashion retailer that provides personalized outfit recommendations, handles inventory inquiries, and processes orders",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/Abhishekjoel96/ai-whatsapp-bot"
        }
      ]
    },
    {
      image: require("./assets/images/ai-teaching-assistant.png"),
      projectName: "AI Teaching Assistant",
      projectDesc: "Educational agent that helps students with programming challenges by providing contextual code examples, debugging assistance, and personalized learning paths",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/Abhishekjoel96/ai-teaching-assistant"
        }
      ]
    },
    {
      image: require("./assets/images/ai-crm-communications.png"),
      projectName: "AI-Enhanced CRM Communications",
      projectDesc: "Integrated system for analyzing customer interactions, generating personalized responses, and automating follow-ups across email and chat platforms",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/Abhishekjoel96/ai-crm-system"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications & Participations 🏆 "),
  subtitle:
    "Courses, certifications, and AI challenges I've completed to enhance my skills",
  achievementsCards: [
    {
      title: "Deep Learning Specialization",
      subtitle:
        "Completed the comprehensive deep learning curriculum by Andrew Ng on Coursera",
      image: require("./assets/images/certification-1.png"),
      imageAlt: "Deep Learning Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/"
        }
      ]
    },
    {
      title: "AWS Machine Learning Specialty",
      subtitle:
        "Achieved AWS certification for implementing machine learning solutions on cloud infrastructure",
      image: require("./assets/images/certification-2.png"),
      imageAlt: "AWS ML Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.aws.training/"
        }
      ]
    },
    {
      title: "LangChain & Vector Databases in Production",
      subtitle:
        "Completed advanced course on implementing LLMs with vector databases for production applications",
      image: require("./assets/images/certification-3.png"),
      imageAlt: "LangChain Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.deeplearning.ai/"
        }
      ]
    },
    {
      title: "GPT-4 Prompt Engineering",
      subtitle:
        "Mastered advanced prompt engineering techniques for extracting optimal performance from LLMs",
      image: require("./assets/images/certification-4.png"),
      imageAlt: "Prompt Engineering Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.promptengineering.org/"
        }
      ]
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      subtitle:
        "Certified in implementing AI solutions using Microsoft Azure cloud services",
      image: require("./assets/images/certification-5.png"),
      imageAlt: "Azure AI Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://docs.microsoft.com/learn/"
        }
      ]
    },
    {
      title: "TensorFlow Developer Certificate",
      subtitle:
        "Google certification demonstrating proficiency in building and training neural networks with TensorFlow",
      image: require("./assets/images/certification-5.png"),
      imageAlt: "TensorFlow Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.tensorflow.org/certificate"
        }
      ]
    },
    {
      title: "HuggingFace Transformers Course",
      subtitle:
        "Completed advanced training in implementing and fine-tuning transformer models for NLP tasks",
      image: require("./assets/images/certification-2.png"),
      imageAlt: "HuggingFace Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://huggingface.co/course"
        }
      ]
    },
    {
      title: "Full Stack Development Bootcamp",
      subtitle:
        "Intensive program covering modern web development technologies and practices",
      image: require("./assets/images/certification-8.png"),
      imageAlt: "Full Stack Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.fullstackacademy.com/"
        }
      ]
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "abhishekjoel58@gmail.com",
  display: true
};


const isHireable = true;


const bigProjects = startupProjects;


// openSource section removed

const blogSection = {
  display: false
};

const talkSection = {
  display: false
};

const podcastSection = {
  display: false
};

const twitterDetails = {
  display: false
};

const resumeSection = {
  display: true
};


const techStack = skillsSection;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  startupProjects,
  achievementSection,
  contactInfo,

  isHireable,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection, 
  twitterDetails,
  resumeSection,
  techStack
};
