import { GitHubIcon, LinkedInIcon, XIcon, ScholarIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jan-Aike Termöhlen",
  initials: "JAT",
  location: "Braunschweig, Germany",
  locationLink: "https://www.google.com/maps/place/Braunschweig",
  about:
    "PhD Student focused on machine learning for domain adaptation and generalization in computer vision",
  summary:
    "PhD Student in electrical engineering at the Institute for Communications Technology (TU Braunschweig), specalizing in machine learning for computer vision. My main research interests lie in deep learning methods for unsupervised domain adaptation, continual domain adaptation, and domain generalization, with the goal to bridge the domain gap between synthetic and real data for neural network training and inference.",
  avatarUrl: "https://i1.rgstatic.net/ii/profile.image/11431281211951208-1702544701440_Q512/Jan-Aike-Termoehlen.jpg",
  personalWebsiteUrl: "https://termoehlen.net",
  contact: {
    email: "j.termoehlen@tu-bs.de",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/j-atermoehlen",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/j-atermoehlen/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/@ja_termoehlen",
        icon: XIcon,
      },
      {
        name: "GoogleScholar",
        url: "https://scholar.google.de/citations?user=LkhzlxIAAAAJ&hl=de",
        icon: ScholarIcon,
      },
    ],
  },
  education: [
    {
      school: "Technische Universität Braunschweig", 
      degree: "PhD Student in Machine Learning and Computer Vision",
      start: "2017",
      end: "Today",
    },
    {
      school: "Technische Universität Braunschweig", 
      degree: "M.Sc. in Electrical Engineering",
      start: "2015",
      end: "2017",
    },
    {
      school: "Technische Universität Braunschweig", 
      degree: "B.Sc. in Industrial Engineering specialised in Electrical Engineering",
      start: "2011",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Institute for Communications Technology, TU Braunschweig",
      link: "https://www.tu-braunschweig.de/en/ifn",
      badges: [],
      title: "Research Assistant",
      start: "08/2017",
      end: "Today",
      description: "",
    },
    {
      company: "Institute for Communications Technology, TU Braunschweig",
      link: "https://www.tu-braunschweig.de/en/ifn",
      badges: [],
      title: "Student Research Assistant",
      start: "05/2017",
      end: "08/2017",
      description: "",
    },
    {
      company: "Institute of Electrical Metrology and Fundamentals of Electrical Engineering, TU Braunschweig",
      link: "https://www.tu-braunschweig.de/en/emg/",
      badges: ["Part Time"],
      title: "Student Assistant",
      start: "10/2015",
      end: "11/2016",
      description: "",
    },
    {
      company: "Siemens AG",
      link: "https://www.mobility.siemens.com/de/de.html",
      badges: [],
      title: "Intern",
      start: "10/2014",
      end: "02/2015",
      description: "",
    },
    {
      company: "StudING - Das studentische Ingenieurbüro UG",
      link: "https://studing.org/",
      badges: ["Part Time"],
      title: "Team Leader",
      start: "08/2010",
      end: "06/2016",
      description: "",
    },
  ],
  programming: [
    "Python",
    "Bash",
    "C",
    "MATLAB",
  ],
  software: [
    "PyTorch",
    "Tensorflow",
    "Matplotlib",
    "OpenCV",
    "Scikit-learn",
    "Pandas",
    "Slurm",
    "Git",
    "LaTeX",
  ],
  language: [
    "German (native)",
    "English (proficient)",
  ],


/*   projects: [
    {
      title: "Side Project A",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to ...,
      logo: XYZLogo,
      link: {
        label: "XYZ.com",
        href: "https://XYZ.de/",
      },
    },
  ], */
  publications: [
    {
      key:"15",
      author   : ["Joshua Niemeijer*, ", "Manuel Schwonberg*, ",<u>Jan-Aike Termöhlen</u>,"*, Nico M. Schmidt",", and Tim Fingscheidt (* equal contribution)"],
      title     : "Generalization by Adaptation: Diffusion-Based Domain Extension for Domain-Generalized Semantic Segmentation",
      conference: "Proc. of WACV",
      month     : "Januar",
      address   : "Waikoloa, HI, USA",
      year      : "2024",
      pages     : "2830–2840",
      arxiv     : "https://arxiv.org/abs/2312.01850",
      code      : "https://github.com/JNiemeijer/DIDEX"
    },
    {
      key:"14",
      author   : [<u>Jan-Aike Termöhlen</u>,", Timo Bartels",", and Tim Fingscheidt"],
      title     : "A Re-Parameterized Vision Transformer (ReVT) for Domain-Generalized Semantic Segmentation",
      conference: "Proc. of ICCV-Workshops",
      month     : "October",
      address   : "Paris, France",
      year      : "2023",
      pages     : "4376–4385",
      arxiv     : "https://arxiv.org/abs/2308.13331",
      code      : "https://github.com/ifnspaml/revt-domain-generalization"
    },
    {
      key:"13",
      author    : ["Manuel Schwonberg*, ", "Joshua Niemeijer*, ",<u>Jan-Aike Termöhlen</u>,"*, Jörg P. Schäfer, Nico M. Schmidt, Hanno Gottschalk",", and Tim Fingscheidt (* equal contribution)"],
      title     : "Survey on Unsupervised Domain Adaptation for Semantic Segmentation for Visual Perception in Automated Driving",
      journal   : "IEEE Access",
      month     : "May",
      year      : "2023",
      vol       : "11",
      pages     : "54296–54336",
      arxiv     : "https://arxiv.org/abs/2304.11928",
      code      : ""
    },
    {
      key:"12",
      author   : ["Marvin Klingner, Konstantin Müller, Mona Mirzaie, Jasmin Breitenstein, ",<u>Jan-Aike Termöhlen</u>,", and Tim Fingscheidt"],
      title     : "On the Choice of Data for Efficient Training and Validation of End-to-End Driving Models",
      conference: "Proc. of CVPR-Workshops",
      month     : "June",
      address   : "New Orleans, LA, USA",
      year      : "2022",
      pages     : "4803–4812",
      arxiv     : "https://arxiv.org/abs/2206.00608",
      code      : ""
    },
    {
      key:"11",
      author   : ["Marvin Klingner, ",<u>Jan-Aike Termöhlen</u>,", Jacob Ritterbach, and Tim Fingscheidt"],
      title     : "Unsupervised BatchNorm Adaptation (UBNA): A Domain Adaptation Method for Semantic Segmentation Without Using Source Domain Representations",
      conference: "Proc. of WACV-Workshops",
      month     : "Jan",
      address   : "Waikoloa, HI, USA",
      year      : "2022",
      pages     : "210–220",
      arxiv     : "https://arxiv.org/abs/2011.08502",
      code      : "https://github.com/ifnspaml/UBNA"
    },
    {
      key:"10",
      author    : ["Bile Peng, ",<u>Jan-Aike Termöhlen</u>,", Cong Sun, Danping He, Ke Guan, Tim Fingscheidt, and Eduard A. Jorswieck"],
      title     : "Reconfigurable Intelligent Surface Enabled Spatial Multiplexing with Fully Convolutional Network",
      preprint  : "arXiv:2201.02834",
      month     : "Januar",
      year      : "2022",
      pages     : "1–25",
      arxiv     : "https://arxiv.org/abs/2201.02834",
      code      : ""
    },
    {
      key:"09",
      author   : [<u>Jan-Aike Termöhlen</u>,", Marvin Klingner, Leon J. Brettin, Nico M. Schmidt, and Tim Fingscheidt"],
      title     : "Continual Unsupervised Domain Adaptation for Semantic Segmentation by Online Frequency Domain Style Transfer",
      conference: "Proc. of ITSC",
      month     : "September",
      address   : "Indianapolis, IN, USA",
      year      : "2021",
      pages     : "2881–2888",
      arxiv     : "",
      code      : ""
    },
    {
      key:"08",
      author   : ["Antonia Breuer, Quy Le Xuan, ",<u>Jan-Aike Termöhlen</u>,", Silviu Homoceanu, and Tim Fingscheidt"],
      title     : "Quo Vadis? Meaningful Multiple Trajectory Hypotheses Prediction in Autonomous Driving",
      conference: "Proc. of ITSC",
      month     : "September",
      address   : "Indianapolis, IN, USA",
      year      : "2021",
      pages     : "637–644",
      arxiv     : "",
      code      : ""
    },
    {
      key:"07",
      author   : ["Jasmin Breitenstein, ",<u>Jan-Aike Termöhlen</u>,", Daniel Lipinski, and Tim Fingscheidt"],
      title     : "Corner Cases for Visual Perception in Automated Driving: Some Guidance on Detection %Approaches",
      preprint: "arXiv:2102.05897",
      month     : "February",
      year      : "2021",
      pages     : "1–8",
      arxiv     : "https://arxiv.org/abs/2102.05897",
      code      : ""
    },
    {
      key:"06",
      author   : ["Antonia Breuer, ",<u>Jan-Aike Termöhlen</u>,", Silviu Homoceanu, and Tim Fingscheidt"],
      title     : "openDD: A Large-Scale Roundabout Drone Dataset",
      conference: "Proc. of ITSC",
      month     : "September",
      address   : "Virtual",
      year      : "2020",
      pages     : "44–49",
      arxiv     : "",
      code      : "https://l3pilot.eu/data/opendd"
    },
    {
      key:"05",
      author   : ["Marvin Klingner, ",<u>Jan-Aike Termöhlen</u>,", Jonas Mikolajczyk, and Tim Fingscheidt"],
      title     : "Self-Supervised Monocular Depth Estimation: Solving the Dynamic Object Problem by Semantic Guidance",
      conference: "Proc. of ECCV",
      month     : "August",
      address   : "Virtual",
      year      : "2020",
      pages     : "1–19",
      arxiv     : "https://arxiv.org/abs/2007.06936",
      code      : "https://github.com/ifnspaml/SGDepth"
    },
    {
      key:"05",
      author   : ["Christopher Plachetka, Niels Maier, Jenny Fricke, ",<u>Jan-Aike Termöhlen</u>,", and Tim Fingscheidt"],
      title     : "Terminology and Analysis of Map Deviations in Urban Domains: Towards Dependability for HD Maps in Automated Vehicles",
      conference: "Proc. of IV-Workshops",
      month     : "June",
      address   : "Las Vegas, NV, USA",
      year      : "2020",
      pages     : "63–70",
      arxiv     : "",
      code      : ""
    },
    {
      key:"04",
      author   : ["Jasmin Breitenstein, ",<u>Jan-Aike Termöhlen</u>,", Daniel Lipinski, and Tim Fingscheidt"],
      title     : "Systematization of Corner Cases for  Visual Perception in Automated Driving",
      conference: "Proc. of IV",
      month     : "June",
      address   : "Las Vegas, NV, USA",
      year      : "2020",
      pages     : "986–993",
      arxiv     : "",
      code      : ""
    },
    {
      key:"03",
      author   : ["Antonia Breuer, Sven Elflein, Tim Joseph, ",<u>Jan-Aike Bolte</u>,", Silviu Homoceanu, and Tim Fingscheidt"],
      title     : "Analysis of the Effect of Various Input Representations for LSTM-Based Trajectory Prediction",
      conference: "Proc. of ITSC",
      month     : "October",
      address   : "Aucklan, New Zealand",
      year      : "2019",
      pages     : "1–8",
      arxiv     : "",
      code      : ""
    },
    {
      key:"02",
      author   : [<u>Jan-Aike Bolte</u>,", Markus Kamp, Antonia Breuer, Silviu Homoceanu, Peter Schlicht, Fabian Hüger, Daneil Lipinski, and Tim Fingscheidt"],
      title     : "Unsupervised Domain Adaptation to Improve Image Segmentation Quality Both in the Source and Target Domain",
      conference: "Proc. of CVPR-Workshops",
      month     : "June",
      address   : "Long Beach, CA, USA",
      year      : "2019",
      pages     : "1404–1413",
      arxiv     : "",
      code      : ""
    },
    {
      key:"01",
      author   : [<u>Jan-Aike Bolte</u>,", Andreas Bär, Daniel Lipinski, and Tim Fingscheidt"],
      title     : "Towards Corner Case Detection for Autonomous Driving",
      conference: "Proc. of IV",
      month     : "June",
      address   : "Paris,France",
      year      : "2019",
      pages     : "366–373",
      arxiv     : "https://arxiv.org/abs/1902.09184",
      code      : ""
    },
   
  ],
} as const;
