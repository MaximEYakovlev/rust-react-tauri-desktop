import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports: [AdminModule],
  providers: [AuthService],
})
export class AuthModule {}
