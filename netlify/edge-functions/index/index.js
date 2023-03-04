export default async (request, context) => {
  try {
    let { pathname } = new URL(request.url)
    if (pathname.includes('/confirmation')) {
      console.log(pathname)
      pathname = pathname.replace('/confirmation', '')
      console.log(pathname)
      const [serverIP, clientIpAndPort] = pathname.split('-')
      console.log(serverIP, clientIpAndPort)
      const res = await fetch(`http://${serverIP}.nip.io:81/${clientIpAndPort}`)
      if (res.status === 200) return new Response(null)
      else return new Response(null, { status: 400 })
    } else {
      const [serverIP, clientIpAndPort] = pathname.split('-')
      const res = await fetch(`http://${serverIP}.nip.io/${clientIpAndPort}`)
      const port = await res.text()
      return new Response(port)
    }
  } catch (error) {
    console.log(error)
    return new Response(null, { status: 400 })
  }
}
