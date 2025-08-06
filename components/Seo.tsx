import Head from "next/head";
import { SeoProps } from "../utils/types";

export default function Seo(props: SeoProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.evnhandyman.com";
  const canonicalUrl =
    process.env.NEXT_PUBLIC_CANONICAL_URL || "https://www.evnhandyman.com";

  const canonicalLink =
    !props.page || props.page === "home"
      ? canonicalUrl
      : `${canonicalUrl}/${props.page}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "EVN Handyman",
    image: `${baseUrl}/handyman_evn_logo_light.png`,
    url: canonicalUrl,
    telephone: "+1-503-422-0863",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      postalCode: "97232",
      addressCountry: "US",
    },
    description:
      "EVN Handyman provides reliable handyman services in Portland and Beaverton: TV mounting, painting, drywall, and more.",
    priceRange: "$$",
    areaServed: {
      "@type": "Place",
      name: "Portland, Beaverton",
    },
  };

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} key="desc" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={`${baseUrl}/favicon.ico`} />
      <meta property="og:url" content={canonicalLink} />
      <meta
        name="google-site-verification"
        content="2QWyydu_8ee9Vu8eeDv1wQ_iL3MPfIUSSB_utACksBY"
      />
      <link rel="canonical" href={canonicalLink} key="canonical" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
}
