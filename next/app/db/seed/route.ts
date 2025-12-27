import { db } from '@/app/db/drizzle';
import { usersTable } from '@/app/db/schema';
import { users } from './sample_data';

export async function GET() {
  try {
    for (const user of users) {
      await db.insert(usersTable).values(user);
    }

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
