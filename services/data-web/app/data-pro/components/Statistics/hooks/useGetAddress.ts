import { getAddress } from '@/app/data-pro/remote/kakao/getAddress'
import { useQuery } from '@tanstack/react-query'

export default function useGetAddress(address: string) {
  return useQuery({
    queryKey: ['getAddress', address || 'default'],
    queryFn: async () => {
      if (!address) return
      const data = await getAddress(address)
      return data.data.documents || []
    },
  })
}
