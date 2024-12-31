// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Terms & Conditions | Privacy Policy | Agaram Technologies',
  description: 'Read Agaram Technologies’ Terms and Conditions for a clear understanding of your rights and responsibilities when using our lab software solutions',
  openGraph: {
    title: 'Terms & Conditions | Privacy Policy | Agaram Technologies',
    description: 'Read Agaram Technologies’ Terms and Conditions for a clear understanding of your rights and responsibilities when using our lab software solutions',
    url: 'https://www.logilabeln.com/company/terms-conditions', 
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
    title: 'Terms & Conditions | Privacy Policy | Agaram Technologies',
    description: 'Read Agaram Technologies’ Terms and Conditions for a clear understanding of your rights and responsibilities when using our lab software solutions',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },

};

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Read Agaram Technologies’ Terms and Conditions for a clear understanding of your rights and responsibilities when using our lab software solutions" />
        <meta property="og:title" content="Terms & Conditions | Privacy Policy | Agaram Technologies" />
        <meta property="og:description" content="Read Agaram Technologies’ Terms and Conditions for a clear understanding of your rights and responsibilities when using our lab software solutions" />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/company/terms-conditions" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Terms & Conditions | Privacy Policy | Agaram Technologies" />
        <meta property="twitter:description" content="Read Agaram Technologies’ Terms and Conditions for a clear understanding of your rights and responsibilities when using our lab software solutions" />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
