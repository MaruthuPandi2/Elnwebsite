// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: '21 CFR Part 11 Compliance | ALCOA | GLP | Logilab ELN  ',
  description: 'Seamlessly adhere to 21 CFR Part 11, GxP standards, ALCOA Data Integrity principles, etc. Trace the flow through version control and ensure reliable data at all times with Logilab ELN.',
  openGraph: {
    title: '21 CFR Part 11 Compliance | ALCOA | GLP | Logilab ELN',
    description: 'Seamlessly adhere to 21 CFR Part 11, GxP standards, ALCOA Data Integrity principles, etc. Trace the flow through version control and ensure reliable data at all times with Logilab ELN.',
    url: 'https://www.logilabeln.com//solution/integrity', 
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
    title: '21 CFR Part 11 Compliance | ALCOA | GLP | Logilab ELN',
    description: 'Seamlessly adhere to 21 CFR Part 11, GxP standards, ALCOA Data Integrity principles, etc. Trace the flow through version control and ensure reliable data at all times with Logilab ELN.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Seamlessly adhere to 21 CFR Part 11, GxP standards, ALCOA Data Integrity principles, etc. Trace the flow through version control and ensure reliable data at all times with Logilab ELN." />
        <meta property="og:title" content="21 CFR Part 11 Compliance | ALCOA | GLP | Logilab ELN" />
        <meta property="og:description" content="Seamlessly adhere to 21 CFR Part 11, GxP standards, ALCOA Data Integrity principles, etc. Trace the flow through version control and ensure reliable data at all times with Logilab ELN." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com//solution/integrity" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="21 CFR Part 11 Compliance | ALCOA | GLP | Logilab ELN" />
        <meta property="twitter:description" content="Seamlessly adhere to 21 CFR Part 11, GxP standards, ALCOA Data Integrity principles, etc. Trace the flow through version control and ensure reliable data at all times with Logilab ELN." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
