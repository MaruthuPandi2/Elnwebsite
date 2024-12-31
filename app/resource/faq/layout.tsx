// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Frequently Asked Questions | ELN | Logilab ELN | Agaram Technologies',
  description: 'Read FAQs about Agaram Technologies’ Logilab ELN and get to know how our Electronic Lab Notebook can be of benefit to you.',

  openGraph: {
    title: 'Frequently Asked Questions | ELN | Logilab ELN | Agaram Technologies',
    description: 'Read FAQs about Agaram Technologies’ Logilab ELN and get to know how our Electronic Lab Notebook can be of benefit to you.',
    url: 'https://www.logilabeln.com/resource/faq', 
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
    title: 'Frequently Asked Questions | ELN | Logilab ELN | Agaram Technologies',
    description: 'Read FAQs about Agaram Technologies’ Logilab ELN and get to know how our Electronic Lab Notebook can be of benefit to you.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Read FAQs about Agaram Technologies’ Logilab ELN and get to know how our Electronic Lab Notebook can be of benefit to you." />
        <meta property="og:title" content="Frequently Asked Questions | ELN | Logilab ELN | Agaram Technologies" />
        <meta property="og:description" content="Read FAQs about Agaram Technologies’ Logilab ELN and get to know how our Electronic Lab Notebook can be of benefit to you." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/resource/faq" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Frequently Asked Questions | ELN | Logilab ELN | Agaram Technologies" />
        <meta property="twitter:description" content="Read FAQs about Agaram Technologies’ Logilab ELN and get to know how our Electronic Lab Notebook can be of benefit to you." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
