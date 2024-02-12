import { ID, NewEntity } from '../types';

export interface IModelCreator<T, K> {
  create(data: NewEntity<T>): Promise<K>;
}

export interface IModelReader<T> {
  findAll(): Promise<T[]>;
  findById(id: ID): Promise<T | null>;
}

export interface IModelUpdater {
  update(id: ID): Promise<boolean>;
}

export interface IModelDeleter {
  delete(id: ID): Promise<boolean>;
}

export interface IModel<T, K>
  extends IModelCreator<T, K>,
  IModelReader<T>,
  IModelUpdater,
  IModelDeleter {}
