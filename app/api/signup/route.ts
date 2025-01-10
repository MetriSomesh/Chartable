import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/app/db";
export async function POST(req: NextRequest) {
  const body = await req.json();

  const { email, password,firstName, lastName } = body;
  const userPass = password;
  const hashedPass = await bcrypt.hash(userPass, 10);

  try {
    await prisma.$connect();

    const isUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (isUser) {
      return NextResponse.json(
        {
          msg: "user already exists",
        },
        { status: 401 }
      );
    }
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPass,
        firstName: firstName,
        lastname: lastName,
        RSSFeed:""
      },
    });

    await prisma.$disconnect();

    return NextResponse.json(
      {
        msg: "User Created Successfully",
        user: newUser,
      },
      { status: 200 }
    );
  } catch (error) {
    await prisma.$disconnect();
    console.log(error);
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
