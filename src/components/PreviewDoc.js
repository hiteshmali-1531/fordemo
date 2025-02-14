'use server'
import {readFile, readdir} from 'fs/promises'
import path from 'path'

const PreviewDoc = async(name,email) => {
    const res = await readdir(path.join(`public/${email}/${name}`))
    // console.log(res[0])
    return res[0];
    
}

export default PreviewDoc
