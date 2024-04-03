import { NextResponse } from 'next/server'
import {keys} from './data/keys'

export async function GET() {
  return NextResponse.json(keys);
}


// export default function handler (req:any, res:any) {
//   res.status(200).json(keys)
// }