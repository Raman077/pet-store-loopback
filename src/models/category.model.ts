import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Category
 * Category
 */
@model({name: 'Category'})
export class Category {
  constructor(data?: Partial<Category>) {
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
  name?: string;

}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;


