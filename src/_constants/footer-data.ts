import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const data = {
  facebookLink: "https://facebook.com/codiate_solutions",
  instaLink: "https://instagram.com/codiate_solutions",
  services: {
    webdev: "/web-development",
    webdesign: "/web-design",
    webmaintainance: "/web-maintainance",
    emailtemplates: "/email-templates",
    seo: "/search-engine-optimization",
    qatests: "/qa-tests",
  },
  about: {
    story: "/company-story",
    team: "/meet-the-team",
    handbook: "/employee-handbook",
    careers: "/careers",
  },
  help: {
    faqs: "/faqs",
    support: "/support",
  },
  contact: {
    email: "info@codiate_solutions.com",
    phone: "+27 78 653 2395",
    address: "Cape Town, South Africa",
  },
  company: {
    name: "Codiate Solutions",
    description:
      "Building beautiful and functional web experiences with modern technologies. We help businesses create their digital presence.",
    logo: "/images/codiate-favicon.svg",
  },
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
];

const aboutLinks = [
  { text: "Company Story", href: data.about.story },
  { text: "Meet the Team", href: data.about.team },
  { text: "Employee Handbook", href: data.about.handbook },
  { text: "Careers", href: data.about.careers },
];

const serviceLinks = [
  { text: "Web Development", href: data.services.webdev },
  { text: "Web Design", href: data.services.webdesign },
  { text: "Web Maintainance", href: data.services.webmaintainance },
  { text: "Email Templates", href: data.services.emailtemplates },
  { text: "SEO", href: data.services.seo },
  { text: "QA Tests", href: data.services.qatests },
];

const helpfulLinks = [
  { text: "FAQs", href: data.help.faqs },
  { text: "Support", href: data.help.support },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export {
  data,
  socialLinks,
  aboutLinks,
  serviceLinks,
  helpfulLinks,
  contactInfo,
};
