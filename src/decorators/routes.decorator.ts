import { RequestHandler } from "express";
import { MetadataKeys } from "./MetadataKeys";
import { Methods } from "./MethodsKeys";

function routeBinder(method: string) {
  return function (path: string) {
    return function (
      originalMethod: RequestHandler,
      context: ClassMethodDecoratorContext
    ) {
      // Path metadata
      Reflect.defineMetadata(MetadataKeys.path, path, originalMethod);
      //MethodPath metadata
      Reflect.defineMetadata(MetadataKeys.method, method, originalMethod);
    };
  };
}

// Export routes decorators
export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
export const put = routeBinder(Methods.put);
