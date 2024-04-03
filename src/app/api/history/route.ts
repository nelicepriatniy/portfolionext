import {historyItems} from './data/history';
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  return NextResponse.json(historyItems);
}

export async function POST(req:Request) {
    const body = await req.json()

    return NextResponse.json({body})
}