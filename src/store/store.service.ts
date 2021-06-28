import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InventoryRepository } from './inventory.repository';

@Injectable()
export class StoreService {
  constructor(private inventoryRepository: InventoryRepository) {}

  public getInventory(): Record<string, string> {
    return this.inventoryRepository.getAllInventoryItems();
  }

  public getInventoryItemByName(name: string): string {
    const data: string = this.inventoryRepository.getSingleInventoryItem(name);
    if (!data) {
      throw new HttpException(
        'Item does not exist in Inventory',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.inventoryRepository.getSingleInventoryItem(name);
  }

  public upsertInventoryItem(name: string, amount: string): string {
    this.inventoryRepository.upsertInventoryItem(name, amount);
    return `Successfully set Inventory Item: ${name.toUpperCase()} to the amount of ${amount.toUpperCase()}`;
  }

  public deleteInventoryItem(name: string): string {
    this.inventoryRepository.deleteInventoryItem(name);
    return `Successfully deleted ${name.toUpperCase()}`;
  }
}
