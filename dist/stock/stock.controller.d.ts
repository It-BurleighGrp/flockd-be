import { StockService } from './stock.service';
import { Stock } from '../interfaces';
export declare class StockController {
    private stock;
    constructor(stock: StockService);
    createStockResource(dto: Stock): Promise<void>;
    getStockResource(): Promise<{
        id: number;
        name: string;
        type: string;
        quantity: number;
    }[]>;
    updateStockResource(dto: Stock): Promise<void>;
    deleteStockResource(id: string): Promise<{
        id: number;
        name: string;
        type: string;
        quantity: number;
    }>;
}
