import type { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints'

import { notionClient } from '@/server/notion'
import { publicProcedure, router } from '@/server/trpc/trpc'

import { validateInput } from '@/types/attendance'
import { PropertyType } from '@/types/enum'

import { env } from '@/env/server.mjs'

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
