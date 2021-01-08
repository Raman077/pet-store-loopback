import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {PetstoreDataSource} from '../datasources';

import {Order} from '../models/order.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by store.
 * Access to Petstore orders
 */
export interface StoreService {
  /**
   * @param _requestBody order placed for purchasing the pet
   * @returns successful operation
   */
  placeOrder(_requestBody: Order): Promise<Order>;

  /**
   * For valid response try integer IDs with value >= 1 and <= 10. Other values
will generated exceptions
   * @param orderId ID of pet that needs to be fetched
   * @returns successful operation
   */
  getOrderById(orderId: number): Promise<Order>;

  /**
   * For valid response try integer IDs with positive integer value. Negative or
non-integer values will generate API errors
   * @param orderId ID of the order that needs to be deleted
   */
  deleteOrder(orderId: number): Promise<unknown>;

  /**
   * Returns a map of status codes to quantities
   * @returns successful operation
   */
  getInventory(): Promise<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [additionalProperty: string]: any;
}>;

}

export class StoreServiceProvider implements Provider<StoreService> {
  constructor(
    // petstore must match the name property in the datasource json file
    @inject('datasources.petstore')
    protected dataSource: PetstoreDataSource = new PetstoreDataSource(),
  ) {}

  async value(): Promise<StoreService> {
    const service = await getService<{apis: {'store': StoreService}}>(
      this.dataSource,
    );
    return service.apis['store'];
  }
}
