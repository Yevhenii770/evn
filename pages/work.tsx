import dynamic from "next/dynamic";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import type { GetStaticProps } from "next";
import { ContentfulClientFactory } from "../lib/contentful";
import { WorkBeforeAfter, WorkContent } from "../utils/types";


const WorkProject = dynamic(() => import("../components/WorkProject"), {
  ssr: false,
  loading: () => <p>Loading projects...</p>,
});

const WorkCarousel = dynamic(() => import("../components/WorkCarousel"), {
  ssr: false,
  loading: () => <p>Loading gallery...</p>,
});

const Work = (props: WorkContent) => {
  return (
    <>
      <Seo
        title={props.seo.title}
        description={props.seo.description}
        page="work"
      />

      <SectionContainer>
        <SectionHeader name={props.title} component="h1" />


        <WorkCarousel />


        {props.workBeforeAfter.map((item: WorkBeforeAfter) => (
          <WorkProject
            key={item.projectName}
            projectName={item.projectName}
            beforeMedia={item.beforeMedia}
            afterMedia={item.afterMedia}
          />
        ))}
      </SectionContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contentfulClient = await ContentfulClientFactory.getInstance();
  const workContent: WorkContent = await contentfulClient.getWorkContent();

  return { props: workContent };
};

export default Work;
