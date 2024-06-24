import { UserController } from './controllers/UserController';

(async () => {
    try {
        const users = await UserController.getUsers();
        console.log(users);
    } catch (error) {
        console.error('Error:', error);
    }
})();