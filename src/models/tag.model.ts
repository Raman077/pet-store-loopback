import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Tag
 * Tag
 */
@model({name: 'Tag'})
export class Tag {
  constructor(data?: Partial<Tag>) {
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

export interface TagRelations {
  // describe navigational properties here
}

export type TagWithRelations = Tag & TagRelations;


