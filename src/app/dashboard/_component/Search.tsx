'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent } from 'react'

export function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  function handleSearch(searchingText: string) {
    console.log(`Searching... ${searchingText}`)
    const params = new URLSearchParams(searchParams)

    if (searchingText) {
      params.set('query', searchingText)
    } else {
      params.delete('query')
    }

    // Note: useRouterのreplaceを使うことでどんどんURLが変化していく
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon style={{ height: '10px', width: '16px', color: 'gray' }} />
    </div>
  )
}
