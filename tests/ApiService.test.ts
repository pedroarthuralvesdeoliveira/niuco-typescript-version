import { ApiService } from '../src/services/ApiService';
import { User } from '../src/models/User';

describe('ApiService', () => {
    test('transformUser correctly transforms user data', () => {
        const sampleUser = {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
            last_activity: 1622499200,
            role: 'admin',
            status: 'enabled'
        };
        const transformedUser: User = ApiService.transformUser(sampleUser);
        expect(transformedUser.lastActivity).toBe('2021-05-31T22:13:20.000Z');
        expect(transformedUser.isPaying).toBe(true);
        expect(transformedUser.isActive).toBe(true);
        expect(transformedUser.email).toBe('jo****oe@example.com');
    });
});
