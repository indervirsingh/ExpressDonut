import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { User, UserModel } from '../models/user.model'
import { HTTP_BAD_REQUEST } from '../constants/http_status'
import bcrypt from 'bcryptjs'

exports.login = asyncHandler( async (req, res) => {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.send(generateTokenResponse(user))
    } else {
        res.status(HTTP_BAD_REQUEST).send("Username or Password is invalid!")
    }
})


exports.register = asyncHandler( async (req: any, res: any) => {
    const { name, email, password, address } = req.body
    const user = await UserModel.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(HTTP_BAD_REQUEST)
        .send('User already exists, please login!')
        return
    }

    const encryptedPassword = await bcrypt.hash(password, 10)

    const newUser: User = {
        name,
        email: String(email).toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false
    }

    const dbUser = await UserModel.create(newUser)
    res.send(generateTokenResponse(dbUser))
})


const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        id: user.id, email: user.email, isAdmin: user.isAdmin
    }, process.env.JWT_SECRET!, {
        expiresIn: "30d"
    })

    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
    }
}