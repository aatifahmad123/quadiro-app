import bcrypt from 'bcrypt'

export const hashPassword = async (password)=>{
    try {
        const hashedpassword = await bcrypt.hash(password,10)
        return hashedpassword
    } catch (error) {
        console.log(error)
    }
}

export const comparePaasword = async (password,hashedpassword) =>{
    return bcrypt.compare(password,hashedpassword);
}