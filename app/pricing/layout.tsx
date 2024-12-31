// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Logilab ELN | Affordable, Robust Electronic Lab Notebook | ROI of 9x -15x',
  description: 'Explore Logilab ELN’s pricing plans and their features to choose the best one for your team!',
  openGraph: {
    title: 'Logilab ELN | Affordable, Robust Electronic Lab Notebook | ROI of 9x -15x',
    description: 'Explore Logilab ELN’s pricing plans and their features to choose the best one for your team!',
    url: 'https://www.logilabeln.com/pricing', 
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
    title: 'Logilab ELN | Affordable, Robust Electronic Lab Notebook | ROI of 9x -15x',
    description: 'Explore Logilab ELN’s pricing plans and their features to choose the best one for your team!',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Explore Logilab ELN’s pricing plans and their features to choose the best one for your team!" />
        <meta property="og:title" content="Logilab ELN | Affordable, Robust Electronic Lab Notebook | ROI of 9x -15x" />
        <meta property="og:description" content="Explore Logilab ELN’s pricing plans and their features to choose the best one for your team!" />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/pricing" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Logilab ELN | Affordable, Robust Electronic Lab Notebook | ROI of 9x -15x" />
        <meta property="twitter:description" content="Explore Logilab ELN’s pricing plans and their features to choose the best one for your team!" />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
