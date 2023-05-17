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

export const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "E-Commerce",
      id: "tier-freelancer",
      href: "#",
      price: { monthly: "$25", annually: "$250" },
      description: "The essentials to provide your best work for customers.",
      features: [
        "Shopify integration",
        "Custom Headless Storefront",
        "Existing Storefront Integration/New Custom Storefront",
        "Custom Product Pages",
      ],
      mostPopular: false,
    },
    {
      name: "SPA/MPA",
      id: "tier-startup",
      href: "#",
      price: { monthly: "$40", annually: "$400" },
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "Maintenance",
        "Custom API",
        "Advanced analytics",
        "2-hour, dedicated support response time",
        "Marketing automations",
      ],
      mostPopular: true,
    },
    {
      name: "CMS",
      id: "tier-enterprise",
      href: "#",
      price: { monthly: "$50", annually: "$500" },
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
    },
  ],
};

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

export const projects = [
  {
    title: "MERN STACK",
    description: "PROGRESSIVE WEB APP TEMPLATES",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1643978167/PASSION_PROJECTS_eph1py.svg",
    tags: ["Mongo", "Express", "React", "Node"],

    i: 0,
  },
  {
    title: "PLATFORMS",
    description: "SHOPIFY APPS, STORES & THEMES",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1643978167/PASSION_PROJECTS_eph1py.svg",
    tags: ["React", "Liquid", "Next", "Polaris", "GraphQL"],

    i: 1,
  },
  {
    title: "UI/UX",
    description: "GOOGLE UX CERTIFICATION COURSE",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1643978167/PASSION_PROJECTS_eph1py.svg",
    tags: ["Adobe Creative Cloud Products"],

    i: 2,
  },
  {
    title: "PASSION PROJECTS",
    description: "INDIE GAME DESIGN AND DEVELOPMENT",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1644349589/gamedev_tt1isx.png",
    tags: ["Three.js", "Unity", "Blender"],

    i: 3,
  },
  {
    title: "PORTFOLIO PROJECT",
    description: "THIS PORTFOLIO PROJECT",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1643978167/PASSION_PROJECTS_eph1py.svg",
    tags: ["Next.js", "React.js", "Radix UI"],

    i: 4,
  },
  {
    title: "FREELANCE CLIENTS",
    description: "THESE ARE SOME SMALL BUSINESS WEB APPS",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1643978167/PASSION_PROJECTS_eph1py.svg",
    tags: ["Next.js", "TypeScript", "Tailwind.css"],

    i: 5,
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
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1648967012/Recruiter_gx369v.png",
    imageAlt: "joshua vaughn portfolio",
    href: "/recruiter",
  },
  {
    name: "Freelance",
    description: "Let's build together!",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1648966991/Freelance_fgje1v.png",

    imageAlt: "contract me",
    href: "/contract",
  },
  {
    name: "Personal",
    description: "See What I'm Up To...",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1648967008/Personal_nxvarr.png",

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
      "url('https://res.cloudinary.com/dpytkhyme/image/upload/v1684165000/Portfolio/herobg_wpswd0.png')",
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
