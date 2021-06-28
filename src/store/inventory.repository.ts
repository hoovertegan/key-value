import { HttpException, HttpStatus } from '@nestjs/common';
import * as fs from 'fs';

export class InventoryRepository {
  private inventoryDBPath = __dirname + '/../../src/store/inventoryDB.json';

  private dbErrorMessage = 'Error Connecting to the DB';

  private getDataFromMockDatabase(): Record<string, string> {
    try {
      const fileData = JSON.parse(
        fs.readFileSync(this.inventoryDBPath, 'utf8'),
      );
      return fileData;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        this.dbErrorMessage,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private writeDatatoDB(data: Record<string, string>): void {
    try {
      JSON.stringify(data);
      fs.writeFileSync(this.inventoryDBPath, JSON.stringify(data));
    } catch (error) {
      console.error(error);
      throw new HttpException(
        this.dbErrorMessage,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public getAllInventoryItems(): Record<string, string> {
    return this.getDataFromMockDatabase();
  }

  public getSingleInventoryItem(name: string): string {
    const data: Record<string, string> = this.getDataFromMockDatabase();
    return data[name];
  }

  public upsertInventoryItem(name: string, amount: string): string {
    const data: Record<string, string> = this.getDataFromMockDatabase();
    data[name] = amount;
    this.writeDatatoDB(data);
    return 'SUCCESS';
  }

  public deleteInventoryItem(name: string): void {
    const data: Record<string, string> = this.getDataFromMockDatabase();
    if (data[name]) {
      delete data[name];
      return this.writeDatatoDB(data);
    } else {
      throw new HttpException(
        'Item does not exist in DB',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
