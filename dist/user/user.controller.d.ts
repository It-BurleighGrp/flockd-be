import { UserService } from './user.service';
import { Users } from '@prisma/client';
export declare class UserController {
    private user;
    constructor(user: UserService);
    createUser(): Promise<void>;
    getMeUser(user: Users): {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        birthDate: string;
        hash: string;
        email: string;
        phone: string;
        role: string;
        photo: string;
    };
    updateUser(): Promise<void>;
    deleteUser(): Promise<void>;
}
