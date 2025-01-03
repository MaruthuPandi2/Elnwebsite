import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl;
    
    // Check if the request is for the PDF file
    if (url.pathname === '/files/eln-brochure.pdf') {
        const response = NextResponse.rewrite(url);
        
        // Add headers to force download
        response.headers.set('Content-Disposition', 'attachment; filename="eln-brochure.pdf"');
        response.headers.set('Content-Type', 'application/pdf');
        return response;
    }

    // Allow other requests to pass through
    return NextResponse.next();
}
