import { Controller, Delete, Get, Param, Patch, Body, Post, UseGuards, Req } from '@nestjs/common';
import { WithdrawalService } from './withdrawal.service';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { WithdrawalDto } from './dto/withdrawal.dto';
import { WithdrawalEntity } from './entities/withdrawal.entity';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { AuthGuardRequest } from 'src/common/dto/guard.dto';
import { AuthService } from 'src/auth/auth.service';
import { MyInfoService } from 'src/myinfo/myinfo.service';

@Controller('MyDocuments/withdrawal')
@ApiTags('MyDocuments/withdrawal')
export class WithdrawalController {
  constructor(private withdrawalService: WithdrawalService, 
    private authService: AuthService, 
    private myInfoService: MyInfoService) {}

  @Post()
  @ApiCreatedResponse({ type: WithdrawalEntity })
  @UseGuards(JwtAuthGuard)
  async createWithdrawalData( @Body() withdrawalDto: WithdrawalDto, @Req() req: AuthGuardRequest) {
    const res = await this.authService.getEmail(req);
    const email = res.email;
    
    const user = await this.myInfoService.findOnebyEmail(email);
    const userId = user.id;
    return this.withdrawalService.createWithdrawalData(withdrawalDto, userId);
  }

  @Get(':id')
  @ApiOkResponse({ type: WithdrawalEntity })
  returnWithdrawalData( @Param('id') id: string) {
    return this.withdrawalService.returnWithdrawalData(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: WithdrawalEntity })
  updateWithdrawalData( @Param('id') id: string, @Body('data') data: WithdrawalDto) {
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
