import { randomUUID } from "crypto"
import { Task, Configuration, UsersApi, AdminsApi } from "../sdk"

export default class TaskService {
  protected usersApi: UsersApi
  protected adminsApi: AdminsApi
  constructor() {
    const configuration: Configuration = new Configuration({ basePath: 'http://localhost:8080'})
    this.usersApi = new UsersApi(configuration)
    this.adminsApi = new AdminsApi(configuration)
  }

  public async getTasks (): Promise<Task[]> {
    return await this.usersApi.getTasks()
  }

  public async addTask (description: string, dueDate: Date): Promise<void> {
    const task: Task = {
      id: randomUUID(),
      description,
      dueDate,
      createdDate: new Date()
    }
    const response = await this.adminsApi.postTask(task)
    this.checkResponse(response)
  }

  public async deleteTask (id: string): Promise<void> {
    const response = await this.adminsApi.deleteTask(id)

    this.checkResponse(response)
  }

  private checkResponse(response: Response) {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
  }
}