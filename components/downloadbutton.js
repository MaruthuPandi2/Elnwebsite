// components/DownloadButton.js
'use client';

export default function DownloadButton() {
  const handleDownload = async () => {
    // const response = await fetch('/api/download-pdf');
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

  return <button onClick={handleDownload}>Download PDF</button>;
}
