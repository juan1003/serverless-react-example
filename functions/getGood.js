exports.handler = async function(event, context) {
  context.body = "Get good at serverless yo";
  context.statusCode = 200;
  return context;
}