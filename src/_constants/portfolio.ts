type project = {
  id: number;
  name: string;
  role: string;
  image: string;
  recentProject?: boolean;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
};

const portfolioProjects: project[] = [
  {
    id: 1,
    name: "Yaro Donald",
    role: "CEO & Founder",
    recentProject: false,
    image:
      "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid",
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Timothy Marcus",
    role: "CTO",
    recentProject: true,

    image:
      "https://img.freepik.com/premium-photo/png-headset-headphones-portrait-cartoon_53876-762197.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid",
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "David Locklear",
    role: "Lead Designer",
    recentProject: false,

    image:
      "https://img.freepik.com/premium-photo/png-cartoon-portrait-glasses-white-background_53876-905385.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid",
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Marketing Director",
    recentProject: false,

    image:
      "https://img.freepik.com/premium-psd/3d-avatar-character_975163-690.jpg?ga=GA1.1.1818589012.1736774497&semt=ais_hybrid",
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export { portfolioProjects, type project };
