import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const getNameOnly = (filename: string) => {
  return filename.split(".").shift();
};

readdirSync(PATH_ROUTER).filter((filename) => {
  const name = getNameOnly(filename);
  if (name != "index") {
    import(`./${name}`).then((moduleRouter) => {
      console.log(`Is loading the ${name} route`);
      router.use(`/api/${name}`, moduleRouter.router);
    });
  }
});

export { router };
