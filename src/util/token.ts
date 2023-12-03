import { randomBytes } from 'crypto'

export function generateToken(): string {
  const buffer: Buffer = randomBytes(32)
  return buffer.toString('hex')
}
