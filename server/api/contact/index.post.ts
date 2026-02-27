import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  message: z.string().min(10, 'お問い合わせ内容は10文字以上必要です'),
  honeypot: z.string().optional()
})

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const resend = new Resend(config.resendApiKey)

  const body = await readBody(event)

  // スパム対策
  if (body.honeypot) {
    return { ok: true }
  }

  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: '入力内容に誤りがあります'
    })
  }

  const { name, email, message } = parsed.data

  await resend.emails.send({
    from: 'Association Japan Bangladesh Consulting & Trading <contact@jp-bg.com>',
    to: 'あなたのGmailアドレス',
    subject: `【お問い合わせ】${name}様より`,
    replyTo: email,
    text: `
      お名前: ${name}
      メール: ${email}

      内容:
      ${message}
      `
  })

  return { ok: true }
})
