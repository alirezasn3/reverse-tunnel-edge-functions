export default async (request, context) => {
  try {
    const { pathname } = new URL(request.url)
    const [serverIP, clientIpAndPort] = pathname.split('-')
    const res = await fetch(`http://${serverIP}.nip.io/${clientIpAndPort}`)
    const port = await res.text()
    return new Response(port)
  } catch (error) {
    console.log(error)
    return new Response(context.ip)
  }
}
