import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
import { Resource } from '../types';
export declare class ResourceService {
    private prisma;
    private config;
    constructor(prisma: PrismaService, config: ConfigService);
    sendData(dto: Resource): Promise<{
        message: string;
    }>;
    getData(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        model: string;
        type: string;
        serial: string;
        photo: string;
        responsible: string;
        localization: string;
        price: string;
        others: string;
        status: string;
    }[]>;
}
