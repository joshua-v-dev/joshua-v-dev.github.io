import RecruiterHero from "../Hero/RecruiterHero";
import RecruiterMain from "../Main/RecruiterMain";

const Recruiter = () => {
  return (
    <>
      <div className=" overflow-hidden rounded-xl bg-transparent py-5 opacity-100 2xl:py-10">
        <RecruiterHero />
        <RecruiterMain />
      </div>
    </>
  );
};
export default Recruiter;
