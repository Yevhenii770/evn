import dynamic from 'next/dynamic';
import { Box, Typography, Button } from "@mui/material";
import type { GetStaticProps } from "next";
import Seo from "../components/Seo";
import SectionHeader from "../components/SectionHeader";
import { ContentfulClientFactory } from "../lib/contentful";
import { HomeContent, HomeProps, ReviewCardContent } from "../utils/types";


const HeroSection = dynamic(() => import("../components/HeroSection"), { ssr: false });
const ReviewCard = dynamic(() => import("../components/ReviewCard"), { ssr: false });

const Home = (props: HomeProps) => {
  return (
    <>
      <Seo title={props.seo.title} description={props.seo.description} page="" />

      <HeroSection
        headline={props.headline}
        subHeadline={props.subHeadline}
        heroText={props.heroText}
        callToActionButtonText={props.callToActionButtonText}
        subCallToActionButtonText={props.subCallToActionButtonText}
        seo={props.seo}
        leaveReviewCallToAction={props.leaveReviewCallToAction}
      />

      <SectionHeader name="Recent Reviews" component="h2" />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          justifyContent: "center",
          gridGap: "35px",
          marginBottom: "40px",
        }}
      >
        {props.recentReviews.map((review: ReviewCardContent) => (
          <ReviewCard
            key={review.firstName}
            firstName={review.firstName}
            stars={review.stars}
            review={review.review}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "120px",
          marginBottom: "40px",
          gap: "25px",
        }}
      >
        <Typography variant="h5" component="h3" textAlign="center">
          {props.leaveReviewCallToAction}
        </Typography>

        <Button
          component="a"
          variant="contained"
          size="large"
          href="https://www.yelp.com/writeareview/biz/Tjd61VdWKmHV1P1KFRLLLA?return_url=%2Fbiz%2FTjd61VdWKmHV1P1KFRLLLA&review_origin=biz-details-war-button"
          target="_blank"
        >
          Leave a Review
        </Button>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contentfulClient = await ContentfulClientFactory.getInstance();
  const homeContent: HomeContent = await contentfulClient.getHomeContent();
  const recentReviews: ReviewCardContent[] = contentfulClient.getFakeReviewData();

  return {
    props: {
      ...homeContent,
      recentReviews: recentReviews.slice(recentReviews.length - 4),
    },
  };
};

export default Home;
