import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Client } from '../models/client.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ClientService } from '../services/client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post()
  create(@Body() Client: Client): Observable<Client> {
    return this.clientService.createClient(Client);
  }

  @Get()
  findAll(): Observable<Client[]> {
    return this.clientService.findAllClients();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() ClientPost: Client,
  ): Observable<UpdateResult> {
    return this.clientService.updateClient(id, ClientPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.clientService.deleteClient(id);
  }
}
