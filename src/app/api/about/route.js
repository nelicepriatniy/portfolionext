import { NextResponse } from 'next/server'
import { promises as fs } from 'fs';

const file = await fs.readFile(process.cwd() + '/src/app/api/about/data/text.json', 'utf-8');
const fileData = JSON.parse(file);


// const listPeople = await fs.readFile(process.cwd() + '/src/app/api/listPeople/data/listPeople.json', 'utf-8');
// const listData = JSON.parse(listPeople);

export async function GET() {
    return NextResponse.json(fileData);

}