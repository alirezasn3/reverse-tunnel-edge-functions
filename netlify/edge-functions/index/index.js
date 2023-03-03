export default async (request, context) => {
  const { pathname } = new URL(request.url)
  const res = await fetch(`http://${pathname}.nip.io/${context.ip}`)
  const port = await res.text()
  return new Response(port)
}
