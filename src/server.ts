import { app } from "./app";

app.listen(3333, () => {
  console.log(`[server]: Server is running at http://localhost:3333`);
});

/**
 * @LEMBRAR Alterar a entidade com os campos que existem no teste user.lastName and user.age
 * @Test db Function
 import { AppDataSource } from "./data-source";
import { User } from "./entities/User";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));  
 */
