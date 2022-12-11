import { validateInput } from "../../../types/attendance";
import { publicProcedure, router } from "../trpc";

export const attendanceRouter = router({
  submit: publicProcedure.input(validateInput).mutation(({ input }) => {
    console.log(input);
    return {};
  }),
});
