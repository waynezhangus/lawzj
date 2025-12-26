import { db } from '@/db/drizzle';
import { usersTable } from '@/db/schema';

export async function GET() {
  const result = await db.select().from(usersTable);
  return Response.json(result);
}
