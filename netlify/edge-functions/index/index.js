export default async (request, context) => {
  try {
    const { pathname } = new URL(request.url)
    const res = await fetch(`http://${pathname}.nip.io/${context.ip}`)
    if (res.status != 200) {
      return new Response(null, { status: 500 })
    }
    const port = await res.text()
    return new Response(port)
  } catch (error) {
    console.log(error)
  }
}
