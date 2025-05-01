import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Try both paths and return results
    const results = {
      dataFolder: null,
      publicFolder: null,
      error: null as string | null
    };
    
    try {
      // Check data folder
      const dataPath = path.join(process.cwd(), 'data', 'projects.json');
      if (fs.existsSync(dataPath)) {
        const dataContents = fs.readFileSync(dataPath, 'utf8');
        results.dataFolder = JSON.parse(dataContents).length || 0;
      }
    } catch (error: any) {
      results.error = `Data folder error: ${error.message}`;
    }
    
    try {
      // Check public folder
      const publicPath = path.join(process.cwd(), 'public', 'data', 'projects.json');
      if (fs.existsSync(publicPath)) {
        const publicContents = fs.readFileSync(publicPath, 'utf8');
        results.publicFolder = JSON.parse(publicContents).length || 0;
      }
    } catch (error: any) {
      results.error = `${results.error || ''} Public folder error: ${error.message}`;
    }
    
    // Return test results
    return NextResponse.json(results, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: `General error: ${error.message}` },
      { status: 500 }
    );
  }
} 