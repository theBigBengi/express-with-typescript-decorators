import express from "express";

/**
 * define a singleton class that's going to wrap up
 * the one single express router that's going to exist inside of our app.
 */
export class AppRouter {
  private static instance: express.Router;

  static get getInstance() {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
