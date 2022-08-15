import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get, Query, Post, Body, Param } from '@nestjs/common';

@Controller('email')
export class EmailController {
  constructor(private mailService: MailerService) {}

  @Get('email')
  async plainTextEmail(
    @Query('toemail') toemail,
    @Query('msg') msg,
    @Query('subject') subject,
  ) {
    await this.mailService.sendMail({
      to: toemail,
      from: 'comercial1@gshengenharia.com.br',
      subject: subject,
      text: msg,
    });
    return 'Sucesso';
  }

  @Post('html')
  async postHTMLEmail(@Body() payload) {
    await this.mailService.sendMail({
      to: payload.toemail,
      from: payload.from,
      subject: payload.subject,
      template: 'mail',
      context: {
        text: payload,
      },
      attachments: [
        {
          filename: payload.name,
          path: payload.url,
        },
      ],
    });
    return 'success';
  }
}
