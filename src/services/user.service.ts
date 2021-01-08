import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {PetstoreDataSource} from '../datasources';

import {User} from '../models/user.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by user.
 * Operations about user
 */
export interface UserService {
  /**
   * @param _requestBody List of user object
   */
  createUsersWithArrayInput(_requestBody: User[]): Promise<unknown>;

  /**
   * @param _requestBody List of user object
   */
  createUsersWithListInput(_requestBody: User[]): Promise<unknown>;

  /**
   * @param username The name that needs to be fetched. Use user1 for testing. 
   * @returns successful operation
   */
  getUserByName(username: string): Promise<User>;

  /**
   * This can only be done by the logged in user.
   * @param username name that need to be updated
   * @param _requestBody Updated user object
   */
  updateUser(username: string, _requestBody: User): Promise<unknown>;

  /**
   * This can only be done by the logged in user.
   * @param username The name that needs to be deleted
   */
  deleteUser(username: string): Promise<unknown>;

  /**
   * @param username The user name for login
   * @param password The password for login in clear text
   * @returns successful operation
   */
  loginUser(username: string, password: string): Promise<string>;

  /**
   */
  logoutUser(): Promise<unknown>;

  /**
   * This can only be done by the logged in user.
   * @param _requestBody Created user object
   */
  createUser(_requestBody: User): Promise<unknown>;

}

export class UserServiceProvider implements Provider<UserService> {
  constructor(
    // petstore must match the name property in the datasource json file
    @inject('datasources.petstore')
    protected dataSource: PetstoreDataSource = new PetstoreDataSource(),
  ) {}

  async value(): Promise<UserService> {
    const service = await getService<{apis: {'user': UserService}}>(
      this.dataSource,
    );
    return service.apis['user'];
  }
}
