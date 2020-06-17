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
  subtitle: "I'm a MSc computer science student, and LLB law grad.",
  cta: 'Want to Know More?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'AmyConroyCV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project3.jpg',
    title: 'Do or Die Fitness Tracker',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/amyconroy/Do-or-Die-Fitness-Tracker', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project2.jpg',
    title: 'PLAY Text Adventure Game Website',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/amyconroy/play', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project4.jpg',
    title: 'Homebrew Database',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/amyconroy/database-system', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Undergraduate Research Project: Article 17 and Machine Learning',
    info: '',
    info2: '',
    url: '../../mock/fyrp.pdf',
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
