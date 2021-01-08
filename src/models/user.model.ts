import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - User
 * User
 */
@model({name: 'User'})
export class User {
  constructor(data?: Partial<User>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({jsonSchema: {
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  id?: number;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  username?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  firstName?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  lastName?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  email?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  password?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  phone?: string;

  /**
   * User Status
   */
  @property({jsonSchema: {
  type: 'integer',
  format: 'int32',
  description: 'User Status',
  minimum: -2147483648,
  maximum: 2147483647,
}})
  userStatus?: number;

}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;


