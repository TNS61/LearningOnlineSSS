import { FAVICON, LOGO } from "@/assets";
import "../styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Mali"].join(","),
    },
  });

  const { pathname } = useRouter();

  return (
    <ParallaxProvider scrollAxis="vertical">
      <ThemeProvider theme={theme}>
        <SEO pathname={pathname} />
        <CssBaseline />

        <Component {...pageProps} />
      </ThemeProvider>
    </ParallaxProvider>
  );
}

const SEO = ({ pathname }) => {
  let title = "สานพลัง สร้างวัฒนธรรม สื่อความสุข";
  let description = "สานพลัง สร้างวัฒนธรรม สื่อความสุข";
  let image = LOGO.src;
  let keywords = "สานพลัง สร้างวัฒนธรรม สื่อความสุข";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={FAVICON.src} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={image} />

      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:card" content="summary_large_image" />

      <meta name="viewport" content="initial-scale=1, width=device-width" />
      {/* <meta name="theme-color" content="#81c2eb"></meta> */}

      {/* <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-8K7QHJ0Z3H`}
      /> */}
    </Head>
  );
};
