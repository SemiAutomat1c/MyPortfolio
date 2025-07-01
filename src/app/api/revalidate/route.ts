import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { path } = await request.json();
    
    if (typeof path !== 'string') {
      return NextResponse.json(
        { message: 'Path must be a string' },
        { status: 400 }
      );
    }

    revalidatePath(path);
    
    return NextResponse.json(
      { revalidated: true, message: `Revalidated ${path}` },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    );
  }
} 