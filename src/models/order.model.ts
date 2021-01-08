import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Order
 * Order
 */
@model({name: 'Order'})
export class Order {
  constructor(data?: Partial<Order>) {
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
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  petId?: number;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'integer',
  format: 'int32',
  minimum: -2147483648,
  maximum: 2147483647,
}})
  quantity?: number;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
  format: 'date-time',
}})
  shipDate?: Date;

  /**
   * Order Status
   */
  @property({jsonSchema: {
  type: 'string',
  description: 'Order Status',
  enum: [
    'placed',
    'approved',
    'delivered',
  ],
}})
  status?: 'placed' | 'approved' | 'delivered';

  /**
   *
   */
  @property({jsonSchema: {
  type: 'boolean',
}})
  complete?: boolean;

}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;


