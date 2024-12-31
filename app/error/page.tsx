// app/not-found.tsx
"use client";
import Link from 'next/link';
import Footer from '../footer';

import Image from 'next/image';
import notFoundImage from '../../public/assets/images/404_image.png';

const NotFoundPage = () => {
  return (
    <div>

      <div className="container text-center my-5">
        <Image src={notFoundImage} alt="404 Not Found" className="img-fluid" />
        <h1 className="mt-4">Page Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link href="/" className="btn btn-primary mt-3">
          Go to Homepage
        </Link>
      </div>
      <Footer /> {/* Include your footer component */}
    </div>
  );
};

export default NotFoundPage;
