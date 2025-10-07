export interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const faqs: Omit<FAQItemProps, "index">[] = [
  {
    question: "What makes Codiate Solutions different?",
    answer:
      "We are a small team of experienced developers who are passionate about what we do. We use the latest technologies and tools to deliver high-quality software that meets your specific needs.",
  },
  {
    question: "What are your software development services?",
    answer:
      "We offer a wide range of software development services, including web development, and software maintenance and support.",
  },
  {
    question: "How can I get in touch with you?",
    answer:
      "You can contact us through our website, email, or phone. We are always happy to help you with any questions or concerns you may have.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all our software development services. If you are not satisfied with our work, you can request a refund within 30 days of your purchase.",
  },
  {
    question: "Can I get support for my software?",
    answer:
      "Yes, we offer support for all our software development services. Our support team is available 24/7 to help you with any questions or concerns you may have.",
  }
];
