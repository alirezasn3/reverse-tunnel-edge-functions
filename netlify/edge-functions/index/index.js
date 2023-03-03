export default async (request, context) => {
  try {
    const { pathname } = new URL(request.url)
    const res = await fetch(`http://${pathname}.nip.io/${context.ip}`)
    const port = await res.text()
    return new Response(port)
  } catch (error) {
    console.log(error)
    return new Response(null)
  }
}
