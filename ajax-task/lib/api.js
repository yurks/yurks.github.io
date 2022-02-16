const API_URL = 'https://ajax.systems/wp-json/wp/v2/posts'

export async function fetchAPI(postId) {
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(API_URL + (postId ? `slug={slug}` : ''), {
        method: 'GET',
        headers,
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.map(({ date, slug, title, excerpt, content, acf}) => ({ id: slug, date, slug, title: title.rendered, data: slug ? content.rendered : excerpt.rendered, image: acf.og_image}))
}
