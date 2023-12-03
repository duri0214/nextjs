import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export async function validate<T>(req: NextRequest, schema: z.ZodType) {
  const { data, success, error } = schema.safeParse(await req.json()) as {
    data: JSON
    success: boolean
    error: { errors: z.ZodIssue[] }
  }
  if (!success) {
    throw new Error(JSON.stringify({ message: 'Invalid request', errors: error.errors }))
  }
  return data as T
}

export function requestError(e: unknown): NextResponse {
  if (e instanceof Error) {
    return NextResponse.json({ error: JSON.parse(e.message) }, { status: 400 })
  } else {
    console.error('Unexpected error type:', e)
    return NextResponse.json({ error: 'Unexpected error type' }, { status: 500 })
  }
}

export function serverError(e: unknown): NextResponse {
  if (e instanceof Error) {
    return NextResponse.json({ error: JSON.parse(e.message) }, { status: 500 })
  } else {
    console.error('Unexpected error type:', e)
    return NextResponse.json({ error: 'Unexpected error type' }, { status: 500 })
  }
}
