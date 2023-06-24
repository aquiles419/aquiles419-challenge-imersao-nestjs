import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async create(data: { asset_id: string; price: number }) {
    const asset = await this.prismaService.assets.findUnique({
      where: { id: data.asset_id },
    });

    if (!asset) {
      throw new NotFoundException('Asset_id provided does not exist.');
    }

    return await this.prismaService.orders.create({
      data: {
        asset: { connect: { id: data.asset_id } },
        price: data.price,
      },
    });
  }

  async all() {
    return await this.prismaService.orders.findMany();
  }
}
