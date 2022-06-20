
import RecruiterHero from "components/Hero/RecruiterHero";
import RecruiterMain from "components/Main/RecruiterMain";
const Recruiter = () =>
{
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
