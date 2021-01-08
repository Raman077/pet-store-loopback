import {api, operation, param, requestBody} from '@loopback/rest';
import {User} from '../models/user.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by user.
 *
 * Operations about user
 */
@api({
  components: {
    requestBodies: {
      UserArray: {
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        description: 'List of user object',
        required: true,
      },
      Pet: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Pet',
            },
          },
          'application/xml': {
            schema: {
              $ref: '#/components/schemas/Pet',
            },
          },
        },
        description: 'Pet object that needs to be added to the store',
        required: true,
      },
    },
    securitySchemes: {
      api_key: {
        type: 'apiKey',
        name: 'api_key',
        in: 'header',
      },
      petstore_auth: {
        type: 'oauth2',
        flows: {
          implicit: {
            authorizationUrl: 'https://petstore.swagger.io/oauth/authorize',
            scopes: {
              'read:pets': 'read your pets',
              'write:pets': 'modify pets in your account',
            },
          },
        },
      },
    },
    schemas: {
      ApiResponse: {
        type: 'object',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
          },
          type: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
        },
      },
      Category: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
          },
          name: {
            type: 'string',
          },
        },
        xml: {
          name: 'Category',
        },
      },
      Pet: {
        type: 'object',
        required: [
          'name',
          'photoUrls',
        ],
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
          },
          category: {
            $ref: '#/components/schemas/Category',
          },
          name: {
            type: 'string',
            example: 'doggie',
          },
          photoUrls: {
            type: 'array',
            xml: {
              wrapped: true,
            },
            items: {
              type: 'string',
              xml: {
                name: 'photoUrl',
              },
            },
          },
          tags: {
            type: 'array',
            xml: {
              wrapped: true,
            },
            items: {
              $ref: '#/components/schemas/Tag',
            },
          },
          status: {
            type: 'string',
            description: 'pet status in the store',
            enum: [
              'available',
              'pending',
              'sold',
            ],
          },
        },
        xml: {
          name: 'Pet',
        },
      },
      Tag: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
          },
          name: {
            type: 'string',
          },
        },
        xml: {
          name: 'Tag',
        },
      },
      Order: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
          },
          petId: {
            type: 'integer',
            format: 'int64',
          },
          quantity: {
            type: 'integer',
            format: 'int32',
          },
          shipDate: {
            type: 'string',
            format: 'date-time',
          },
          status: {
            type: 'string',
            description: 'Order Status',
            enum: [
              'placed',
              'approved',
              'delivered',
            ],
          },
          complete: {
            type: 'boolean',
          },
        },
        xml: {
          name: 'Order',
        },
      },
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
          },
          username: {
            type: 'string',
          },
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          userStatus: {
            type: 'integer',
            format: 'int32',
            description: 'User Status',
          },
        },
        xml: {
          name: 'User',
        },
      },
    },
  },
  paths: {},
})
export class UserController {
  constructor() {}

  /**
   *
   *
   * @param _requestBody List of user object
   */
  @operation('post', '/user/createWithArray', {
  tags: [
    'user',
  ],
  summary: 'Creates list of users with given input array',
  description: '',
  operationId: 'createUsersWithArrayInput',
  requestBody: {
    $ref: '#/components/requestBodies/UserArray',
  },
  responses: {
    default: {
      description: 'successful operation',
    },
  },
})
  async createUsersWithArrayInput(@requestBody({
  $ref: '#/components/requestBodies/UserArray',
}) _requestBody: User[]): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   *
   *
   * @param _requestBody List of user object
   */
  @operation('post', '/user/createWithList', {
  tags: [
    'user',
  ],
  summary: 'Creates list of users with given input array',
  description: '',
  operationId: 'createUsersWithListInput',
  requestBody: {
    $ref: '#/components/requestBodies/UserArray',
  },
  responses: {
    default: {
      description: 'successful operation',
    },
  },
})
  async createUsersWithListInput(@requestBody({
  $ref: '#/components/requestBodies/UserArray',
}) _requestBody: User[]): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   *
   *
   * @param username The name that needs to be fetched. Use user1 for testing. 
   * @returns successful operation
   */
  @operation('get', '/user/{username}', {
  tags: [
    'user',
  ],
  summary: 'Get user by user name',
  description: '',
  operationId: 'getUserByName',
  parameters: [
    {
      name: 'username',
      in: 'path',
      description: 'The name that needs to be fetched. Use user1 for testing. ',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/User',
          },
        },
        'application/xml': {
          schema: {
            $ref: '#/components/schemas/User',
          },
        },
      },
    },
    '400': {
      description: 'Invalid username supplied',
    },
    '404': {
      description: 'User not found',
    },
  },
})
  async getUserByName(@param({
  name: 'username',
  in: 'path',
  description: 'The name that needs to be fetched. Use user1 for testing. ',
  required: true,
  schema: {
    type: 'string',
  },
}) username: string): Promise<User> {
    throw new Error('Not implemented');
  }

  /**
   * This can only be done by the logged in user.
   *
   * @param username name that need to be updated
   * @param _requestBody Updated user object
   */
  @operation('put', '/user/{username}', {
  tags: [
    'user',
  ],
  summary: 'Updated user',
  description: 'This can only be done by the logged in user.',
  operationId: 'updateUser',
  parameters: [
    {
      name: 'username',
      in: 'path',
      description: 'name that need to be updated',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/User',
        },
      },
    },
    description: 'Updated user object',
    required: true,
  },
  responses: {
    '400': {
      description: 'Invalid user supplied',
    },
    '404': {
      description: 'User not found',
    },
  },
})
  async updateUser(@param({
  name: 'username',
  in: 'path',
  description: 'name that need to be updated',
  required: true,
  schema: {
    type: 'string',
  },
}) username: string, @requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/User',
      },
    },
  },
  description: 'Updated user object',
  required: true,
}) _requestBody: User): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   * This can only be done by the logged in user.
   *
   * @param username The name that needs to be deleted
   */
  @operation('delete', '/user/{username}', {
  tags: [
    'user',
  ],
  summary: 'Delete user',
  description: 'This can only be done by the logged in user.',
  operationId: 'deleteUser',
  parameters: [
    {
      name: 'username',
      in: 'path',
      description: 'The name that needs to be deleted',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    '400': {
      description: 'Invalid username supplied',
    },
    '404': {
      description: 'User not found',
    },
  },
})
  async deleteUser(@param({
  name: 'username',
  in: 'path',
  description: 'The name that needs to be deleted',
  required: true,
  schema: {
    type: 'string',
  },
}) username: string): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   *
   *
   * @param username The user name for login
   * @param password The password for login in clear text
   * @returns successful operation
   */
  @operation('get', '/user/login', {
  tags: [
    'user',
  ],
  summary: 'Logs user into the system',
  description: '',
  operationId: 'loginUser',
  parameters: [
    {
      name: 'username',
      in: 'query',
      description: 'The user name for login',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'password',
      in: 'query',
      description: 'The password for login in clear text',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    '200': {
      description: 'successful operation',
      headers: {
        'X-Expires-After': {
          description: 'date in UTC when token expires',
          schema: {
            type: 'string',
            format: 'date-time',
          },
        },
        'X-Rate-Limit': {
          description: 'calls per hour allowed by the user',
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      },
      content: {
        'application/json': {
          schema: {
            type: 'string',
          },
        },
        'application/xml': {
          schema: {
            type: 'string',
          },
        },
      },
    },
    '400': {
      description: 'Invalid username/password supplied',
    },
  },
})
  async loginUser(@param({
  name: 'username',
  in: 'query',
  description: 'The user name for login',
  required: true,
  schema: {
    type: 'string',
  },
}) username: string, @param({
  name: 'password',
  in: 'query',
  description: 'The password for login in clear text',
  required: true,
  schema: {
    type: 'string',
  },
}) password: string): Promise<string> {
    throw new Error('Not implemented');
  }

  /**
   *
   *
   */
  @operation('get', '/user/logout', {
  tags: [
    'user',
  ],
  summary: 'Logs out current logged in user session',
  description: '',
  operationId: 'logoutUser',
  responses: {
    default: {
      description: 'successful operation',
    },
  },
})
  async logoutUser(): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   * This can only be done by the logged in user.
   *
   * @param _requestBody Created user object
   */
  @operation('post', '/user', {
  tags: [
    'user',
  ],
  summary: 'Create user',
  description: 'This can only be done by the logged in user.',
  operationId: 'createUser',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/User',
        },
      },
    },
    description: 'Created user object',
    required: true,
  },
  responses: {
    default: {
      description: 'successful operation',
    },
  },
})
  async createUser(@requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/User',
      },
    },
  },
  description: 'Created user object',
  required: true,
}) _requestBody: User): Promise<unknown> {
    throw new Error('Not implemented');
  }

}

