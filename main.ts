import { dirname, join } from "@std/path";
import { Webview } from "@webview/webview";

const worker = new Worker(
  join(dirname(import.meta.url), "worker.tsx"),
  { type: "module" },
);

const webview = new Webview();
webview.navigate("http://localhost:8080/");
webview.title = "Reenact `deno compile` with `no-terminal`"

console.log("[runner] worker started");
webview.run();
worker.terminate();