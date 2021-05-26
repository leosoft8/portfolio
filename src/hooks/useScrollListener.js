import { useEffect } from 'react'

export const useScrollListener = (handleScroll) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}
