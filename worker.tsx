/** @jsx h */
import { h } from 'preact';
import { renderToStaticMarkup } from 'preact-render-to-string';

const Layout = () => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
    </head>
    <body>
      <h1>Reenact `deno compile` with `no-terminal`</h1>
      <p>This repository was created to validate the creation of webviews in Deno.</p>
    </body>
  </html>
)

const handler = () => new Response(renderToStaticMarkup(<Layout />), {
  headers: {
    "Content-Type": "text/html"
  }
});

Deno.serve({
  port: 8080,
  handler,
});