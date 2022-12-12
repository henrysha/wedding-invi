import { z } from 'zod'

import { Attendance } from '@/types/enum'

export const validateInput = z.object({
  name: z.string(),
  number: z.preprocess(Number, z.number()),
  attendance: Attendance,
})
