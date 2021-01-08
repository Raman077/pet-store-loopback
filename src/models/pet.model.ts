import {model, property} from '@loopback/repository';
import {Category} from './category.model';
import {Tag} from './tag.model';

/**
 * The model class is generated from OpenAPI schema - Pet
 * Pet
 */
@model({name: 'Pet'})
export class Pet {
  constructor(data?: Partial<Pet>) {
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
  $ref: '#/components/schemas/Category',
}})
  category?: Category;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  name: string;

  /**
   *
   */
  @property.array(String, {jsonSchema: {
  type: 'array',
  items: {
    type: 'string',
  },
}})
  photoUrls: string[];

  /**
   *
   */
  @property.array(Tag, {jsonSchema: {
  type: 'array',
  items: {
    $ref: '#/components/schemas/Tag',
  },
}})
  tags?: Tag[];

  /**
   * pet status in the store
   */
  @property({jsonSchema: {
  type: 'string',
  description: 'pet status in the store',
  enum: [
    'available',
    'pending',
    'sold',
  ],
}})
  status?: 'available' | 'pending' | 'sold';

}

export interface PetRelations {
  // describe navigational properties here
}

export type PetWithRelations = Pet & PetRelations;


