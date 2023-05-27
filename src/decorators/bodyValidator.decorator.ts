import { RequestHandler } from "express";
import { MetadataKeys } from "./MetadataKeys";

export function bodyValidator(...keys: string[]) {
  return function (
    originalMethod: RequestHandler,
    context: ClassMethodDecoratorContext
  ) {
    Reflect.defineMetadata(MetadataKeys.validate, keys, originalMethod);
  };
}
