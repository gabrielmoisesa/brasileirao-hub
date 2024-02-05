export type ID = number;

export type Identifiable = { id: ID };

export type NewEntity<T> = Omit<T, 'id'>;
