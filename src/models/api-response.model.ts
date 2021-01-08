import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ApiResponse
 * ApiResponse
 */
@model({name: 'ApiResponse'})
export class ApiResponse {
  constructor(data?: Partial<ApiResponse>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({jsonSchema: {
  type: 'integer',
  format: 'int32',
  minimum: -2147483648,
  maximum: 2147483647,
}})
  code?: number;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  type?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  message?: string;

}

export interface ApiResponseRelations {
  // describe navigational properties here
}

export type ApiResponseWithRelations = ApiResponse & ApiResponseRelations;


