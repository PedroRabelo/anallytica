import { Body, Controller, ParseFilePipeBuilder, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
import { CandlesService } from "../candles/candles.service";
import { UploadCandleFileDto } from "./dto/upload-candle-file-dto";
import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(
    private readonly fileUploadService: FileUploadService,
    private readonly candleService: CandlesService
  ) { }

  @Post('candles')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCandlesFile(
    @Body() dto: UploadCandleFileDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'csv',
        })
        .build(),
    )
    file: Express.Multer.File,
  ) {
    const response = this.fileUploadService.handleFileUpload(file);

    if (response) {
      return await this.candleService.readCandleFile(dto, response.filePath)
    }
  }
}
