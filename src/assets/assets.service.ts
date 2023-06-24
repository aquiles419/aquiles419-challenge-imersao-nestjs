import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  async create(data: { id: string; symbol: string }) {
    return await this.prismaService.assets.create({
      data,
    });
  }

  async all() {
    return await this.prismaService.assets.findMany();
  }
}
