// 'use client';

// export default function DownloadButton() {
//   const handleDownload = async () => {
//     try {
//       const response = await fetch('/api/download');
//       if (response.ok) {
//         const blob = await response.blob();
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = 'eln-brochure.pdf'; // Name of the downloaded file
//         document.body.appendChild(link);
//         link.click();
//         link.remove();
//         window.URL.revokeObjectURL(url);
//       } else {
//         console.error('File download failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error during file download:', error);
//     }
//   };

//   return <button onClick={handleDownload}>Download PDF</button>;
// }


'use client';

import { useEffect } from 'react';

export default function DownloadPage() {
  useEffect(() => {
    const downloadFile = async () => {
      try {
        const response = await fetch('/api/download');
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'eln-brochure.pdf';
          document.body.appendChild(link);
          link.click();
          link.remove();
          window.URL.revokeObjectURL(url);
        } else {
          console.error('File download failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error during file download:', error);
      }
    };

    downloadFile();
  }, []);

  return (
    <div>
      {/* <h1>Thank You for Submitting the Form!</h1> */}
      {/* <p>Your download should start automatically. If not, <a href="/api/download">click here</a>.</p> */}
      <a href="/api/download"></a>
    </div>
  );
}
