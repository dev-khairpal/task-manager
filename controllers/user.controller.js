import createUserProvider from "./providers/createUserProvider.js"

export const createUser = async(req, res, next)=>{
    try {
        const user = await createUserProvider(req, res);

    res.status(201).json({
        success:true,
        data:user
    })
    } catch (error) {
      next(error)  
    }
}

