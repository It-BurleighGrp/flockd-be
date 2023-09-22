import { Resource } from '../types';
import { ResourceService } from "./resource.service";
export declare class ResourceController {
    private resource;
    constructor(resource: ResourceService);
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
