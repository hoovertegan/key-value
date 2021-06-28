export declare class InventoryRepository {
    private inventoryDBPath;
    private dbErrorMessage;
    private getDataFromMockDatabase;
    private writeDatatoDB;
    getAllInventoryItems(): Record<string, string>;
    getSingleInventoryItem(name: string): string;
    upsertInventoryItem(name: string, amount: string): string;
    deleteInventoryItem(name: string): void;
}
