import { NextResponse, NextRequest } from 'next/server'
import { listPeople } from './data/listPeople'

export async function GET() {
  return NextResponse.json(listPeople);

}

export async function POST(res, req) {
  const data = await res.json()
  const newPeoplw = {
    id: Date.now(),
    name: data.name,
    phone: data.phone,
    isisCheck: false,
  }
  listPeople.push(newPeoplw)
  return Response.json(listPeople);
}