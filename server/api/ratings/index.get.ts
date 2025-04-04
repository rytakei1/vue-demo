import { db } from "~/server/db";
import { auth } from "~/utils/auth";

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({ headers: event.headers })
  if (!session) return new Response(null, { status: 401 })
  const userId = session.user.id;
  const userRatings = await db.query.ratings.findMany({
    where: (ratings, { eq }) => eq(ratings.userId, userId)
  });
  return userRatings;
})