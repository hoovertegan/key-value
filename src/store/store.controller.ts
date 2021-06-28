import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { ApiConsumes } from '@nestjs/swagger';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Get()
  public getInventory(): Record<string, string> {
    return this.storeService.getInventory();
  }

  @Get('/:name')
  public getInventoryItemByName(@Param('name') name: string): string {
    return this.storeService.getInventoryItemByName(name);
  }

  @Delete('/:name')
  public deleteInventoryItem(@Param('name') name: string): string {
    return this.storeService.deleteInventoryItem(name);
  }

  @Put('/:name')
  @HttpCode(HttpStatus.CREATED)
  @ApiConsumes('text/plain')
  public upsertInventoryItem(
    @Param('name') name: string,
    @Body() amount: string,
  ): string {
    return this.storeService.upsertInventoryItem(name, amount);
  }
}
