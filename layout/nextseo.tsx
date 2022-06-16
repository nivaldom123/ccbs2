import Head from "next/head";
import { MetaProps } from "typings/pages";

const NextSEO = ({
  title = "Loading...",
  description = "Exchange rates converter web application",
  coverImage = "",
}: MetaProps) => {
  return (
    <Head>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />
      {/* Description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      {/* Image */}
      <meta name="twitter:image" content={coverImage} />
      <meta property="og:image" content={coverImage} />
      {/* URL */}
      {/* <meta property="og:url" content="https://www.icanpostapp.app" />
      <meta name="twitter:site" content="@icanpostapp" /> */}
      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* Favicon */}
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="icons/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="icons/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="icons/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="icons/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="icons/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="icons/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="icons/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="icons/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="icons/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="icons/favicon-128.png"
        sizes="128x128"
      />
      <meta name="application-name" content="&nbsp;" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="icons/mstile-144x144.png" />
      <meta name="theme-color" content="#000000" />
    </Head>
  );
};
export default NextSEO;
