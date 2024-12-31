// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'QC Labs | QA Automation | Data Capture | 21 CFR Part 11 Compliance | Logilab ELN',
  description: 'Streamline and standardize research data on all levels of QC testing —  Guarantee product traceability and tighten quality control with Agaram’s comprehensive ELN.',
  openGraph: {
    title: 'QC Labs | QA Automation | Data Capture | 21 CFR Part 11 Compliance | Logilab ELN',
    description: 'Streamline and standardize research data on all levels of QC testing —  Guarantee product traceability and tighten quality control with Agaram’s comprehensive ELN.',
    url: 'https://www.logilabeln.com/solution/qa_qc_lab', 
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
    title: 'QC Labs | QA Automation | Data Capture | 21 CFR Part 11 Compliance | Logilab ELN',
    description: 'Streamline and standardize research data on all levels of QC testing —  Guarantee product traceability and tighten quality control with Agaram’s comprehensive ELN.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Streamline and standardize research data on all levels of QC testing —  Guarantee product traceability and tighten quality control with Agaram’s comprehensive ELN." />
        <meta property="og:title" content="QC Labs | QA Automation | Data Capture | 21 CFR Part 11 Compliance | Logilab ELN" />
        <meta property="og:description" content="Streamline and standardize research data on all levels of QC testing —  Guarantee product traceability and tighten quality control with Agaram’s comprehensive ELN." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/solution/qa_qc_lab" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="QC Labs | QA Automation | Data Capture | 21 CFR Part 11 Compliance | Logilab ELN" />
        <meta property="twitter:description" content="Streamline and standardize research data on all levels of QC testing —  Guarantee product traceability and tighten quality control with Agaram’s comprehensive ELN." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
