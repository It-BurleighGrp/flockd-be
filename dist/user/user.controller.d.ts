import { UserService } from './user.service';
export declare class UserController {
    private user;
    constructor(user: UserService);
    createUser(): Promise<void>;
    getUser(): Promise<{
        status: string;
        message: string;
    }>;
    updateUser(): Promise<void>;
    deleteUser(): Promise<void>;
}
