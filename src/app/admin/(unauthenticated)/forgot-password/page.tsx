import React from 'react'
import { ForgotPasswordPage } from './_components/ForgotPasswordPage'

export default function Page() {
  // 無駄な処理に見えるけど、dbからデータをロードする必要があるときにまとめてデータを確保してコンポーネントに流し込むつくりにしよう
  return <ForgotPasswordPage />
}
