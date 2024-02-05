import { ID, NewEntity } from '../types';

export interface IModelCreator<T> {
  create(data: NewEntity<T>): Promise<T>;
}

export interface IModelReader<T> {
  findAll(): Promise<T[]>;
}

export interface IModelUpdater<T> {
  update(id: ID, data: Partial<T>): Promise<T | null>;
}

export interface IModelDeleter {
  delete(id: ID): Promise<boolean>;
}

export interface IModel<T>
  extends IModelCreator<T>,
  IModelReader<T>,
  IModelUpdater<T>,
  IModelDeleter {}
