import { PrismaService } from 'src/prisma/prisma.service';
import { Stock } from 'src/types';
export declare class StockService {
    private prisma;
    constructor(prisma: PrismaService);
    createStockResource(dto: Stock): Promise<void>;
    getStockResource(): Promise<{
        id: number;
        name: string;
        type: string;
        quantity: number;
    }[]>;
    updateStockResource(): Promise<void>;
    deleteStockResource(id: string): Promise<{
        id: number;
        name: string;
        type: string;
        quantity: number;
    }>;
}
