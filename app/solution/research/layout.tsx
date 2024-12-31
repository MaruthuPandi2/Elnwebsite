// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Reliable, Compliant Data | Standardized Lab Data Management | R & D | Logilab ELN',
  description: 'Optimize R&D processes and get closer to your breakthroughs. Manage samples, prepare SOPs, execute task orders and monitor workflows while meeting compliance requirements with Logilab ELN.',
  openGraph: {
    title: 'Reliable, Compliant Data | Standardized Lab Data Management | R & D | Logilab ELN',
    description: 'Optimize R&D processes and get closer to your breakthroughs. Manage samples, prepare SOPs, execute task orders and monitor workflows while meeting compliance requirements with Logilab ELN.',
    url: 'https://www.logilabeln.com//solution/research', 
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
    title: 'Reliable, Compliant Data | Standardized Lab Data Management | R & D | Logilab ELN',
    description: 'Optimize R&D processes and get closer to your breakthroughs. Manage samples, prepare SOPs, execute task orders and monitor workflows while meeting compliance requirements with Logilab ELN.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Optimize R&D processes and get closer to your breakthroughs. Manage samples, prepare SOPs, execute task orders and monitor workflows while meeting compliance requirements with Logilab ELN." />
        <meta property="og:title" content="Reliable, Compliant Data | Standardized Lab Data Management | R & D | Logilab ELN" />
        <meta property="og:description" content="Optimize R&D processes and get closer to your breakthroughs. Manage samples, prepare SOPs, execute task orders and monitor workflows while meeting compliance requirements with Logilab ELN." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com//solution/research" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Reliable, Compliant Data | Standardized Lab Data Management | R & D | Logilab ELN" />
        <meta property="twitter:description" content="Optimize R&D processes and get closer to your breakthroughs. Manage samples, prepare SOPs, execute task orders and monitor workflows while meeting compliance requirements with Logilab ELN." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
