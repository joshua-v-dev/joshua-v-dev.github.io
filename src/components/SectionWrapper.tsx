import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { classNames } from "~/lib/constants";

const StarWrapper = (Component: any, idName: string | undefined) => {
  const HOC = () => {
    // return function HOC() {
    return (
      <motion.section
        variants={staggerContainer(Component, HOC)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={classNames(` max-w-7xl relative z-0 mx-auto`, "padding")}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };
};
// const StarWrapper = (Component: any, idName: string | undefined) =>
//   function HOC() {
//     return (
//       <motion.section
//         variants={staggerContainer(Component, HOC)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.25 }}
//         className={`${styles.padding} max-w-7xl relative z-0 mx-auto`}
//       >
//         <span className="hash-span" id={idName}>
//           &nbsp;
//         </span>

//         <Component />
//       </motion.section>
//     );
//   };

export default StarWrapper;
