type ID = number;

type Identifiable = { id: ID };

type NewEntity<T> = Omit<T, 'id'>;

export { ID, Identifiable, NewEntity };
