import { NextResponse } from "next/server";
import prismadb from "@/libs/prismadb";
import bcrypt from "bcrypt"

export async function POST(
  req: Request,
){
  try{

    const body = await req.json();

    const { email, password } = body;
    
    if(!email || !password){
      return new NextResponse("Missing data", {status: 500});
    }

    const userAlreadyExist = await prismadb.user.findFirst({
        where: {
            email: email,
        }
    })

    if(userAlreadyExist?.id){
      return new NextResponse("User already exist", {status: 500});
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prismadb.user.create({
      data: {
        email: email,
        hashedPassword: hashedPassword,
      }
    });
    const id = newUser.id
    const Dinero = 1000;
    const Madera = 0;
    const Piedra = 0;
    const Caballeros = 0;
    const Arqueras = 0;

    const newGame = await prismadb.game.create({
      data: {
        id: id,
        dinero: Dinero,
        Madera: Madera,
        Piedra: Piedra,
        Caballeros: Caballeros,
        Arqueras: Arqueras,
      }
    });

    return NextResponse.json(newGame), NextResponse.json(newUser);
    
  } catch(err: any){
    console.log("REGISTER_ERR: " + err);
    return new NextResponse(err, {status: 500});
  }
}