import pool from "../config/db"

export interface UserAuth {
    auth_id?: number
    user_id?: number
    password_hash: string
    last_login: Date
}

export class UserAuthModel {
    static async create(userId: number, hashedPassword: string): Promise<UserAuthModel> {
        const query = 'INSERT INTO users_auth (user_id, password_hash, last_login) VALUES ($1, $2, $3) RETURNING *'
        const values = [userId, hashedPassword, new Date()];
        const { rows } = await pool.query(query, values);
        return rows[0]    
    }
}