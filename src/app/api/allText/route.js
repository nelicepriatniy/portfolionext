import { NextResponse, NextRequest } from 'next/server'
import { promises as fs } from 'fs';
import { revalidatePath, revalidateTag } from 'next/cache';

const data = await fs.readFile(process.cwd() + '/src/app/api/allText/data/text.json', 'utf-8');
const dataText = JSON.parse(data);
let copyDataText = structuredClone(dataText)


export async function GET() {
    return NextResponse.json(copyDataText);
}

export async function POST(res, req) {
    const datares = await res.json();
    let copyDataResText = structuredClone(datares)
    if(copyDataResText.frontPageHeading != '') {
        copyDataText[0].frontPageHeading = copyDataResText.frontPageHeading
    }
    if(copyDataResText.frontPageText != '') {
        copyDataText[0].frontPageText = copyDataResText.frontPageText
    }
    if(copyDataResText.frontPageSubHeading != '') {
        copyDataText[0].frontPageSubHeading = copyDataResText.frontPageSubHeading
    }
    await fs.writeFile(process.cwd() + '/src/app/api/allText/data/text.json', JSON.stringify(copyDataText))
    location.reload(true);
    return Response.json(copyDataText)
}