import { Module } from '@nestjs/common';
import { HealthCheckGateway } from './health-check.gateway';

@Module({
  imports: [],
  providers: [HealthCheckGateway],
})
export class HealthCheckModule {}
