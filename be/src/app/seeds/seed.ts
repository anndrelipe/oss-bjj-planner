import { Technique } from 'src/technique/entities/technique.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { adminCredentials } from './admin-user.seed';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/user/enums/role.enum';
import { AccountStatus } from 'src/user/enums/account-status.enum';
import { TechniqueSeed } from './technique.seed';
import { Profile } from 'src/profile/entities/profile.entity';

async function run() {
  const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'oss',
    password: '97486640',
    synchronize: false,
    entities: [User, Profile, Technique],
  });

  await dataSource.initialize();

  const userRepository = dataSource.getRepository(User);
  const techniqueRepository = dataSource.getRepository(Technique);

  const adminExists = await userRepository.findOneBy({
    email: adminCredentials.email,
  });
  if (!adminExists) {
    const admin = userRepository.create({
      email: adminCredentials.email,
      hashedPassword: await bcrypt.hash(adminCredentials.password, 10),
      role: Role.ADMIN,
      accountStatus: AccountStatus.ACTIVE,
    });
    await userRepository.save(admin);
    console.log('✅ Admin has just been created.');
  }

  for (const tech of TechniqueSeed) {
    const exists = await techniqueRepository.findOneBy({ title: tech.title });
    if (!exists) {
      const technique = techniqueRepository.create({
        ...tech,
      });
      await techniqueRepository.save(technique);
    }
  }

  console.log('✅ BJJ techniques has just been populates!');
  await dataSource.destroy();
}

run();
