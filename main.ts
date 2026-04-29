export default {
  async fetch(request: Request) {
    const target = Deno.env.get("TARGET_DOMAIN");

    const url = new URL(request.url);
    const forwardUrl = `https://${target}${url.pathname}${url.search}`;

    return fetch(forwardUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  }
};
