import { ApiService } from '../services/ApiService';

export class UserController {
    static async getUsers() {
        return await ApiService.fetchUsers();
    }
}