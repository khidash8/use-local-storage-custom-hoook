import { useEffect, useState } from "react"

export const useLocalStorage = (key = "", initialValue = "") => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key) === null) {
      if (typeof initialValue === "function") {
        return initialValue()
      } else {
        return initialValue
      }
    }
    return JSON.parse(localStorage.getItem(key))
  })

  useEffect(() => {
    if (value === null || value === undefined) {
      localStorage.removeItem(key)
      return
    }

    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
