import axios from "axios"

export const getMainList = () => {
  const data = axios.get("/api/carousels/v1/list/")
  return data
}
