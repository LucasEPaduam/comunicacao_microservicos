import bcrypt from "bcrypt";
import UserModel from "../../modules/user/model/UserModel.js";

export async function createInitialData() {
  try {
    await UserModel.sync({ force: true });

    let password = await bcrypt.hash("123456", 10);

    await UserModel.create({
      name: "Lucas",
      email: "lucas@gmail.com",
      password: password,
    });

    await UserModel.create({
      name: "Krysttal",
      email: "krysttal@gmail.com",
      password: password,
    });

    console.log("Initial data created successfully!");
  } catch (err) {
    console.log("Error creating initial data:", err);
  }
}
