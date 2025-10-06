export interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const faqs: Omit<FAQItemProps, "index">[] = [
  {
    question: "What makes Codiate Solutions different?",
    answer:
      "MVPBlocks stands out through its intuitive design, powerful component library, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features, all while maintaining excellent performance and accessibility.",
  },
];
