async function handleRequest(request) {
  const { pathname } = new URL(request.url)

  if (pathname[0] === "/") {
    const data = await fetch(`https://yisar.github.io/fre${pathname}`)
      .then((res) => res.text())
      .then((data) => data)
    return new Response(data, {
      status: 200,
      headers: {
        server: "denosr",
        "content-type":
          pathname === "/" || pathname === "/zh"
            ? "text/html; charset=UTF-8"
            : "text/plain",
      },
    })
  }
}

addEventListener("fetch", (event: any) => {
  event.respondWith(handleRequest(event.request))
})
