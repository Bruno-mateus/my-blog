import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" href="/b.svg" sizes="any" />
      </Head>
      <body className="bg-gray-200 dark:bg-gray-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
