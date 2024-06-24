import { ApiService } from '../src/services/ApiService';

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
        const transformedUser = ApiService.transformUser(sampleUser);
        expect(transformedUser.lastActivity).toBe('2021-06-01T00:00:00.000Z');
        expect(transformedUser.isPaying).toBe(true);
        expect(transformedUser.isActive).toBe(true);
        expect(transformedUser.email).toBe('jo*********oe@example.com');
    });
});
