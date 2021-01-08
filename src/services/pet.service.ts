import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {PetstoreDataSource} from '../datasources';

import {ApiResponse} from '../models/api-response.model';
import {Pet} from '../models/pet.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by pet.
 * Everything about your Pets
 */
export interface PetService {
  /**
   * @param petId ID of pet to update
   * @param _requestBody
   * @returns successful operation
   */
  uploadFile(petId: number, _requestBody: {
  additionalMetadata?: string;
  file?: Buffer;
}): Promise<ApiResponse>;

  /**
   * @param _requestBody Pet object that needs to be added to the store
   */
  addPet(_requestBody: Pet): Promise<unknown>;

  /**
   * @param _requestBody Pet object that needs to be added to the store
   */
  updatePet(_requestBody: Pet): Promise<unknown>;

  /**
   * Multiple status values can be provided with comma separated strings
   * @param status Status values that need to be considered for filter
   * @returns successful operation
   */
  findPetsByStatus(status: ('available' | 'pending' | 'sold')[]): Promise<Pet[]>;

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2,
tag3 for testing.
   * @param tags Tags to filter by
   * @returns successful operation
   */
  findPetsByTags(tags: string[]): Promise<Pet[]>;

  /**
   * Returns a single pet
   * @param petId ID of pet to return
   * @returns successful operation
   */
  getPetById(petId: number): Promise<Pet>;

  /**
   * @param petId ID of pet that needs to be updated
   * @param _requestBody
   */
  updatePetWithForm(petId: number, _requestBody: {
  name?: string;
  status?: string;
}): Promise<unknown>;

  /**
   * @param api_key 
   * @param petId Pet id to delete
   */
  deletePet(api_key: string | undefined, petId: number): Promise<unknown>;

}

export class PetServiceProvider implements Provider<PetService> {
  constructor(
    // petstore must match the name property in the datasource json file
    @inject('datasources.petstore')
    protected dataSource: PetstoreDataSource = new PetstoreDataSource(),
  ) {}

  async value(): Promise<PetService> {
    const service = await getService<{apis: {'pet': PetService}}>(
      this.dataSource,
    );
    return service.apis['pet'];
  }
}
