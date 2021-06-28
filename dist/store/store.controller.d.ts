import { StoreService } from './store.service';
export declare class StoreController {
    private storeService;
    constructor(storeService: StoreService);
    getInventory(): Record<string, string>;
    getInventoryItemByName(name: string): string;
    deleteInventoryItem(name: string): string;
    upsertInventoryItem(name: string, amount: string): string;
}
