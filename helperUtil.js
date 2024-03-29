import * as Crypto from 'expo-crypto';

export const PostBody =(title,body,pic)=>{
    console.log("pic ", pic)
    const sendBody = { id : Crypto.randomUUID(),title,body,pic}
    return sendBody
}