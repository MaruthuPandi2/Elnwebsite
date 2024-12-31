// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Electronic Lab Notebooks for Academia | Research Data Management | Logilab ELN',
  description: 'Enhance academic research and increase productivity — Capture accurate data, execute experiments, track inventory usage, collaborate with peers and more with our integrated ELN solution.',
  openGraph: {
    title: 'Electronic Lab Notebooks for Academia | Research Data Management | Logilab ELN',
    description: 'Enhance academic research and increase productivity — Capture accurate data, execute experiments, track inventory usage, collaborate with peers and more with our integrated ELN solution.',
    url: 'https://www.logilabeln.com//solution/academics', 
    images: [
      {
        url: 'https://www.logilabeln.com/assets/images/eln_logo.svg', 
        width: 1200,
        height: 630,
        alt: 'About Us Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electronic Lab Notebooks for Academia | Research Data Management | Logilab ELN',
    description: 'Enhance academic research and increase productivity — Capture accurate data, execute experiments, track inventory usage, collaborate with peers and more with our integrated ELN solution.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Enhance academic research and increase productivity — Capture accurate data, execute experiments, track inventory usage, collaborate with peers and more with our integrated ELN solution." />
        <meta property="og:title" content="Electronic Lab Notebooks for Academia | Research Data Management | Logilab ELN" />
        <meta property="og:description" content="Enhance academic research and increase productivity — Capture accurate data, execute experiments, track inventory usage, collaborate with peers and more with our integrated ELN solution." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com//solution/academics" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Electronic Lab Notebooks for Academia | Research Data Management | Logilab ELN" />
        <meta property="twitter:description" content="Enhance academic research and increase productivity — Capture accurate data, execute experiments, track inventory usage, collaborate with peers and more with our integrated ELN solution." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
