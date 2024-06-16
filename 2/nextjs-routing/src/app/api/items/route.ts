// src/app/api/items/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('http://localhost:3001/items');
  const data = await response.json();
  return NextResponse.json(data);
}
