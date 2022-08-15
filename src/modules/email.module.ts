import { Module } from '@nestjs/common';
import { EmailController } from 'src/controllers/email.controller';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'email-ssl.com.br',
        port: 465,
        auth: {
          user: 'comercial1@gshengenharia.com.br',
          pass: 'K4nEjXKpbk&',
        },
      },
      template: {
        dir: join(__dirname, '../mails/'),
        adapter: new HandlebarsAdapter(),
      },
    }),
  ],
  controllers: [EmailController],
})
export class EmailModule {}
