import FutureHero from "~/components/FutureHero";
import FutureMain from "~/components/FutureMain";
//import { ComputersCanvas } from "~/components/canvas";

const FuturePage = () => {
  return (
    <>
      {/* <div className=" z-10000 inset-0 grid overflow-hidden">
        <ComputersCanvas />
      </div> */}
      <FutureHero />
      <FutureMain />
    </>
  );
};
export default FuturePage;
