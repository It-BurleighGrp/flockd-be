import { UserService } from './user.service';
export declare class UserController {
    private user;
    constructor(user: UserService);
    createUser(): Promise<void>;
    getUser(): Promise<void>;
    updateUser(): Promise<void>;
    deleteUser(): Promise<void>;
}
