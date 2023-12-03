import React from 'react'

export default function Page() {
  return (
    <div>
      <p>保護されていないページ</p>
      <p>This is Home</p>
      <p>
        <a href={'/admin/user-list'}>ユーザー管理ページにとぶ</a>
      </p>
    </div>
  )
}
