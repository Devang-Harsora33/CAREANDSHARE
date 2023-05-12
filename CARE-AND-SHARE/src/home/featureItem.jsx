import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";

export default function FeatureItem({ feature, i }) {
  const featureItem = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: .7, delay: i * 0.1 },
    },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={featureItem}
      viewport={{ amount: 0 }}
      className="flex flex-col border border-black-200 feature-item"
    >
      <div className="feature-section">
        <div className="section">
        <h4 id="h4-section">
          {feature?.title}
        </h4>
        <img src={feature?.logo} alt="feature-logo" />
      </div>
      <div className="p-6 pb-10">
        <Paragraph>{feature?.content}</Paragraph>
      </div>
      </div>
    </motion.section>
  );
}
