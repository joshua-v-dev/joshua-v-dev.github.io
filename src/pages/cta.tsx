import Cta from "../components/Page/Cta";
import HomeCta from "../components/MultiComp/HomeCta";
import Layout from "../layout/Layout";

const CtaPage = () => {
  return (
    <>
      <Layout>
        <Cta />
        <HomeCta />
      </Layout>
    </>
  );
};
export default CtaPage;
