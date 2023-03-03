export default async (request, context) => {
  return new Response(JSON.stringify(request.pathname + ' ' + context.ip))
}
