import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(): Promise<void>;
    getUser(): Promise<{
        status: string;
        message: string;
    }>;
    updateUser(): Promise<void>;
    deleteUser(): Promise<void>;
}
