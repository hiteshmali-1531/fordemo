import path from 'path';
import fs,{writeFile,mkdir} from 'fs/promises'
import { NextResponse } from 'next/server';

export const POST = async(request) =>{
    const body = await request.formData();
    const file = body.get("file");
    const dir = body.get("fileName");
    let email = body.get("email")
    console.log(email)

    if(file){
        try{
            const buffer = Buffer.from(await file.arrayBuffer());
            const fileName = file.name.replaceAll(" ","_");

            email = email.substring(0, email.lastIndexOf('@'))
            console.log(email)
            try{
                await mkdir(path.join(`public/${email}`));
                await mkdir(path.join(`public/${email}/${dir}`))
            }catch(e){
                try{
                    await mkdir(path.join(`public/${email}/${dir}`))
                }catch(e){

                }
            }
            
            await writeFile(path.join(`public/${email}/${dir}/${fileName}`),buffer);
            return NextResponse.json({msg:true});
        }catch(err){
            console.log(err)
        }
    }
    // console.log(file)
    
    // console.log(body)
}