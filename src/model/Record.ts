import { defaultType, Type } from './Type'
import { CategoryItem, getDefaultCategory } from './Category'
import { WalletName, getDefaultWalletName } from './Wallet'
import { getToday } from '../utils/date'
import { StoreIndexing } from '@/db'

export interface Record {
  id?: number
  type: Type
  category: CategoryItem
  cost: number
  /** @example '2020-11-25' */
  date: string
  wallet: WalletName
  remark?: string
}

export const recordIndexing: StoreIndexing = [
  {
    name: 'date',
  },
  {
    name: 'wallet',
  },
]

export function getInitRecord(): Record {
  return {
    type: defaultType,
    category: getDefaultCategory(defaultType),
    cost: 0,
    date: getToday(),
    wallet: getDefaultWalletName(),
    remark: '',
  }
}
