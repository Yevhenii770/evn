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

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} key="desc" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:image"
        content={`${baseUrl}/handyman_evn_logo_light.png`}
      />
      <meta property="og:url" content={canonicalLink} />
      <link rel="canonical" href={canonicalLink} key="canonical" />
    </Head>
  );
}
