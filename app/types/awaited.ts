export async function getUser() {
  return { id: 1, name: "Angel" };
}

export type User = Awaited<ReturnType<typeof getUser>>;