import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Amy Conroy',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Amy Conroy',
  subtitle: "I'm an MSc computer science student, and LLB law grad.",
  cta: 'Want to Know More?',
};
// comm
// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm Amy, a law graduate passionate about the impact that technology can have on the public sector, in particular the legal field. During my undergraduate degree I became incredibly interested in IT law, and subsequently wrote my dissertation on Article 17 of the GDPR and Machine Learning. This lead to me enrolling in a MSc Computer Science course, which I am currently completing at the University of Bristol. My current research project is to create a system to automatically generate summaries of UKHL judgments using supervised machine learning.",
  paragraphTwo:
    "I am experienced with programming languages such as C/C++, Python, Java, Javascript, HTML, and CSS. I am a fast-learner, and am always looking to expand my skill set! When I'm not coding however, I love reading, travelling, and creative writing. I currently have a published novel on Wattpad with nearly 500,000 reads. My favourite pastime has to be figure skating, which I have done for the past 18 years.",
  paragraphThree:
    'I am open to, and excited about, new opportunities upon the completion of my MSc degree in September 2020. If you think you have a role that might work well for me, please get in touch!',
  resume: 'AmyConroyCV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project3.jpg',
    title: 'Do or Die Fitness Tracker',
    info:
      'Do or Die was created as a group project for our Software Engineering module. It is a wearable fitness tracker, built on a M5Stack. The two other key subsystems include a website built with React where sponsors can create challenges, and users can monitor their data. Our other subsystem is the management dashboard for the Admins of the product, built with Processing.',
    info2:
      'I acted as team leader for the project, implementing Agile methods to deliver our working prototype. Our Github page includes our portfolio for the project, which details the design and implementation of the product.',
    url: '',
    repo: 'https://github.com/amyconroy/Do-or-Die-Fitness-Tracker', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project5.jpg',
    title: 'Wireworld Adaption',
    info:
      "This is an adaption of the wireworld cellular automaton, written in C. Wireworld is formed from a 2D grid of cells, simulating digitical electronics. The four states for the cells are 'empty', 'electron head', 'electron tail', or 'copper'. The next set are determined by a certain set of rules.",
    info2: '',
    url: '',
    repo: 'https://github.com/amyconroy/Wireworld', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project2.jpg',
    title: 'PLAY Text Adventure Game Website',
    info:
      "This website for the completely original ‘PLAY text adventure game’ engine, in the style of the retro 80's, was a pair project completed as coursework. Features of the website include a comment page, a fully working shop (with a products and downloads page, persistent basket, and a receipt generated using the database), as well as a demo page, including a demo of the text adventure game written in Javascript.",
    info2: 'Project completed using HTML, CSS, and Javascript with the database integrated using SQLite3.',
    url: '',
    repo: 'https://github.com/amyconroy/play', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project4.jpg',
    title: 'Homebrew Database',
    info:
      'This is a database system built from the ground up, written in Java. The system allows for all SQL queries to be parsed and executed, for Entity-Relationship data to be stored and manipulated, as well as a socket server to accept incoming connections.',
    info2:
      'Developing this system allowed me to apply Object-Oriented programming techniques and design patterns in a practical manner, as well as learning more about database management.',
    url: '',
    repo: 'https://github.com/amyconroy/database-system', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Undergraduate Research Project: Article 17 and Machine Learning',
    info:
      'This is my Final Year Research Project for my Honours Law Degree (LLB) at the University of Bristol. This paper considers whether Article 17 of the GDPR truly provides protection for personal data rights in regards to machine learning algorithms.',
    info2:
      'The paper is provides a new take on if the GDPR was written with a consideration for the details of new technologies and their effect on personal data rights. If you would like to discuss this, please get in touch!',
    url: '/#',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'amyeileenconroy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/AmyConroy6',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/amy-conroy/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/amyconroy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
