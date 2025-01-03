// app/page.tsx
// import DownloadButton from '@/components/DownloadButton';

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Download the Brochure</h1>
//       <DownloadButton />
//     </div>
//   );
// }


// app/page.tsx
import AutoDownload from '@/components/AutoDownload';
// import AutoDownload from "components/AutoDownload";
export default function HomePage() {
  return (
    <div>
      {/* <h1>Welcome to the Brochure Download Page</h1> */}
      <AutoDownload />
    </div>
  );
}
