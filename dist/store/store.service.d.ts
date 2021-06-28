import { InventoryRepository } from './inventory.repository';
export declare class StoreService {
    private inventoryRepository;
    constructor(inventoryRepository: InventoryRepository);
    getInventory(): Record<string, string>;
    getInventoryItemByName(name: string): string;
    upsertInventoryItem(name: string, amount: string): string;
    deleteInventoryItem(name: string): string;
}
