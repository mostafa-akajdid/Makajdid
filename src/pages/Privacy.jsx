import { Helmet } from "react-helmet-async";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollUp from "../components/scrollUp/ScrollUp";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Mostafa Akajdid</title>
        <meta
          name="description"
          content="Privacy policy for Mostafa Akajdid's portfolio site."
        />
        <link rel="canonical" href="https://makajdid.vercel.app/privacy" />
        <meta property="og:title" content="Privacy Policy — Mostafa Akajdid" />
        <meta
          property="og:description"
          content="Privacy policy for Mostafa Akajdid's portfolio site."
        />
        <meta
          property="og:url"
          content="https://makajdid.vercel.app/privacy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://makajdid.vercel.app/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Privacy Policy — Mostafa Akajdid"
        />
        <meta
          name="twitter:description"
          content="Privacy policy for Mostafa Akajdid's portfolio site."
        />
        <meta
          name="twitter:image"
          content="https://makajdid.vercel.app/og-image.png"
        />
      </Helmet>
      <Header />
      <main className="main">
        <section className="privacy">
          <div className="privacy__container">
            <h1 className="privacy__title">Privacy Policy</h1>
            <p className="privacy__subtitle">Last updated: July 2026</p>

            <p className="privacy__text">
              This site is a personal portfolio. It doesn&apos;t sell your
              data, track you across the web, or share your information with
              advertisers. Here&apos;s exactly what happens when you use it.
            </p>

            <h2 className="privacy__heading">Information I Collect</h2>
            <p className="privacy__text">
              If you use the contact form, I collect the name, email address,
              and message you submit. That&apos;s it. I use this information
              only to respond to you, and I don&apos;t add you to any mailing
              list or share it with third parties.
            </p>

            <h2 className="privacy__heading">Analytics</h2>
            <p className="privacy__text">
              This site may use privacy-friendly analytics (such as Vercel
              Analytics) to understand traffic, like which pages get visited and
              roughly where from. This doesn&apos;t use cookies and doesn&apos;t
              identify you personally.
            </p>

            <h2 className="privacy__heading">
              Hosting &amp; Third-Party Services
            </h2>
            <p className="privacy__text">
              This site is hosted on Vercel. Contact form submissions may pass
              through an email delivery service to reach my inbox. These
              providers process data on my behalf and don&apos;t use it for
              their own purposes.
            </p>

            <h2 className="privacy__heading">Your Rights</h2>
            <p className="privacy__text">
              You can ask me to delete any information you&apos;ve submitted
              through the contact form at any time. Just email me and I&apos;ll
              take care of it.
            </p>

            <h2 className="privacy__heading">Contact</h2>
            <p className="privacy__text">
              Questions about this policy? Reach out at{" "}
              <a
                href="mailto:mostafaakajdid6@gmail.com"
                className="privacy__link"
              >
                mostafaakajdid6@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollUp />
      <SpeedInsights />
    </>
  );
};

export default Privacy;
