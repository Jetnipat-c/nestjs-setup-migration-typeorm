import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

export class SeedUserData1664003879880 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Seeding User data');
    const userRepository = queryRunner.manager.getRepository(User);
    await userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          id: '1ac2cda1-7b9d-4774-b99c-cae158de7cfb',
          username: 'a@onepay.com',
          email: 'a@onepay.com',
          password: '12345678',
          name: 'A',
          surName: 'Onepay',
          phone: '0000000000',
          birthday: '01/11/2499',
        },
        {
          id: '575cb2da-f99a-42e4-b6b7-d99a98ebb3a4',
          username: 'b@onepay.com',
          email: 'b@onepay.com',
          password: '12345678',
          name: 'B',
          surName: 'Onepay',
          phone: '0000000001',
          birthday: '02/11/2499',
        },
        {
          id: '2b15aae3-ee66-46f5-a47e-5e380873475d',
          username: 'c@onepay.com',
          email: 'c@onepay.com',
          password: '12345678',
          name: 'C',
          surName: 'Onepay',
          phone: '0000000002',
          birthday: '03/11/2499',
        },
      ])
      .execute();
    console.log('Seeded User successfully');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.clearTable('user');
  }
}
