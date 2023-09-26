import { Resource } from '../types';
import { ResourceService } from "./resource.service";
export declare class ResourceController {
    private resource;
    constructor(resource: ResourceService);
    createResource(dto: Resource): Promise<{
        message: string;
    }>;
    getResource(): Promise<Resource[]>;
    getResourceById(id: string): Promise<Resource>;
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
