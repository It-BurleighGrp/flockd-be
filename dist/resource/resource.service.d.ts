import { PrismaService } from "src/prisma/prisma.service";
import { Resource } from '../interfaces';
export declare class ResourceService {
    private prisma;
    constructor(prisma: PrismaService);
    createResource(dto: Resource): Promise<{
        message: string;
    }>;
    getResource(): Promise<{
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
    getResourceById(id: string): Promise<{
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
    }>;
    updateResource(id: string, dto: Resource): Promise<{
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
    }>;
    deleteResource(id: string): Promise<{
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
    }>;
}
