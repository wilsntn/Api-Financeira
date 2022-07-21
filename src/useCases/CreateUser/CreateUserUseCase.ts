import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { v4 as uuid } from "uuid";

const userRepo = AppDataSource.getRepository(User);

export class CreateUserUseCase {
  constructor(private usersRepository: typeof userRepo) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findOne({
      where: { firstName: data.firstname },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = this.usersRepository.create({
      firstName: data.firstname,
      cpf: data.cpf,
      user_id: uuid(),
    });
    return this.usersRepository.save(user);
  }
}
