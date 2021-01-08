import {api, operation, param, requestBody} from '@loopback/rest';
import {Order} from '../models/order.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by store.
 *
 * Access to Petstore orders
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
export class StoreController {
  constructor() {}

  /**
   *
   *
   * @param _requestBody order placed for purchasing the pet
   * @returns successful operation
   */
  @operation('post', '/store/order', {
  tags: [
    'store',
  ],
  summary: 'Place an order for a pet',
  description: '',
  operationId: 'placeOrder',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Order',
        },
      },
    },
    description: 'order placed for purchasing the pet',
    required: true,
  },
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Order',
          },
        },
        'application/xml': {
          schema: {
            $ref: '#/components/schemas/Order',
          },
        },
      },
    },
    '400': {
      description: 'Invalid Order',
    },
  },
})
  async placeOrder(@requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Order',
      },
    },
  },
  description: 'order placed for purchasing the pet',
  required: true,
}) _requestBody: Order): Promise<Order> {
    throw new Error('Not implemented');
  }

  /**
   * For valid response try integer IDs with value >= 1 and <= 10. Other values
will generated exceptions
   *
   * @param orderId ID of pet that needs to be fetched
   * @returns successful operation
   */
  @operation('get', '/store/order/{orderId}', {
  tags: [
    'store',
  ],
  summary: 'Find purchase order by ID',
  description: 'For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions',
  operationId: 'getOrderById',
  parameters: [
    {
      name: 'orderId',
      in: 'path',
      description: 'ID of pet that needs to be fetched',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 10,
      },
    },
  ],
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Order',
          },
        },
        'application/xml': {
          schema: {
            $ref: '#/components/schemas/Order',
          },
        },
      },
    },
    '400': {
      description: 'Invalid ID supplied',
    },
    '404': {
      description: 'Order not found',
    },
  },
})
  async getOrderById(@param({
  name: 'orderId',
  in: 'path',
  description: 'ID of pet that needs to be fetched',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
    minimum: 1,
    maximum: 10,
  },
}) orderId: number): Promise<Order> {
    throw new Error('Not implemented');
  }

  /**
   * For valid response try integer IDs with positive integer value. Negative or
non-integer values will generate API errors
   *
   * @param orderId ID of the order that needs to be deleted
   */
  @operation('delete', '/store/order/{orderId}', {
  tags: [
    'store',
  ],
  summary: 'Delete purchase order by ID',
  description: 'For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors',
  operationId: 'deleteOrder',
  parameters: [
    {
      name: 'orderId',
      in: 'path',
      description: 'ID of the order that needs to be deleted',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
        minimum: 1,
      },
    },
  ],
  responses: {
    '400': {
      description: 'Invalid ID supplied',
    },
    '404': {
      description: 'Order not found',
    },
  },
})
  async deleteOrder(@param({
  name: 'orderId',
  in: 'path',
  description: 'ID of the order that needs to be deleted',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
    minimum: 1,
  },
}) orderId: number): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   * Returns a map of status codes to quantities
   *
   * @returns successful operation
   */
  @operation('get', '/store/inventory', {
  tags: [
    'store',
  ],
  summary: 'Returns pet inventories by status',
  description: 'Returns a map of status codes to quantities',
  operationId: 'getInventory',
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            additionalProperties: {
              type: 'integer',
              format: 'int32',
            },
          },
        },
      },
    },
  },
  security: [
    {
      api_key: [],
    },
  ],
})
  async getInventory(): Promise<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
}> {
    throw new Error('Not implemented');
  }

}

