import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import JSONbuildtime from "../components/datatable.jsx";

const IndexPage = () => (
    <Layout>
      <SEO title="kAAmer repository"/>
      <JSONbuildtime/>
    </Layout>
);

export default IndexPage;
