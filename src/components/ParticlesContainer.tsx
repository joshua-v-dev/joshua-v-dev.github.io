// import { useCallback } from "react";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { Engine } from "tsparticles-engine";
// import { options } from "~/lib/constants";

const ParticlesContainer = () => {
  // const loadFull = useCallback((main: Engine) => {
  //   // loadFull requires an async function
  //   (async () => {
  //     await loadFull(main);
  //   })();
  // }, []);

  // const customInit = useCallback((main: Engine) => {
  //   loadFull(main);
  // }, []);

  // const customLoaded = useCallback((container: any) => {
  //   console.log(container);
  // }, []);

  return <Particles id="tsparticles" />;
};

export default ParticlesContainer;
