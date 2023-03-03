export default async request => {
  return new Response(JSON.stringify(request), {
    headers: { 'content-type': 'application/json' }
  })
}
