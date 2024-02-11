import { ID, NewEntity } from '../types';

export interface IModelCreator<T> {
  create(data: NewEntity<T>): Promise<T>;
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

export interface IModel<T>
  extends IModelCreator<T>,
  IModelReader<T>,
  IModelUpdater,
  IModelDeleter {}
