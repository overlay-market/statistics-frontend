import { DEFAULT_CHAINID } from "../constants/chains"

export const useStoredChainId = (key: string) => {
  void key
  // const [chainId, setChainId] = useState(localStorage.getItem(key))

  // useEffect(() => {
  //   const handleStorageChange = (event: StorageEvent) => {
  //     if (event.key === key) {
  //       setChainId(event.newValue)
  //     }
  //   }

  //   const handleCustomEvent = () => {
  //     setChainId(localStorage.getItem(key))
  //   }

  //   window.addEventListener('storage', handleStorageChange)
  //   window.addEventListener('storageChange', handleCustomEvent)

  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange)
  //     window.removeEventListener('storageChange', handleCustomEvent)
  //   }
  // }, [key])

  return DEFAULT_CHAINID
}
