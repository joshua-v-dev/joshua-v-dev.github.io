import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component: any, idName: string | undefined) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(Component, HOC)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl relative z-0 mx-auto`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
