export class DetailedError extends Error {
  public details: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(message: string, details: any) {
    super(message);
    this.name = "DetailedError";
    this.details = details;
  }
}
