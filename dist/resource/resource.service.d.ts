import { PrismaService } from "src/prisma/prisma.service";
export declare class ResourceService {
    private prisma;
    constructor(prisma: PrismaService);
    sendData(): Promise<void>;
    getData(): Promise<void>;
}
