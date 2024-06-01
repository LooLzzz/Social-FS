import pool from "../config/db"

export interface User {
    id?: number
    first_name: string
    last_name: string
    email: string
    create_date: Date
    update_date: Date
}

export class UserModel {
    static async create(user: User): Promise<User> {
        const user_query = 'INSERT INTO users (first_name, last_name, email, create_date, update_date) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const values = [user.first_name, user.last_name, user.email, new Date(), new Date()];
        const { rows } = await pool.query(user_query, values);
        return rows[0]    
    }
}