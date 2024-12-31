// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Laboratory Automation | QC Labs | R & D | Data Integrity | Logilab ELN',
  description: 'Modernize your laboratory record keeping with Logilab ELN. Deliver precise QC results, centralize your R&D processes and meet 21 CFR Part 11 compliance in one unified platform.',
  openGraph: {
    title: 'Laboratory Automation | QC Labs | R & D | Data Integrity | Logilab ELN',
    description: 'Modernize your laboratory record keeping with Logilab ELN. Deliver precise QC results, centralize your R&D processes and meet 21 CFR Part 11 compliance in one unified platform.',
    url: 'https://www.logilabeln.com/solution', 
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
    title: 'Laboratory Automation | QC Labs | R & D | Data Integrity | Logilab ELN',
    description: 'Modernize your laboratory record keeping with Logilab ELN. Deliver precise QC results, centralize your R&D processes and meet 21 CFR Part 11 compliance in one unified platform.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Modernize your laboratory record keeping with Logilab ELN. Deliver precise QC results, centralize your R&D processes and meet 21 CFR Part 11 compliance in one unified platform." />
        <meta property="og:title" content="Laboratory Automation | QC Labs | R & D | Data Integrity | Logilab ELN" />
        <meta property="og:description" content="Modernize your laboratory record keeping with Logilab ELN. Deliver precise QC results, centralize your R&D processes and meet 21 CFR Part 11 compliance in one unified platform." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/solution" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Laboratory Automation | QC Labs | R & D | Data Integrity | Logilab ELN" />
        <meta property="twitter:description" content="Modernize your laboratory record keeping with Logilab ELN. Deliver precise QC results, centralize your R&D processes and meet 21 CFR Part 11 compliance in one unified platform." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
