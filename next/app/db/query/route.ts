import { db } from '@/app/db/drizzle';
import { usersTable } from '@/app/db/schema';

export async function GET() {
  try {
    const data = await db.select().from(usersTable);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
