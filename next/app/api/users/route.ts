import { db } from '@/db/client';
import { usersTable } from '@/db/schema';

export async function GET() {
  const result = await db.select().from(usersTable);
  return Response.json(result);
}
