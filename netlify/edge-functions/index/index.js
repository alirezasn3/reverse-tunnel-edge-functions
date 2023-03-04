export default async request => {
  try {
    let data = new URL(request.url).pathname.replace('/', '')
    console.log(request.method, data)
    const [serverIP, ClientIP, ClientPort] = data.split('-')
    const res = await fetch(`http://${serverIP}.nip.io:${request.method == 'GET' ? 80 : 81}/${ClientIP}:${ClientPort}`)

    if (res.status != 200) throw Error()

    if (request.method == 'GET') {
      const port = await res.text()
      return new Response(port)
    }

    return new Response(null)
  } catch (error) {
    console.log(error)
    return new Response(null, { status: 400 })
  }
}
