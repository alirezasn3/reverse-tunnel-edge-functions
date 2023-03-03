export default async (request, context) => {
  return new Response(JSON.stringify(request.url + ' ' + context.ip))
}
