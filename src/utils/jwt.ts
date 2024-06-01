import jwt from 'jsonwebtoken'

const EXPIRE_TIME = "5m"
const secret = process.env.JWT_SECRET || 'your-secret-key'

export const generateToken = (payload: object): string => {
    return jwt.sign(payload, secret, {expiresIn: EXPIRE_TIME})
}

export const verifyToken = (token: string): any => {
    try {
        return jwt.verify(token, secret)
    } catch (err) {
        return null
    }
}