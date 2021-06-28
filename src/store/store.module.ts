import { Module } from '@nestjs/common';
import { InventoryRepository } from './inventory.repository';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';

@Module({
  imports: [],
  controllers: [StoreController],
  providers: [StoreService, InventoryRepository],
})
export class StoreModule {}
