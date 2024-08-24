import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import path from 'path';
import fs from 'fs';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Archivos')
@Controller('files')
export class FilesController {
  @Get(':type/:filename/:ext')
  getFile(
    @Param('type') type: string,
    @Param('filename') filename: string,
    @Param('ext') exts: string,
    @Res() res: Response,
  ) {
    const rutaBase = path.join(__dirname, '..', '..', '..', 'shared', type);

    for (const ext of exts.split(',')) {
      const ruta = path.join(rutaBase, filename + '.' + ext);

      if (fs.existsSync(ruta)) {
        return res.sendFile(ruta);
      }
    }

    throw new Error("El archivo solicitado no existe");
  }

  @Post(':filename')
  @UseInterceptors(FileInterceptor('image'))
  upsert(
    @UploadedFile() image: Express.Multer.File,
    @Param('filename') filename: string,
  ) {
    const uploadPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'shared',
      'products',
      `${String(filename).trim()}.${image.mimetype.split('/')[1]}`,
    );

    fs.mkdirSync(path.dirname(uploadPath), { recursive: true });
    fs.writeFileSync(uploadPath, image.buffer);

    return {
      message: 'Archivo procesado exitosamente',
      filename,
    };
  }

  @Post(':filename/:type')
  @UseInterceptors(FileInterceptor('image'))
  upsertAll(
    @UploadedFile() image: Express.Multer.File,
    @Param('filename') filename: string,
    @Param('type') type: string,
  ) {
    const uploadPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'shared',
      type,
      `${String(filename).trim()}.${image.mimetype.split('/')[1]}`,
    );

    fs.mkdirSync(path.dirname(uploadPath), { recursive: true });
    fs.writeFileSync(uploadPath, image.buffer);

    return {
      message: 'Archivo procesado exitosamente',
      filename,
    };
  }
}
