import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";

const userRepo = AppDataSource.getRepository(User);

const createUserUseCase = new CreateUserUseCase(userRepo);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
