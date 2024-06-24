import axios from 'axios';
import { User } from '../models/User';
import { obfuscateEmail } from '../utils/EmailUtils';
import { Logger } from '../logs/logger';

const API_URL = process.env.API_URL || 'http://0.0.0.0:8080';

export class ApiService {
    static async fetchUsers(): Promise<User[]> {
        try {
            const response = await axios.get(`${API_URL}/users`);
            Logger.log(`Fetched ${response.data.length} users`);
            return response.data.map(ApiService.transformUser);
        } catch (error) {
            Logger.error('Error fetching users');
            throw error;
        }
    }

    static transformUser(user: any): User {
        const isActive = user.status !== 'disabled';
        const lastActivityDate = new Date(user.last_activity * 1000).toISOString();
        return {
            id: user.id,
            name: user.name,
            email: obfuscateEmail(user.email),
            lastActivity: lastActivityDate,
            isPaying: isActive && (user.role === 'admin' || user.role === 'editor'),
            isActive: isActive,
        };
    }
}
