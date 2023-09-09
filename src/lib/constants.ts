import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  AnnotationIcon,
  CogIcon,
  FilterIcon,
  GlobeAltIcon,
  HomeIcon,
  LightningBoltIcon,
  PhotographIcon,
  ReceiptTaxIcon,
  ScaleIcon,
  UserGroupIcon,
} from "./icons";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const primaryFeatures = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ServerIcon,
  },
];
export const secondaryFeatures = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];
export const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Brenna Goyette",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};

export const people = [
  {
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export const frequencies = [
  { value: "monthly", label: "Monthly", price: "$25", priceSuffix: "/month" },
  { value: "annually", label: "Annually", price: "$250", priceSuffix: "/year" },
];

export const tiers = [
  {
    name: "E-Commerce",
    id: "tier-freelancer",
    href: "/",
    price: [{ monthly: "$25", annually: "$250" }],
    description: "The essentials to provide your best work for customers.",
    features: [
      "Shopify integration",
      "Custom Headless Storefront",
      "Existing Storefront Integration/New Custom Storefront",
      "Custom Product Pages",
    ],
    mostPopular: false,

    cta: "Buy plan",
    icon: "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
  },
  {
    name: "SPA/MPA",
    id: "tier-startup",
    href: "/",
    price: [{ monthly: "$40", annually: "$400" }],
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "Maintenance",
      "Custom API",
      "Advanced analytics",
      "2-hour, dedicated support response time",
      "Marketing automations",
    ],
    mostPopular: true,

    cta: "Buy plan",
    icon: "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
  },
  {
    name: "CMS",
    id: "tier-enterprise",
    href: "/",
    price: [{ monthly: "$50", annually: "$500" }],
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Hosted Custom CMS",
      "Long-term support",
      "Custom reporting tools",
      "5-hour, dedicated support response time",
      "Custom integrations",
      "Dedicated account manager",
    ],
    mostPopular: false,

    cta: "Contact sales",
    icon: "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
  },
];

export const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "All Files", href: "#", icon: FilterIcon, current: false },
  { name: "Photos", href: "#", icon: PhotographIcon, current: true },
  { name: "Shared", href: "#", icon: UserGroupIcon, current: false },
  { name: "Albums", href: "#", icon: ReceiptTaxIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];
export const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
export const tabs = [
  { name: "Recently Viewed", href: "#", current: true },
  { name: "Recently Added", href: "#", current: false },
  { name: "Favorited", href: "#", current: false },
];
export const files = [
  {
    name: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    current: true,
  },
  // More files...
];
export const currentFile = {
  name: "IMG_4985.HEIC",
  size: "3.9 MB",
  source:
    "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  information: {
    "Uploaded by": "Marie Culver",
    Created: "June 8, 2020",
    "Last modified": "June 8, 2020",
    Dimensions: "4032 x 3024",
    Resolution: "72 x 72",
  },
  sharedWith: [
    {
      id: 1,
      name: "Aimee Douglas",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80",
    },
    {
      id: 2,
      name: "Andrea McMillan",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};

export const features = [
  {
    id: 0,
    name: "Microservices",
    description:
      "Headless services that can be deployed to any cloud provider. No need to worry about infrastructure, just deploy your services & let them do the rest.",
    icon: GlobeAltIcon,
  },
  {
    id: 1,
    name: "Next.js, TypeScript & Tailwindcss",
    description:
      "Secure, Scalable & Fast. Built with Next.js, TypeScript, & Tailwindcss. Production ready for production deployment.",
    icon: ScaleIcon,
  },
  {
    id: 2,
    name: "Design Tools",
    description:
      "Built with Sketch, Figma & Adobe XD. No need to worry about design. Just focus on building your app.",
    icon: LightningBoltIcon,
  },
  {
    id: 3,
    name: "Modern UX Principles & Architecture",
    description:
      "Using JAM Stack tooling. No need to worry about the details. Just focus on building your app.",
    icon: AnnotationIcon,
  },
];

export const topSrc = [
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg",
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1646886682/recruiter-card_tbnatw.png",
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg",
];
export const topPicks = [
  {
    name: "Recruiter",
    description: "I'm Ready to Work",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1684803126/Portfolio/Blue_Futurustic_Programmer_LinkedIn_Post_w5k8mb.png",
    imageAlt: "joshua vaughn portfolio",
    href: "/recruiter",
  },
  {
    name: "Freelance",
    description: "Let's build together!",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1684799178/Portfolio/1_iheznq.png",

    imageAlt: "contract me",
    href: "/contract",
  },
  {
    name: "Coming Soon!",
    description: "See What I'm Up To...",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1684799179/Portfolio/3_ardvkq.png",

    imageAlt: "shopify",
    href: "/future",
  },
];

export const callouts = [
  {
    id: 1,
    name: "PORTFOLIO",
    description: "React, TailwindCSS & Next.js",
    imageSrc:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg",

    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard, mouse & porcelain mug.",
    href: "#",
  },
  {
    id: 2,
    name: "MERN STACK",
    description: "React, MongoDB, Express, Node.js",
    imageSrc:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1643976423/mernstack_1_cpteis.png",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring & houseplant.",
    href: "#",
  },
  {
    id: 3,
    name: "SHOPIFY",
    description: "Hydrogen, Liquid, Next.js, TailwindCSS",
    imageSrc:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1643976704/shopify_lvz0ui.png",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    id: 4,
    name: "UX DESIGN",
    description: "Google Certification Course",
    imageSrc:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1643977258/googleux_t7xakq.png",

    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard, mouse & porcelain mug.",
    href: "#",
  },
  {
    id: 5,
    name: "INDIE GAME DEVELOPMENT",
    description: "React Native, Babylon.js, Blender",
    imageSrc:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1644118954/indiegamedev_1_fls4tq.svg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring & houseplant.",
    href: "#",
  },
  {
    id: 6,
    name: "FREELANCE CLIENTS",
    description: "Hydrogen, Liquid, Next.js, TailwindCSS",
    imageSrc:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1643977144/freelance_wr4fsa.png",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export const featuredProducts = [
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1643978167/PASSION_PROJECTS_eph1py.svg",
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1643976423/mernstack_1_cpteis.png",
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg",
];

export const TimeLineData = [
  {
    year: 2018,
    text: "January I began learning the basics of Web Development",
    id: 0,
    name: "Learning the basics",
    description: "Self Taught",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1643982438/portfolio_project_thumbnails_u11j8x.png",
    alt: "January I began learning the basics of Web Development",
    href: "#",
  },
  { year: 2019, text: "Started Lambda School Bootcamp" },
  {
    year: 2020,
    text: "Improved my skills in React, Apollo, Next, Three.js & Node.js & Started Learning React Native with & without EXPO",
  },
  {
    year: 2021,
    text: "Learned Shopify Liquid, Polaris, GraphQL & UI/UX DESIGN",
  },
  {
    year: 2022,
    text: "I hope to further my skills & learn Python to code my first neural network",
  },
];

import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };

export const options = {
  autoPlay: true,
  background: {
    repeat: "no-repeat",
    position: "50% 50%",
    " size": "fit",
    rotate: {
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
    },
    color: {
      value: "#000000",
    },

    opacity: 0.5,

    image:
      "url('https://res.cloudinary.com/dpytkhyme/image/upload/v1694288758/Portfolio/5_x4vibo.png')",
    // "url('https://res.cloudinary.com/dpytkhyme/image/upload/v1684165000/Portfolio/herobg_wpswd0.png')",
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#0072b1",
      },
      opacity: 1,
    },
    enable: false,
  },
  defaultThemes: {
    dark: {
      background: {
        color: {
          value: "#000000",
        },
      },
    },
  },
  delay: 0,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: ["trail", "bubble"],
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      onDiv: {
        selectors: ["#repulse-div"],
        enable: false,
        mode: ["repulse"],
        type: "circle",
      },
      onHover: {
        enable: true,
        mode: "slow",

        parallax: {
          enable: false,
          force: 2,
          smooth: 20,
        },
      },
      resize: {
        delay: 0,
        enable: true,
      },
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 25,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.2,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 25,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 25,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 0.005,
        pauseOnStop: true,
        quantity: 5,
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 100,
              sync: true,
            },
          },
          collisions: {
            enable: false,
          },
          links: {
            enable: false,
          },
          move: {
            outModes: {
              default: "destroy",
            },
            speed: 2,
          },
          size: {
            value: 5,
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 1,
              sync: true,
              startValue: "min",
              destroy: "max",
            },
          },
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
    },
  },
  manualParticles: [
    {
      position: {
        x: 50,
        y: 50,
      },
      options: {
        maxParticles: 20,
        size: {
          value: 3,
        },
        move: {
          speed: 0.2,
        },
        lineLinked: {
          enable: false,
        },
        shape: {
          type: ["image", "circle"],
          image: [
            {
              src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1649542389/Untitled_design_1_vwaott.png",
              height: 100,
              width: 100,
            },
          ],
        },
        color: {
          value: "#ffffff",
        },
        opacity: {
          value: 0.2,
          random: false,
          anim: {
            enable: false,
            speed: 0.2,
            opacity_min: 0.1,
            sync: false,
          },
        },

        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
      },
      quantity: 1,
      id: "image",
    },
  ],
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      absorb: {
        speed: 2,
      },
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: true,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: "#ff0000",
      animation: {
        h: {
          count: 0,
          enable: true,
          offset: 0,
          speed: 25,
          decay: 0,
          sync: false,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
      },
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 25,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 2,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000",
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 100,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: {
        min: 0.3,
        max: 0.8,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.5,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.3,
      },
    },
    reduceDuplicates: false,
    shadow: {
      blur: 0,
      color: {
        value: "#000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {},
      type: "circle",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: {
        min: 1,
        max: 3,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 3,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 1,
      },
    },
    stroke: {
      width: 0,
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false,
      },
      direction: "clockwise",
      path: false,
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
        particles: {
          color: {
            value: "#000000",
            animation: {
              enable: false,
              speed: 1,
              sync: true,
            },
          },
        },
      },
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: "vertical",
      speed: 25,
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false,
      },
      direction: "clockwise",
      enable: false,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10,
      },
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        sync: true,
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 45,
      },
      width: 1,
    },
    links: {
      blink: false,
      color: {
        value: "random",
      },
      consent: false,
      distance: 100,
      enable: true,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    repulse: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  emitters: [],
};
