import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'eln-brochure.pdf'); // Path to your PDF file
    const fileExists = fs.existsSync(filePath);

    if (!fileExists) {
      res.status(404).json({ message: 'File not found' });
      return;
    }

    const stat = fs.statSync(filePath);

    res.setHeader('Content-Disposition', 'attachment; filename="eln-brochure.pdf"');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', stat.size);

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error('Error serving file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
