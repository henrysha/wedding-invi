import { z } from 'zod'

import { Attendance, BrideOrGroom } from '@/types/enum'

export const validateInput = z.object({
  name: z.string(),
  number: z.preprocess(Number, z.number()),
  side: BrideOrGroom,
  attendance: Attendance,
})
