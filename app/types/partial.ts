export type User = {
  id: number;
  name: string;
  email: string;
};

export type UserUpdate = Partial<User>;

export function updateUser(id: number, data: UserUpdate) {
  // data puede tener solo name o solo email
  console.log(id, data, "Actualizado");
}










