/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saman Jamil",
  title: "Hi all, I'm Saman",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with experience in building Android and Web applications using React.js, Node.js, Kotlin, low-code platforms and other modern technologies. Focused on solving real-world problems through clean code, creative design, and impactful projects like Under3 and Idra'ak."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1orbrdlk7vdlSzIadQL6XcEotyIMbC427/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/i190721",
  linkedin: "https://www.linkedin.com/in/saman-jamil/",
  gmail: "samanj315@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saman.jamil.33",
  medium: "https://medium.com/@sj315",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO BUILDS REAL-WORLD WEB & MOBILE APPS",
  skills: [
    emoji(
      "⚡ Building responsive and scalable front-end UIs using React.js and modern frameworks"
    ),
    emoji(
      "⚡ Developing Android apps with Kotlin, Jetpack Compose, and RESTful APIs"
    ),
    emoji(
      "⚡ Creating Web & Mobile apps using low-code tools like WeWeb and Bubble.io"
    ),
    emoji(
      "⚡ Integrating third-party APIs and services such as Firebase, AWS, and Xano"
    ),
    emoji("⚡ Designing backend logic with Node.js, Express, and MongoDB"),
    emoji(
      "⚡ Building AI-powered apps like Idra'ak using Python, Flask, and TensorFlow"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Bubble.io",
      fontAwesomeClassname: "fas fa-gem"
    },
    {
      skillName: "WeWeb",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Xano",
      fontAwesomeClassname: "fas fa-server" // Representing backend services
    },
    {
      skillName: "n8n",
      fontAwesomeClassname: "fas fa-project-diagram" // Represents automation & workflows
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName:
        "National University of Computer and Emerging Sciences (FAST-NUCES)",
      logo: require("./assets/images/fastlogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - June 2023",
      desc: "Graduated with a strong foundation in software engineering, full-stack development, and AI/ML concepts.",
      descBullets: [
        "Completed Final Year Project: Idra'ak – translating Urdu Sign Language into audio and text using AI/ML",
        "Worked on multiple Android and Web-based academic projects",
        "Completed internship at AIMS Lab under faculty supervision"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / UI Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend / API Integration",
      progressPercentage: "75%"
    },
    {
      Stack: "Android Development (Java/Kotlin)",
      progressPercentage: "80%"
    },
    {
      Stack: "Low-code Tools (Bubble.io, WeWeb, FlutterFlow)",
      progressPercentage: "90%"
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Quixas Technology Ltd.",
      companylogo: require("./assets/images/quixasLogo.png"), // Add this logo to assets/images folder
      date: "August 2024 – Present",
      desc: "Building web and mobile apps using modern low-code platforms, integrating APIs, and working in agile teams.",
      descBullets: [
        "Developed scalable applications using WeWeb, Bubble.io, and FlutterFlow",
        "Integrated REST APIs and worked on QA, performance optimization, and user-centric UI workflows",
        "Implemented automation via n8n for seamless user experience"
      ]
    },
    {
      role: "Android Developer",
      company: "Terafort Ltd.",
      companylogo: require("./assets/images/teraforLogo.jpg"), // Add this logo to assets/images folder
      date: "December 2023 – June 2024",
      desc: "Worked on native Android apps using Kotlin and Java, delivering polished and responsive applications.",
      descBullets: [
        "Used Kotlin, Coroutines, MVVM, RecyclerView, and Android Jetpack components",
        "Implemented features like in-app translation, constraint layouts, ads, and REST API integration",
        "Focused on UI/UX consistency across multiple screen sizes and Android versions"
      ]
    },
    {
      role: "Web Application Developer Intern",
      company: "Chakor Software Development",
      companylogo: require("./assets/images/chakorLogo.jpg"), // Add this logo to assets/images folder
      date: "July 2023 – October 2023",
      desc: "Interned as a full-stack developer focusing on AI-assisted and low-code web application development.",
      descBullets: [
        "Built a full-stack product using WeWeb and backend tools",
        "Participated in code reviews and applied software testing principles",
        "Gained hands-on experience with automation, APIs, and UI design"
      ]
    }
    // {
    //   role: "Research Intern",
    //   company: "FAST-NUCES AIMS Lab",
    //   companylogo: require("./assets/images/fastlogo.png"),
    //   date: "July 2022 – September 2022",
    //   desc: "Contributed to AI/ML research focused on Urdu Sign Language recognition and translation.",
    //   descBullets: [
    //     "Worked on dataset preprocessing and model experimentation for Urdu Sign Language detection",
    //     "Assisted in setting up machine learning pipelines for sign-to-text translation using deep learning"
    //   ]
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/quixasLogo.png"), // Add your logo image in the assets folder
      projectName: "Quixas Technology",
      projectDesc:
        "Designed and developed the official company website with a clean, responsive UI using modern web technologies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://quixasit.com/"
        }
      ]
    },
    {
      image: require("./assets/images/under3.png"), // Add your Under3 logo in the assets folder
      projectName: "Under3",
      projectDesc:
        "A trauma-informed mobile app built using low-code tools to support survivors of intimate partner violence.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.under3.ca/"
        }
      ]
    },
    {
      image: require("./assets/images/idraakLogo.jpg"), // Add your Idraak logo in the assets folder
      projectName: "Idra’ak",
      projectDesc:
        "An Android AI-based app that translates Urdu Sign Language videos into text and speech using deep learning.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/i190721/Idraak"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3318540818",
  email_address: "samanj315@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
