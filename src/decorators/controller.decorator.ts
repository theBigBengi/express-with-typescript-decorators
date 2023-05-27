import { AppRouter } from "../AppRouter";
import { MetadataKeys } from "./MetadataKeys";
import { Methods } from "./MethodsKeys";
import { validateBody } from "../middlewares/validateBody";

export function controller(pathPrefix: string) {
  const router = AppRouter.getInstance;

  // Decorators on class allways return Class constructor as first argument
  return function (target: Function, context: ClassDecoratorContext) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype[key]
      );

      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype[key]
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype[key]) ||
        [];

      const requiredsBodyFields =
        Reflect.getMetadata(MetadataKeys.validate, target.prototype[key]) || [];

      const validator = validateBody(requiredsBodyFields);

      if (path) {
        // Register route
        router[method](
          `${pathPrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    });
  };
}
