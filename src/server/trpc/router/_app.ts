import { attendanceRouter } from "@/server/trpc/router/attendance";
import { router } from "@/server/trpc/trpc";

export const appRouter = router({
  attendance: attendanceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
