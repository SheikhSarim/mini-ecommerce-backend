import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  findAll() {
    return [
      {
        id: 1,
        name: 'Sarim',
        email: 'sarim@gmail.com',
        phone: 123456789,
      },
      {
        id: 2,
        name: 'John',
        email: 'john@gmail.com',
        phone: 987654321,
      },
    ];
  }

  findUserById(id: number) {
    return {
      id,
      name: 'Sarim',
      email: 'sarim@gmail.com',
      phone: 123456789,
    };
  }

}
