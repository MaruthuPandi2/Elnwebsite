// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   //  const filePath = path.join(process.cwd(), 'assets/pdf/eln-brochure.pdf');
//   const filePath = path.resolve('/assets/pdf/eln-brochure.pdf');

//   console.log('File paths:', filePath);

//   if (!fs.existsSync(filePath)) {
//     return NextResponse.json({ error: 'File not found' }, { status: 404 });
//   }

//   const file = fs.readFileSync(filePath);
//   return new NextResponse(file, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//     },
//   });
// }



// pages/api/download.js



// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   // Set the path to the PDF file
//   const filePath = path.resolve('/assets/pdf/eln-brochure.pdf');

//   // Check if the file exists
//   if (!fs.existsSync(filePath)) {
//     return NextResponse.json({ error: 'File not found' }, { status: 404 });
//   }

//   // Read the file
//   const fileBuffer = fs.readFileSync(filePath);

//   // Return the response with headers to download
//   return new NextResponse(fileBuffer, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//     },
//   });
// }



// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   const filePath = path.resolve('public/assets/pdf/eln-brochure.pdf');

//   // Check if the file exists
//   if (!fs.existsSync(filePath)) {
//     return NextResponse.json({ error: 'File not found' }, { status: 404 });
//   }

//   // Create a readable stream for the file
//   const fileStream = fs.createReadStream(filePath);

//   // Set response headers to force download
//   return new NextResponse(fileStream, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//     },
//   });
// }



// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   // Set the path to the PDF file
//   const filePath = path.resolve('public/assets/pdf/eln-brochure.pdf');
//   console.log('Resolved file path:', filePath);

//   // Check if the file exists
//   if (!fs.existsSync(filePath)) {
//     return new Response(JSON.stringify({ error: 'File not found' }), {
//       status: 404,
//       headers: new Headers({
//         'Content-Type': 'application/json',
//       }),
//     });
//   }

//   // Read the file as a Buffer
//   const fileBuffer = fs.readFileSync(filePath);

//   // Create response headers to force download
//   const responseHeaders = new Headers({
//     'Content-Type': 'application/pdf',
//     'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//     'Cache-Control': 'no-store',
//   });

//   // Double-check Content-Disposition enforcement
//   if (!responseHeaders.get('Content-Disposition')?.includes('attachment')) {
//     responseHeaders.set('Content-Disposition', 'attachment; filename="eln-brochure.pdf"');
//   }

//   // Log headers for debugging
//   console.log('Sending response with headers:', Object.fromEntries(responseHeaders.entries()));

//   // Return the response with forced download headers
//   return new Response(fileBuffer, { headers: responseHeaders });
// }


//try for versal server 


// import path from 'path';
// import { promises as fs } from 'fs';
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest): Promise<NextResponse> {
//     const filePath = path.join(process.cwd(), 'public', 'files', 'eln-brochure.pdf');
    
//     try {
//         const fileBuffer = await fs.readFile(filePath);
//         return new NextResponse(fileBuffer, {
//             headers: {
//                 'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//                 'Content-Type': 'application/pdf',
//             },
//         });
//     } catch (error) {
//         console.error('File not found or error reading file:', error);
//         return new NextResponse('File not found', { status: 404 });
//     }
// }



// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest): Promise<NextResponse> {
//     const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/files/eln-brochure.pdf`; // Base URL pointing to the static file
//     // const pdfUrl = `http://localhost:3000/files/eln-brochure.pdf`; // Base URL pointing to the static file
//     return NextResponse.redirect(pdfUrl, 302); // Redirect to the static file URL
// }



// import path from 'path';
// import { createReadStream } from 'fs';
// import { stat } from 'fs/promises';
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest): Promise<NextResponse> {
//     const filePath = path.join(process.cwd(), 'public', 'files', 'eln-brochure.pdf');

//     try {
//         // Check if file exists and get file stats
//         const fileStats = await stat(filePath);

//         // Create a readable stream for the file
//         const fileStream = createReadStream(filePath);

//         // Return the response as a stream
//         return new NextResponse(fileStream as any, {
//             headers: {
//                 'Content-Disposition': 'attachment; filename="eln-brochure.pdf"', // Explicit filename
//                 'Content-Type': 'application/pdf', // File type
//                 'Content-Length': fileStats.size.toString(), // File size
//             },
//         });
//     } catch (error) {
//         console.error('Error reading file:', error);
//         return new NextResponse('File not found', { status: 404 });
//     }
// }



// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest): Promise<NextResponse> {
//     const fileUrl = `${req.nextUrl.origin}/files/eln-brochure.pdf`;
//     return NextResponse.redirect(fileUrl, 302); // Redirect to the static file
// }


//2025-01-06

// import path from 'path';
// import { NextResponse } from 'next/server';
// import fs from 'fs';

// export async function GET(): Promise<NextResponse> {
//     const filePath = path.join(process.cwd(), 'public', 'files', 'eln-brochure.pdf');

//     if (!fs.existsSync(filePath)) {
//         return new NextResponse('File not found', { status: 404 });
//     }

//     const fileBuffer = fs.readFileSync(filePath);

//     return new NextResponse(fileBuffer, {
//         headers: {
//             'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//             'Content-Type': 'application/pdf',
//         },
//     });
// }


// import path from 'path';
// import { promises as fs } from 'fs';
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest): Promise<NextResponse> {
//     const filePath = path.join(process.cwd(), 'public', 'files', 'eln-brochure.pdf');
    
//     try {
//         const fileBuffer = await fs.readFile(filePath);

//         return new NextResponse(fileBuffer, {
//             headers: {
//                 'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//                 'Content-Type': 'application/pdf',
//             },
//         });
//     } catch (error) {
//         console.error('File not found or error reading file:', error);
//         return new NextResponse('File not found', { status: 404 });
//     }
// }


// import path from 'path';
// import { NextResponse } from 'next/server';
// import fs from 'fs';

// export async function GET() {
//     const filePath = path.join(process.cwd(), 'public', 'files', 'eln-brochure.pdf');
    
//     try {
//         const fileBuffer = fs.readFileSync(filePath);
        
//         return new NextResponse(fileBuffer, {
//             headers: {
//                 'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//                 'Content-Type': 'application/pdf',
//             },
//         });
//     } catch (error) {
//         console.error('Error serving the file:', error);
//         return new NextResponse('File not found', { status: 404 });
//     }
// }



// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function GET() {
//   // const filePath = path.join(process.cwd(), 'files/eln-brochure.pdf');
//   // const filePath = path.resolve('files', 'eln-brochure.pdf');
//   const filePath = path.join(process.cwd(), 'public', 'eln-brochure.pdf');

//   const fileBuffer = fs.readFileSync(filePath);

//   const response = new NextResponse(fileBuffer, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//     },
//   });

//   return response;
// }



// import { NextRequest } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// // Mark this route as dynamic
// export const dynamic = 'force-dynamic';

// export async function GET(req: NextRequest) {
//   try {
//     const filePath = path.join(process.cwd(), 'public', 'eln-brochure.pdf');
//     const fileContents = fs.readFileSync(filePath);

//     return new Response(fileContents, {
//       headers: {
//         'Content-Type': 'application/pdf',
//         'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//       },
//     });
//   } catch (error) {
//     console.error('Error serving the file:', error);
//     return new Response('File not found', { status: 404 });
//   }
// }


// import { NextRequest } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export const dynamic = 'force-dynamic';

// export async function GET(req: NextRequest) {
//   try {
//     const filePath = path.join(process.cwd(), 'public', 'eln-brochure.pdf');
//     const fileContents = fs.readFileSync(filePath);

//     return new Response(fileContents, {
//       headers: {
//         'Content-Type': 'application/pdf',
//         'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
//       },
//     });
//   } catch (error) {
//     console.error('Error serving the file:', error);
//     return new Response('File not found', { status: 404 });
//   }
// }


//07-01-25

// pages/api/download.tsx

// import { NextApiRequest, NextApiResponse } from 'next';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Redirecting to the static file in the 'public' folder
//   res.redirect('/eln-brochure.pdf');
// }


// api/generate-pdf.ts
// pages/api/generate-pdf.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { PDFDocument } from 'pdf-lib';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Create a new PDF document
//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 400]);
//     const { width, height } = page.getSize();

//     // Add some text to the PDF
//     page.drawText('Hello, this is your PDF!', { x: 50, y: height - 50 });

//     // Serialize the PDF to bytes
//     const pdfBytes = await pdfDoc.save();

//     // Set response headers to prompt file download
//     res.setHeader('Content-Disposition', 'attachment; filename="generated-pdf.pdf"');
//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Length', pdfBytes.length);

//     // Send the PDF bytes
//     res.status(200).send(Buffer.from(pdfBytes));
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to generate PDF', error });
//   }
// }


import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'assets', 'pdf', 'eln-brochure.pdf'); // Adjust the path as needed

  console.log('File path:', filePath);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  const file = fs.readFileSync(filePath);
  return new NextResponse(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="eln-brochure.pdf"',
    },
  });
}
