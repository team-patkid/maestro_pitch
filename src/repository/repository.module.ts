import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogExperienceEntity } from './entity/log-experience.entity';
import { UsersEntity } from './entity/users.entity';
import { LogExperienceRepositoryService } from './service/log-experience.repository.service';
import { UsersRepositoryService } from './service/users.repository.service';
import { AddressEntity } from './entity/address.entity';
import { AddressRepositoryService } from './service/address.repository.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity, LogExperienceEntity, AddressEntity]),
  ],
  providers: [
    UsersRepositoryService,
    LogExperienceRepositoryService,
    AddressRepositoryService,
  ],
  exports: [
    UsersRepositoryService,
    LogExperienceRepositoryService,
    AddressRepositoryService,
  ],
})
export class RepositoryModule {}
