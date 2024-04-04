import { NextResponse, NextRequest } from 'next/server'

import { promises as fs } from 'fs';


const listPeople = await fs.readFile(process.cwd() + '/src/app/api/listPeople/data/listPeople.json', 'utf-8');
const listData = JSON.parse(listPeople);

export async function GET() {
  return NextResponse.json(listData);

}

export async function POST(res, req) {
  const data = await res.json()
  const newPeoplw = {
    id: Date.now(),
    name: data.name,
    phone: data.phone,
    isisCheck: false,
  }
  listData.push(newPeoplw)
  await fs.writeFile(process.cwd() + '/src/app/api/listPeople/data/listPeople.json', JSON.stringify(listData))
  console.log(listData)
  return Response.json(listData);
}