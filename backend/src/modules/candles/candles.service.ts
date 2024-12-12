import { Injectable } from '@nestjs/common';
import { parse } from "csv-parse";
import { createReadStream } from "fs";
import { PrismaService } from "src/shared/database/prisma.service";
import { UploadCandleFileDto } from "../file-upload/dto/upload-candle-file-dto";

@Injectable()
export class CandlesService {

  constructor(
    private readonly prismaService: PrismaService
  ) { }

  async readCandleFile(dto: UploadCandleFileDto, filePath: string) {

    const lines = []
    createReadStream(filePath)
      .pipe(parse({ delimiter: ';', from_line: 2 }))
      .on("data", async function (row) {
        console.log(row)
        lines.push(row)
      })
      .on("end", function () {
        console.log("finished")
        console.log(lines)
      })
      .on("error", function (error) {
        console.error(error.message)
      })
  }
}
