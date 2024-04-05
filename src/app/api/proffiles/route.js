
import { NextResponse, NextRequest } from 'next/server'
import { users } from './data/profiles'

export async function GET() {
    return NextResponse.json(users.isAdmin)
}