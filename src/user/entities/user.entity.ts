import { GlobalEntity } from '../../global-entities/global-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class User extends GlobalEntity {
  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  surName: string;

  @Column()
  phone: string;

  @Column()
  birthday: string;
}
