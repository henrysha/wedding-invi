import { router } from "../trpc";
import { attendanceRouter } from "./attendance";

export const appRouter = router({
  attendance: attendanceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
