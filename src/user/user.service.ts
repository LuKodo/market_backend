import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { encryptData } from './encrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private repository: typeof User,
  ) {}

  async login(body: Partial<User>) {
    const userFound = await this.repository.findOne({
      where: {
        name: body.name,
      },
    });

    if (!userFound) {
      throw new NotFoundException(`El usuario '${body.name}' no existe`);
    }

    const isMatch = encryptData(body.password).toString() === userFound.password;

    if (!isMatch) {
      throw new NotFoundException(`Contraseña incorrecta`);
    }

    return userFound;
  }
}
