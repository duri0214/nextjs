'use client'
import React, { useState } from 'react'
import { ForgotPasswordSent } from './ForgotPasswordSent'
import { ForgotPasswordEdit } from './ForgotPasswordEdit'

export function ForgotPasswordPage() {
  const [isSent, setIsSent] = useState(false)
  return isSent ? (
    <ForgotPasswordSent />
  ) : (
    <ForgotPasswordEdit onCompletion={() => setIsSent(true)} />
  )
}
