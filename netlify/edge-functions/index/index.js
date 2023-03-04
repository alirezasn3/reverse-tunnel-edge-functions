export default async (request, context) => {
  try {
    const { pathname } = new URL(request.url)
    const [serverIP, clientIpAndPort] = pathname.split('-')
    if (pathname.includes('/confirmation')) {
      const res = await fetch(`http://${serverIP}.nip.io:443/${clientIpAndPort}`)
      if (res.status === 200) return new Response(null)
      else return new Response(null, { status: 400 })
    } else {
      const res = await fetch(`http://${serverIP}.nip.io/${clientIpAndPort}`)
      const port = await res.text()
      return new Response(port)
    }
  } catch (error) {
    console.log(error)
    return new Response(null, { status: 400 })
  }
}
