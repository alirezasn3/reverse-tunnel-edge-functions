export default async request => {
  try {
    let data = new URL(request.url).pathname.replace('/', '')
    const [serverIP, ClientIP, ClientPort] = data.split('-')
    const res = await fetch(`http://${serverIP}.nip.io/${ClientIP}:${ClientPort}`, { method: request.method })

    console.log(request.method, data, res.status)

    if (res.status != 200) throw Error()

    if (request.method == 'GET') {
      const port = await res.text()
      return new Response(port)
    } else {
      return new Response(null, { status: 200 })
    }
  } catch (error) {
    console.log(error)
    return new Response(null, { status: 400 })
  }
}
