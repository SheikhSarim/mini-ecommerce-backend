import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: '1', name: 'Sarim', email: 'sarim@gmail.com', phone: 123456789 },
    { id: '2', name: 'John', email: 'john@gmail.com', phone: 987654321 },
  ];

  findAll() {
    return this.users;
  }

  findUserById(id: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('User not found');

    return user;
  }
}
