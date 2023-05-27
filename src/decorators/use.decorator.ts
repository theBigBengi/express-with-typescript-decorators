import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";
import { LoginController } from "../controllers/LoginController";

export function use(middleware: RequestHandler) {
  return function (value: Function, context: ClassMethodDecoratorContext) {
    // Limit use the of the decorator
    if (context.kind === "method") {
      // Get middlewares metadata
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, value) || [];

      // Add the new middleware
      middlewares.push(middleware);

      // Define the new middlewares metadata
      Reflect.defineMetadata(MetadataKeys.middleware, middlewares, value);
    }
  };
}
