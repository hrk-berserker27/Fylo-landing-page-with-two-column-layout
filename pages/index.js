import Head from "next/head";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Access from "../components/Access";
import Footer from "../components/Footer";
export default function App() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This is a landing page" />
        <meta
          name="keywords"
          content="Next.js,react,javascript,SASS,SCSS,CSS,HTML-5,Progressive-Web-app,Landing page"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>

        <title>
          Frontend Mentor | Fylo landing page with two column layout
        </title>
      </Head>
      <Navbar />
      <Landing />
      <Features />
      <Access />
      <Footer />
    </>
  );
}
