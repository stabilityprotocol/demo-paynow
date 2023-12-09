/* eslint-disable @typescript-eslint/no-explicit-any */
function delay(msec: number, value: any): Promise<any> {
  return new Promise((done) => window.setTimeout(() => done(value), msec));
}

export function isResolved<T extends Promise<T>>(promise: T): Promise<boolean> {
  return Promise.race([
    delay(0, false),
    promise.then(
      () => true,
      () => false
    ),
  ]);
}

export function isRejected<T extends Promise<T>>(promise: T): Promise<boolean> {
  return Promise.race([
    delay(0, false),
    promise.then(
      () => false,
      () => true
    ),
  ]);
}

export function isFinished<T extends Promise<T>>(promise: T): Promise<boolean> {
  return Promise.race([
    delay(0, false),
    promise.then(
      () => true,
      () => true
    ),
  ]);
}

export function getPromiseState(
  promise: Promise<any>
): Promise<"pending" | "resolved" | "error"> {
  return Promise.race([
    delay(0, "pending"),
    promise.then(
      () => "resolved",
      () => "error"
    ),
  ]);
}
