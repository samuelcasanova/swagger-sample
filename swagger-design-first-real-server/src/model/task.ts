export class Task {
  public constructor (
    public id: string,
    public description: string,
    public createdDate: Date,
    public dueDate: Date
  ) {}
}
