export async function createTodo(data: { title: string; description?: string }) {
  // This is a placeholder for a real API call
  return Promise.resolve({ success: true, ...data });
}