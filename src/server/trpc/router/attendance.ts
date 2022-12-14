import type { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints'

import { notionClient } from '@/server/notion'
import { publicProcedure, router } from '@/server/trpc/trpc'

import { validateInput } from '@/types/attendance'
import { PropertyType } from '@/types/enum'

import { env } from '@/env/server.mjs'

export const attendanceRouter = router({
  /**
   * 노션 데이터베이스에 참가여부를 등록합니다.
   *
   * 노션에 미리 데이터베이스를 만들어두고, 아래와 같은 형태의 테이블을 구축해두는 작업이 선행되어야 합니다.
   *
   * 속성명   | 유형
   * ---     | ---
   * 이름     | 텍스트
   * 인원     | 숫자
   * 분류     | 선택
   * 참석 여부 | 선택
   *
   * 해당 데이터베이스를 구축하고, environment variable의 NOTION_DATABASE_ID 에 해당 database_id를 설정해주세요.
   */
  submit: publicProcedure
    .input(validateInput)
    .mutation(({ input: { name, number, attendance, side } }) => {
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
          분류: {
            type: PropertyType.Enum.select,
            select: {
              name: side,
            },
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
