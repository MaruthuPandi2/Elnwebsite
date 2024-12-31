// app/about/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Resources | Downloads | ELN | Logilab ELN | Agaram Technologies',
  description: 'Stay ahead with our expert insights and solutions by diving deep into Agaram Technologies’ downloads.',

  openGraph: {
    title: 'Resources | Downloads | ELN | Logilab ELN | Agaram Technologies',
    description: 'Stay ahead with our expert insights and solutions by diving deep into Agaram Technologies’ downloads.',
    url: 'https://www.logilabeln.com/resource/download', 
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
    title: 'Resources | Downloads | ELN | Logilab ELN | Agaram Technologies',
    description: 'Stay ahead with our expert insights and solutions by diving deep into Agaram Technologies’ downloads.',
    images: ['https://www.logilabeln.com/assets/images/eln_logo.svg'], 
  },
}

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Stay ahead with our expert insights and solutions by diving deep into Agaram Technologies’ downloads." />
        <meta property="og:title" content="Resources | Downloads | ELN | Logilab ELN | Agaram Technologies" />
        <meta property="og:description" content="Stay ahead with our expert insights and solutions by diving deep into Agaram Technologies’ downloads." />
        <meta property="og:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
        <meta property="og:url" content="https://www.logilabeln.com/resource/download" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Resources | Downloads | ELN | Logilab ELN | Agaram Technologies" />
        <meta property="twitter:description" content="Stay ahead with our expert insights and solutions by diving deep into Agaram Technologies’ downloads." />
        <meta property="twitter:image" content="https://www.logilabeln.com/assets/images/eln_logo.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
