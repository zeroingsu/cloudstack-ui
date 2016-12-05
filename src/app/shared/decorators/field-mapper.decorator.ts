export function FieldsMapper<T>(data: {}): ClassDecorator {
  return function (target: Function) {
    target.prototype.mapper = data;

    return target;
  };
}
