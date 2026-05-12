import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Check if email already exists
    const existing = await prisma.waitlist.findUnique({
      where: { email },
    })

    if (existing) {
      return NextResponse.json({ message: "Already on the waitlist!" }, { status: 200 })
    }

    // Save to database
    await prisma.waitlist.create({
      data: { email, source: "website" },
    })

    return NextResponse.json({ message: "Successfully joined waitlist!" }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to join" }, { status: 500 })
  }
}