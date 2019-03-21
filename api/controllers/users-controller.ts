import { Get, Post, Body, Route, Tags, SuccessResponse } from "tsoa";
import { ServerError } from "../utils/server-error";
import { getRepository } from "typeorm";
import { API } from './api-controller';

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

@Route("users")
export class UsersController extends API {
  constructor() {
    super(getRepository('users'));
  }

  @Get()
  @Tags("Users")
  public async GetUsers(): Promise<any[]> {
    return await this._repository.find();
  }

  @Get("{userId}")
  @Tags("Users")
  public async GetUser(userId: number): Promise<any> {
    const user = this._repository.findOne(userId)
    if (!user) {
      throw new ServerError(`no user found with id ${userId}`);
    }

    return user;
  }

  @SuccessResponse('201', 'Created')
  @Post()
  @Tags("Users")
  public async createUser(@Body() request: IUser): Promise<any> {
    this.setStatus(201); // set return status 201
    const user = this._repository.create(request);
    return this._repository.save(user);
  }
}
