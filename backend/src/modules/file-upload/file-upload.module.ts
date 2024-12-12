import { Module } from '@nestjs/common';
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import * as path from "path";
import { CandlesService } from "../candles/candles.service";
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: path.resolve(__dirname, "..", "..", "..", "temp"),
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  ],
  controllers: [FileUploadController],
  providers: [FileUploadService, CandlesService],
})
export class FileUploadModule { }
