import { motion } from "framer-motion";

export default function Section({ id, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.section>
  );
}