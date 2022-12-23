import RecruiterHero from "../Hero/RecruiterHero";
import RecruiterMain from "../Main/RecruiterMain";

const Recruiter = () => {
  return (
    <>
      <section className="container max-w-max overflow-hidden rounded-xl bg-transparent py-5 opacity-100 2xl:py-10">
        <RecruiterHero />
        <RecruiterMain />
      </section>
    </>
  );
};
export default Recruiter;
