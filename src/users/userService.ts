import pool from "../config/db";
import { UserAuthModel } from "./userAuthModel";

import { User, UserModel } from "./userModel";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10

export class UserService {
    static async createUser(data: User & { password: string }): Promise<User> {
        const client = await pool.connect();
        try {
            await client. query('BEGIN');
            const user = await UserModel.create(data)

            const passwordHash = await bcrypt.hash(data.password, SALT_ROUNDS)
            await UserAuthModel.create(user.id as number, passwordHash);
            await client.query('COMMIT');

            return user
        } catch (error) {
            await client.query("ROLLBACK")
            throw error
        } finally {
            client.release()
        }

    }
}