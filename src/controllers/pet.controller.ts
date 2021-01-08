import {api, operation, param, requestBody} from '@loopback/rest';
import {ApiResponse} from '../models/api-response.model';
import {Pet} from '../models/pet.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by pet.
 *
 * Everything about your Pets
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
export class PetController {
  constructor() {}

  /**
   *
   *
   * @param petId ID of pet to update
   * @param _requestBody
   * @returns successful operation
   */
  @operation('post', '/pet/{petId}/uploadImage', {
  tags: [
    'pet',
  ],
  summary: 'uploads an image',
  description: '',
  operationId: 'uploadFile',
  parameters: [
    {
      name: 'petId',
      in: 'path',
      description: 'ID of pet to update',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  requestBody: {
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            additionalMetadata: {
              description: 'Additional data to pass to server',
              type: 'string',
            },
            file: {
              description: 'file to upload',
              type: 'string',
              format: 'binary',
            },
          },
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ApiResponse',
          },
        },
      },
    },
  },
  security: [
    {
      petstore_auth: [
        'write:pets',
        'read:pets',
      ],
    },
  ],
})
  async uploadFile(@param({
  name: 'petId',
  in: 'path',
  description: 'ID of pet to update',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) petId: number, @requestBody({
  content: {
    'multipart/form-data': {
      schema: {
        type: 'object',
        properties: {
          additionalMetadata: {
            description: 'Additional data to pass to server',
            type: 'string',
          },
          file: {
            description: 'file to upload',
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  },
}) _requestBody: {
  additionalMetadata?: string;
  file?: Buffer;
}): Promise<ApiResponse> {
    throw new Error('Not implemented');
  }

  /**
   *
   *
   * @param _requestBody Pet object that needs to be added to the store
   */
  @operation('post', '/pet', {
  tags: [
    'pet',
  ],
  summary: 'Add a new pet to the store',
  description: '',
  operationId: 'addPet',
  requestBody: {
    $ref: '#/components/requestBodies/Pet',
  },
  responses: {
    '405': {
      description: 'Invalid input',
    },
  },
  security: [
    {
      petstore_auth: [
        'write:pets',
        'read:pets',
      ],
    },
  ],
})
  async addPet(@requestBody({
  $ref: '#/components/requestBodies/Pet',
}) _requestBody: Pet): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   *
   *
   * @param _requestBody Pet object that needs to be added to the store
   */
  @operation('put', '/pet', {
  tags: [
    'pet',
  ],
  summary: 'Update an existing pet',
  description: '',
  operationId: 'updatePet',
  requestBody: {
    $ref: '#/components/requestBodies/Pet',
  },
  responses: {
    '400': {
      description: 'Invalid ID supplied',
    },
    '404': {
      description: 'Pet not found',
    },
    '405': {
      description: 'Validation exception',
    },
  },
  security: [
    {
      petstore_auth: [
        'write:pets',
        'read:pets',
      ],
    },
  ],
})
  async updatePet(@requestBody({
  $ref: '#/components/requestBodies/Pet',
}) _requestBody: Pet): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   * Multiple status values can be provided with comma separated strings
   *
   * @param status Status values that need to be considered for filter
   * @returns successful operation
   */
  @operation('get', '/pet/findByStatus', {
  tags: [
    'pet',
  ],
  summary: 'Finds Pets by status',
  description: 'Multiple status values can be provided with comma separated strings',
  operationId: 'findPetsByStatus',
  parameters: [
    {
      name: 'status',
      in: 'query',
      description: 'Status values that need to be considered for filter',
      required: true,
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'available',
            'pending',
            'sold',
          ],
          default: 'available',
        },
      },
    },
  ],
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Pet',
            },
          },
        },
        'application/xml': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Pet',
            },
          },
        },
      },
    },
    '400': {
      description: 'Invalid status value',
    },
  },
  security: [
    {
      petstore_auth: [
        'write:pets',
        'read:pets',
      ],
    },
  ],
})
  async findPetsByStatus(@param({
  name: 'status',
  in: 'query',
  description: 'Status values that need to be considered for filter',
  required: true,
  explode: true,
  schema: {
    type: 'array',
    items: {
      type: 'string',
      enum: [
        'available',
        'pending',
        'sold',
      ],
      default: 'available',
    },
  },
}) status: ('available' | 'pending' | 'sold')[]): Promise<Pet[]> {
    throw new Error('Not implemented');
  }

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2,
tag3 for testing.
   *
   * @param tags Tags to filter by
   * @returns successful operation
   */
  @operation('get', '/pet/findByTags', {
  tags: [
    'pet',
  ],
  summary: 'Finds Pets by tags',
  description: 'Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
  operationId: 'findPetsByTags',
  parameters: [
    {
      name: 'tags',
      in: 'query',
      description: 'Tags to filter by',
      required: true,
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  ],
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Pet',
            },
          },
        },
        'application/xml': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Pet',
            },
          },
        },
      },
    },
    '400': {
      description: 'Invalid tag value',
    },
  },
  security: [
    {
      petstore_auth: [
        'write:pets',
        'read:pets',
      ],
    },
  ],
  deprecated: true,
})
  async findPetsByTags(@param({
  name: 'tags',
  in: 'query',
  description: 'Tags to filter by',
  required: true,
  explode: true,
  schema: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
}) tags: string[]): Promise<Pet[]> {
    throw new Error('Not implemented');
  }

  /**
   * Returns a single pet
   *
   * @param petId ID of pet to return
   * @returns successful operation
   */
  @operation('get', '/pet/{petId}', {
  tags: [
    'pet',
  ],
  summary: 'Find pet by ID',
  description: 'Returns a single pet',
  operationId: 'getPetById',
  parameters: [
    {
      name: 'petId',
      in: 'path',
      description: 'ID of pet to return',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    '200': {
      description: 'successful operation',
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
    },
    '400': {
      description: 'Invalid ID supplied',
    },
    '404': {
      description: 'Pet not found',
    },
  },
  security: [
    {
      api_key: [],
    },
  ],
})
  async getPetById(@param({
  name: 'petId',
  in: 'path',
  description: 'ID of pet to return',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) petId: number): Promise<Pet> {
    throw new Error('Not implemented');
  }

  /**
   *
   *
   * @param petId ID of pet that needs to be updated
   * @param _requestBody
   */
  @operation('post', '/pet/{petId}', {
  tags: [
    'pet',
  ],
  summary: 'Updates a pet in the store with form data',
  description: '',
  operationId: 'updatePetWithForm',
  parameters: [
    {
      name: 'petId',
      in: 'path',
      description: 'ID of pet that needs to be updated',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            name: {
              description: 'Updated name of the pet',
              type: 'string',
            },
            status: {
              description: 'Updated status of the pet',
              type: 'string',
            },
          },
        },
      },
    },
  },
  responses: {
    '405': {
      description: 'Invalid input',
    },
  },
  security: [
    {
      petstore_auth: [
        'write:pets',
        'read:pets',
      ],
    },
  ],
})
  async updatePetWithForm(@param({
  name: 'petId',
  in: 'path',
  description: 'ID of pet that needs to be updated',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) petId: number, @requestBody({
  content: {
    'application/x-www-form-urlencoded': {
      schema: {
        type: 'object',
        properties: {
          name: {
            description: 'Updated name of the pet',
            type: 'string',
          },
          status: {
            description: 'Updated status of the pet',
            type: 'string',
          },
        },
      },
    },
  },
}) _requestBody: {
  name?: string;
  status?: string;
}): Promise<unknown> {
    throw new Error('Not implemented');
  }

  /**
   *
   *
   * @param api_key 
   * @param petId Pet id to delete
   */
  @operation('delete', '/pet/{petId}', {
  tags: [
    'pet',
  ],
  summary: 'Deletes a pet',
  description: '',
  operationId: 'deletePet',
  parameters: [
    {
      name: 'api_key',
      in: 'header',
      required: false,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'petId',
      in: 'path',
      description: 'Pet id to delete',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    '400': {
      description: 'Invalid ID supplied',
    },
    '404': {
      description: 'Pet not found',
    },
  },
  security: [
    {
      petstore_auth: [
        'write:pets',
        'read:pets',
      ],
    },
  ],
})
  async deletePet(@param({
  name: 'api_key',
  in: 'header',
  required: false,
  schema: {
    type: 'string',
  },
}) api_key: string | undefined, @param({
  name: 'petId',
  in: 'path',
  description: 'Pet id to delete',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) petId: number): Promise<unknown> {
    throw new Error('Not implemented');
  }

}

