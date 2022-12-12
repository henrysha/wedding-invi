import { publicProcedure, router } from '@/server/trpc/trpc'

import { validateInput } from '@/types/attendance'

import { env } from '@/env/server.mjs'
import { notionClient } from '@/server/notion'
import { PropertyType } from '@/types/enum'
import type { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints'

export const attendanceRouter = router({
  submit: publicProcedure
    .input(validateInput)
    .mutation(({ input: { name, number, attendance } }) => {
      const body: CreatePageParameters = {
        parent: {
          type: 'database_id' as const,
          database_id: env.NOTION_DATABASE_ID,
        },
        properties: {
          이름: {
            type: PropertyType.Enum.title,
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          },
          인원: {
            type: PropertyType.Enum.number,
            number,
          },
          '참석 여부': {
            type: PropertyType.Enum.select,
            select: {
              name: attendance,
            },
          },
        },
      }

      return notionClient.pages.create(body)
    }),
})
