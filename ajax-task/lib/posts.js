import {fetchAPI} from './api'

export async function getAllPosts() {
  return await fetchAPI()
}

export async function getPost(slug) {
  return await fetchAPI(slug)
}

export async function getAllPostIds() {
  return (await fetchAPI()).map((id) => {
    return {
      params: {
        id
      }
    }
  })
}

