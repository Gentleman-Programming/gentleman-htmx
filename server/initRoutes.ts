import Users from "../app/model/users";
import app from "../server/express";
import { Response, Request } from "express";

export const initRoutes = () => {
  app.get("/", async (_req: Request, res: Response) => {
    const users = await Users.findAndCountAll();
    return res.render("index", { users: users.rows });
  });

  app.post("/submit", async (req: Request, res: Response) => {
    const user = {
      name: req.body.name,
      age: req.body.age,
    };

    console.log(user);
    await Users.create(user).then(() => {
      return res.render("components/userItem", { user });
    });
  });

  app.delete("/delete/:id", async (req: Request, res: Response) => {
    let foundUser = await Users.findByPk(req.params.id);
    console.log(foundUser);
    foundUser && (await foundUser.destroy());
    console.log("deleted");
    return res.send("");
  });
};
