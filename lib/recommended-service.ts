import { db } from '@/lib/db';
import { getSelf } from '@/lib/auth-service';

export const getRecommended = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  const users = await db.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return users;
};
