// @ts-check
import { z } from 'zod'

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  NOTION_API_KEY: z.string(), // 노션 API Key
  NOTION_DATABASE_ID: z.string(), // 참가여부 등록을 위한 노션 database id
})

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  // NEXT_PUBLIC_CLIENTVAR: z.string(),
  NEXT_PUBLIC_KAKAO_API_KEY: z.string(), // 카카오 개발자 SDK Js API KEY
  NEXT_PUBLIC_KAKAO_MESSAGE_TEMPLATE_ID: z.number(), // 카카오 메시지 템플릿 ID.
  NEXT_PUBLIC_INVITATION_LINK: z.string(), // 모바일 청첩장 주소
})

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  NEXT_PUBLIC_KAKAO_API_KEY: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
  NEXT_PUBLIC_KAKAO_MESSAGE_TEMPLATE_ID: Number(
    process.env.NEXT_PUBLIC_KAKAO_MESSAGE_TEMPLATE_ID
  ),
  NEXT_PUBLIC_INVITATION_LINK: process.env.NEXT_PUBLIC_INVITATION_LINK,
}
