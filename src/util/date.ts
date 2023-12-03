import dayjs, { Dayjs, ManipulateType } from 'dayjs'

export function dateOffset(
  n: number = 0,
  unit: ManipulateType = 'minute',
  base: Date = new Date(),
): Date {
  let shiftedNow: Dayjs
  if (n >= 0) {
    shiftedNow = dayjs(base).add(n, unit)
  } else {
    shiftedNow = dayjs(base).subtract(Math.abs(n), unit)
  }

  return new Date(shiftedNow.format())
}

/**
 * yyyy-mm-dd hh:mm:ss で出力
 */
export function dateFormatHelper(d: Date | null): string {
  if (d === null) {
    return ''
  }
  const options = {
    year: 'numeric' as const,
    month: '2-digit' as const,
    day: '2-digit' as const,
    hour: '2-digit' as const,
    minute: '2-digit' as const,
    second: '2-digit' as const,
    hour12: false,
  }

  return new Intl.DateTimeFormat('ja-JP', options).format(d).replace(/\//g, '-')
}
