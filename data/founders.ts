export type EducationItem = {
  degree: string;
  institution: string;
  specialization?: string;
  location?: string;
  period?: string;
  description: string;
};

export type ExperienceItem = {
  title: string;
  organization: string;
  location?: string;
  period?: string;
  duration?: string;
  description: string;
  note?: string;
};

export type Founder = {
  id: "sourav" | "munavvir";
  name: string;
  initials: string;
  role: string;
  image: string;
  alt: string;
  summary: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  professionalFocus: string[];
  keywords: string[];
  technicalNote?: string;
  links: {
    linkedin?: string;
    email?: string;
  };
};

export const founders: Founder[] = [
  {
    id: "sourav",
    name: "Sourav R",
    initials: "SR",
    role: "Co-Founder — Product, Technology and Strategy",
    image: "/images/founders/sourav.png",
    alt: "Sourav R, Co-Founder of Edgecipline",
    // Confirm the final professional photograph and replace this editable image path.
    summary: [
      "Sourav is a business and technology professional whose background combines management education, practical software development and product execution.",
      "He completed a Bachelor of Business Administration followed by a Master of Business Administration specialising in Logistics, Materials and Supply Chain Management at Garden City University.",
      "After completing his MBA, he transitioned into software development through practical coding training at Brototype. During this period, he also worked for approximately three months as a Placement Officer, supporting candidate coordination, employer communication, interview scheduling and placement activities.",
      "After leaving the placement role, he continued strengthening his software-development capabilities through structured training, independent practice and practical application development.",
      "He later worked as a Full-Stack Developer at JK Studio, contributing to the development of business-management systems, customer-management workflows, finance and billing functions, administrative dashboards, backend services, databases and cloud deployment.",
      "Alongside his professional experience, Sourav has continued technical training and practical development for approximately two years, strengthening his ability to convert business requirements into functional digital systems.",
      "At Edgecipline, Sourav is responsible for product development, technology strategy, technical decision-making, software architecture, business planning and product execution.",
    ],
    education: [
      {
        degree: "Bachelor of Business Administration",
        institution: "Garden City University",
        specialization: "International Business Management",
        period: "2018–2021",
        description: "Built a foundation in business management, organizational decision-making and international business.",
      },
      {
        degree: "Master of Business Administration",
        institution: "Garden City University",
        specialization: "Logistics, Materials and Supply Chain Management",
        period: "2021–2023",
        description: "Developed deeper knowledge of management, logistics, operations, supply-chain processes and structured business planning.",
      },
    ],
    experience: [
      {
        title: "Software Development Training",
        organization: "Brototype",
        description: "Transitioned into software engineering through intensive practical training focused on full-stack application development.",
        note: "Dates intentionally omitted pending confirmation.",
      },
      {
        title: "Placement Officer",
        organization: "Brototype",
        duration: "Approximately three months",
        description: "Supported candidate coordination, employer communication, interview scheduling, placement activities and professional follow-ups.",
      },
      {
        title: "Continued Software Development Training",
        organization: "Independent learning and practical development",
        duration: "Approximately two years of ongoing learning and practical development",
        description: "Continued improving full-stack development capabilities through structured learning, independent practice and real-world application development.",
      },
      {
        title: "Full-Stack Developer",
        // Confirm whether the correct employer name is JK Studio or JK Industries.
        organization: "JK Studio",
        period: "December 2024 – December 2025",
        description: "Worked across frontend development, backend architecture, databases, business workflows and cloud deployment while developing internal business-management applications.",
      },
    ],
    professionalFocus: [
      "Product development",
      "Technology strategy",
      "Software architecture",
      "Business planning",
      "Technical decision-making",
      "Product execution",
      "Cross-functional coordination",
      "Structured problem-solving",
      "Continuous technical development",
    ],
    keywords: [
      "business and technology",
      "management education",
      "software development",
      "product execution",
      "Master of Business Administration",
      "Full-Stack Developer",
      "business-management systems",
      "software architecture",
      "technical decision-making",
    ],
    technicalNote: "His technical background covers modern full-stack web development, backend systems, databases, cloud deployment and business-software architecture.",
    links: {
      linkedin: "https://www.linkedin.com/in/sourav-r-9566b5194?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "#",
    },
  },
  {
    id: "munavvir",
    name: "Munavvir TP",
    initials: "MT",
    role: "Co-Founder — Operations, Administration and People",
    image: "/images/founders/munaveer.png",
    alt: "Munavvir TP, Co-Founder of Edgecipline",
    // Confirm the final professional photograph and replace this editable image path.
    summary: [
      "Munavvir is an operations, administration and people-management professional with more than seven years of experience across India and the UAE.",
      "His career covers office administration, human-resource management, recruitment, employee onboarding, payroll processing, WPS administration, visa and insurance coordination, client communication, vendor relationships, project coordination, documentation, procurement and day-to-day organizational operations.",
      "He began building his professional experience in the UAE as an HR and Administration Officer at Royal Luxury Interiors LLC. During this role, he handled employment visas, renewals, insurance, payroll, gratuity calculations, recruitment, onboarding, HR documentation, procurement, travel coordination, scheduling and employee records.",
      "He later joined World Inventions Trading LLC as an HR and Administration Officer. In this position, he managed hiring, employee induction, WPS salary processing, staff support, tenancy-related administration, DEWA coordination, VAT documentation, reporting and communication between departments and external partners.",
      "After returning to India, Munavvir worked as an Office Administration and Operations Coordinator at Techa Innovs. His responsibilities included supporting internal operations, employee onboarding, attendance and leave management, meeting coordination, vendor follow-up, task distribution, reporting, office supplies and IT-asset coordination.",
      "He subsequently joined Dimark Marketing Management LLC in Dubai as an Office Administrator. In this role, he independently manages administrative and HR operations, attends client meetings, coordinates communication, follows up on projects, delegates freelance work, maintains employee records, prepares invoices and reports, manages procurement and monitors internal timelines.",
      "His career shows a clear progression from HR and administrative responsibilities into broader operations, client coordination and independent organizational management.",
      "At Edgecipline, Munavvir is responsible for operations, administration, internal processes, people coordination, documentation, client communication and organizational execution.",
    ],
    education: [
      {
        degree: "Bachelor of Technology",
        specialization: "Computer Science and Engineering",
        institution: "College of Engineering Vadakara",
        location: "Calicut, Kerala, India",
        period: "2011–2015",
        description: "Completed a four-year Computer Science and Engineering programme, providing a technical foundation that complements his operational and administrative experience.",
      },
    ],
    experience: [
      {
        title: "HR and Administration Officer",
        organization: "Royal Luxury Interiors LLC",
        location: "Abu Dhabi, UAE",
        period: "November 2016 – December 2020",
        description: "Managed employment visas, renewals and insurance in accordance with UAE requirements. Oversaw payroll, gratuity calculations and WPS processing. Supported recruitment, job posting, employee onboarding and HR documentation. Coordinated scheduling, procurement, travel arrangements, office support and team activities while maintaining accurate employee records.",
      },
      {
        title: "HR and Administration Officer",
        organization: "World Inventions Trading LLC",
        location: "Dubai, UAE",
        period: "March 2021 – April 2023",
        description: "Managed end-to-end HR support including recruitment, induction, WPS salary processing and staff coordination. Handled administrative responsibilities involving DEWA coordination, tenancy contracts, VAT-related documentation, financial records and reporting. Also served as a link between internal departments and external partners.",
      },
      {
        title: "Office Administration and Operations Coordinator",
        organization: "Techa Innovs",
        location: "Kerala, India",
        period: "June 2023 – March 2024",
        description: "Supported administrative procedures and internal office operations. Assisted with employee onboarding, attendance tracking and leave management. Coordinated meetings, vendor relationships, internal task distribution, reports, office supplies and IT assets.",
      },
      {
        title: "Office Administrator",
        organization: "Dimark Marketing Management LLC",
        location: "Dubai, UAE",
        period: "April 2024 – Present",
        description: "Independently manages administrative and HR operations. Participates in client meetings, handles professional communication and coordinates active projects. Delegates and tracks freelance tasks, manages employee records, prepares invoices and reports, handles business correspondence, coordinates procurement and monitors project timelines.",
      },
    ],
    professionalFocus: [
      "Business operations",
      "Office administration",
      "Human-resource coordination",
      "Recruitment and onboarding",
      "Payroll and WPS administration",
      "Employee-record management",
      "Client communication",
      "Vendor coordination",
      "Project follow-up",
      "Documentation and reporting",
      "Procurement",
      "Internal process management",
      "Team coordination",
      "Organizational execution",
    ],
    keywords: [
      "operations, administration and people-management",
      "more than seven years",
      "human-resource management",
      "HR and Administration Officer",
      "Office Administrator",
      "client communication",
      "organizational management",
      "organizational execution",
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/munavvirtp93?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "#",
    },
  },
];
