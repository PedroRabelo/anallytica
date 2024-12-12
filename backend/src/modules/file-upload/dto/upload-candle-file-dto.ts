import { IsNotEmpty, IsString } from "class-validator";

export class UploadCandleFileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  index: string;

  @IsString()
  @IsNotEmpty()
  timeframe: string;
}