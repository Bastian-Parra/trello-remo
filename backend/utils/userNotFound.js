export function userNotFound(user) {
  if (!user) {
    throw new Error("User not found")
  }
}