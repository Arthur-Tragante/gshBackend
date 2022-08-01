import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ClientEntity } from '../models/client.entity';
import { Client } from '../models/client.interface';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  createClient(clientPost: Client): Observable<Client> {
    return from(this.clientRepository.save(clientPost));
  }

  findAllClients(): Observable<Client[]> {
    return from(this.clientRepository.find());
  }

  updateClient(id: number, client: Client): Observable<UpdateResult> {
    return from(this.clientRepository.update(id, client));
  }

  deleteClient(id: number): Observable<DeleteResult> {
    return from(this.clientRepository.delete(id));
  }
}
