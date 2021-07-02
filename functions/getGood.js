exports.handler = async function(event, context) {
  context.body = JSON.stringify({message: "Get good at serverless yo"});
  context.statusCode = 200;
  return context;
}