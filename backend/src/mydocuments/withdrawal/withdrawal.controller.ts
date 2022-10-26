import { Controller, Delete, Get, Param, Patch, Body, Post } from '@nestjs/common';
import { WithdrawalService } from './withdrawal.service';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { WithdrawalDto } from './dto/withdrawal.dto';
import { WithdrawalEntity } from './entities/withdrawal.entity';

@Controller('MyDocuments/withdrawal')
@ApiTags('MyDocuments/withdrawal')
export class WithdrawalController {
  constructor(private withdrawalService: WithdrawalService) {}

  @Post()
  @ApiCreatedResponse({ type: WithdrawalEntity })
  createWithdrawalData( @Body() withdrawalDto: WithdrawalDto ) {
    return this.withdrawalService.createWithdrawalData(withdrawalDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: WithdrawalEntity })
  returnWithdrawalData( @Param('id') id: string) {
    return this.withdrawalService.returnWithdrawalData(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: WithdrawalEntity })
  updateWithdrawalData( @Param('id') id: string, @Body('data') data: WithdrawalDto) {
    console.log(data)
    return this.withdrawalService.updateWithdrawalData(+id, data);
  }

  @Delete(':id')
  @ApiOkResponse({ type: WithdrawalEntity })
  removeWithdrawalData( @Param('id') id: string) {
    return this.withdrawalService.removeWithdrawalData(+id);
  }

  @Get(':id/print')
  @ApiOkResponse({ type: WithdrawalEntity })
  generateWithdrawal( @Param('id') id: string) {
    return this.withdrawalService.generateWithdrawal(+id);
  }
}
