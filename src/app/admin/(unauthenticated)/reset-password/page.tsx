import React from 'react'
import { ResetPasswordEdit } from './_components/ResetPasswordEdit'

export default function Page() {
  // 無駄な処理に見えるけど、dbからデータをロードする必要があるときにまとめてデータを確保してコンポーネントに流し込むつくりにしよう
  return <ResetPasswordEdit />
}
