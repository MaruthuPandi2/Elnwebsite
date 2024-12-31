// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   // Define the path to your PDF in the public folder
//   const filePath = path.join(process.cwd(), 'public/assets/pdf/eln-brochure.pdf');
//   console.log('file path:',filePath)
//   // Check if the file exists
//   if (!fs.existsSync(filePath)) {
//     return new NextResponse(JSON.stringify({ error: 'File not found' }), {
//       status: 404,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }

//   // Read the file into a buffer
//   const fileBuffer = fs.readFileSync(filePath);

//   // Send the PDF file with headers that trigger a download
//   return new NextResponse(fileBuffer, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="eln-brochure.pdf"', // Forces download
//       'Cache-Control': 'no-store', // Prevents caching
//     },
//   });
// }


// import { NextResponse } from 'next/server';
// import fs from 'fs';

// export async function GET() {
//   // Path to the PDF file on the server
//   const filePath = 'C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/ROOT/assets/pdf/eln-brochure.pdf';

//   // Check if the file exists
//   if (!fs.existsSync(filePath)) {
//     return NextResponse.json({ error: 'File not found' }, {
//       status: 404,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }

//   // Read the file as a Buffer
//   const fileBuffer = fs.readFileSync(filePath);

//   // Return the response with headers to enforce download
//   return new NextResponse(fileBuffer, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="eln-brochure.pdf"', // Force download
//       'Content-Length': String(fileBuffer.length),  // Convert length to string
//       'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
//       'Pragma': 'no-cache',
//       'Expires': '0',
//     },
//   });
// }


import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET() {
  // Path to the PDF file on the server
  const filePath = 'C:/Program Files/Apache Software Foundation/Tomcat 9.0/webapps/ROOT/assets/pdf/eln-brochure.pdf';

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Create a readable stream to serve as the response
  const fileStream = fs.createReadStream(filePath);
  const readableStream = new ReadableStream({
    start(controller) {
      fileStream.on('data', (chunk) => controller.enqueue(chunk));
      fileStream.on('end', () => controller.close());
      fileStream.on('error', (err) => controller.error(err));
    }
  });

  // Return the response with headers to force download
  return new NextResponse(readableStream, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}
