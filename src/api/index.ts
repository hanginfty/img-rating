import axios from 'axios'

const baseUrl = 'http://124.223.90.145:8081'

enum Url {
  getImageList = '/list',
  getGroup = '/groupId',
  rate = '/score',
}

export async function getImageList(): Promise<Image[]> {
  const url = baseUrl + Url.getImageList
  return axios.get(url).then((res) => res.data)
}

export async function getGroup(id: number) {
  const url = baseUrl + Url.getGroup
  return axios
    .get(url, {
      params: {
        groupId: id,
      },
    })
    .then((res) => res.data)
}

export async function rate(id: number, score: number) {
  const url = baseUrl + Url.rate
  return axios.put(url, {
    params: {
      imageId: id,
      score,
    },
  })
}
