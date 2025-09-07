import { hash, compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { findUserByEmail, insertUser } from "../models/User.js"
import { ApiError } from "../helper/ApiError.js"

const { sign } = jwt

// Käyttäjän rekisteröinti
const signUp = async (req, res, next) => {
  const { user } = req.body
  try {
    if (!user || !user.email || !user.password) {
      return next(new ApiError("Email and password are required", 400))
    }

// Tarkista, onko käyttäjä jo olemassa

    const existing = await findUserByEmail(user.email)
    if (existing.rows.length > 0) {
      return next(new ApiError("User already exists", 400))
    }

    const hashedPassword = await hash(user.password, 10)
    const result = await insertUser(user.email, hashedPassword)

    return res.status(201).json({
      id: result.rows[0].id,
      email: result.rows[0].email
    })
  } catch (error) {
    return next(error)
  }
}

// Käyttäjän kirjautuminen
const signIn = async (req, res, next) => {
  const { user } = req.body
  try {
    if (!user || !user.email || !user.password) {
      return next(new ApiError("Email and password are required", 400))
    }

    const result = await findUserByEmail(user.email)
    if (result.rows.length === 0) {
      return next(new ApiError("User not found", 404))
    }

    const dbUser = result.rows[0]
    const match = await compare(user.password, dbUser.password)
    if (!match) {
      return next(new ApiError("Invalid password", 401))
    }

    const token = jwt.sign(
      { email: dbUser.email },
      process.env.JWT_SECRET_KEY
    )

    return res.status(200).json({
      id: dbUser.id,
      email: dbUser.email,
      token
    })
  } catch (error) {
    return next(error)
  }
}

export { signUp, signIn }