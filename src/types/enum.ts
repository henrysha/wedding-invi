import { z } from "zod";

export const Attendance = z.enum(["참석 예정", "참석만 식사는 X", "불참"]);
