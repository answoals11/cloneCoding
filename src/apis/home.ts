import axios from "axios"

export const getMainList = async () => {
  const { data } = await axios.get("/api/carousels/v1/list/")
  return data
}

export const getDailyList = async () => {
  const { data } = await axios.get("/api/search/v2/daily/")
  return data
}
