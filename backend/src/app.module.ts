import { Module } from '@nestjs/common';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { CandlesModule } from './modules/candles/candles.module';
import { FileUploadModule } from "./modules/file-upload/file-upload.module";
import { DatabaseModule } from "./shared/database/database.module";

@Module({
  imports: [
    DatabaseModule,
    FileUploadModule,
    AnalyticsModule,
    CandlesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
