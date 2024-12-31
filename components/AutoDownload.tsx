'use client';

// import { useEffect } from 'react';

export default function AutoDownload() {
  // Trigger the download as soon as the page loads
  if (typeof window !== 'undefined') {
    window.onload = async () => {
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
    };
  }

  return <div>Downloading your file...</div>;
}
