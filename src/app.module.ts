import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ShopsController } from './shops/shops.controller';
import { ConfigModule } from '@nestjs/config';

import environments from 'config/environments';
import { configuration, validationSchema } from 'config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [configuration],
      validationSchema: validationSchema,
    }),
  ],
  controllers: [AppController, UsersController, ShopsController],
  providers: [AppService],
})
export class AppModule {}
