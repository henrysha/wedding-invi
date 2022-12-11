import { z } from "zod";
import { Attendance } from "./enum";

export const validateInput = z.object({
  name: z.string(),
  number: z.preprocess(Number, z.number()),
  attendance: Attendance,
});
