// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Our Clients | Reviews | Case Studies | Agaram Technologies',
  description: 'Testimonials and case studies of satisfied customers of Agaram Technologies, showcasing our commitment to quality and innovation in laboratory software solutions',
  openGraph: {
    title: 'Our Clients | Reviews | Case Studies | Agaram Technologies',
    description: 'Testimonials and case studies of satisfied customers of Agaram Technologies, showcasing our commitment to quality and innovation in laboratory software solutions',
    url: 'https://www.logilabeln.com/company/customers', 
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
    title: 'Testimonials and case studies of satisfied customers of Agaram Technologies, showcasing our commitment to quality and innovation in laboratory software solutions',
    description: 'Learn more about our company.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },

};

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Testimonials and case studies of satisfied customers of Agaram Technologies, showcasing our commitment to quality and innovation in laboratory software solutions" />
        <meta property="og:title" content="Our Clients | Reviews | Case Studies | Agaram Technologies" />
        <meta property="og:description" content="Testimonials and case studies of satisfied customers of Agaram Technologies, showcasing our commitment to quality and innovation in laboratory software solutions" />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/company/customers" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Our Clients | Reviews | Case Studies | Agaram Technologies" />
        <meta property="twitter:description" content="Testimonials and case studies of satisfied customers of Agaram Technologies, showcasing our commitment to quality and innovation in laboratory software solutions" />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
