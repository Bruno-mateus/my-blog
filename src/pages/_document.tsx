import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" href="/b.svg" sizes="any" />
        <meta
          name="google-site-verification"
          content="hKDwqTXBK4pjSr42hnrktafiz3asm6aupPgVAP_2aEE"
        />
        <meta about="Aprenda as melhores práticas, linguagens de programação e frameworks para desenvolver sites incríveis e funcionais. Explore dicas e tutoriais passo a passo, dicas valiosas e exemplos práticos para aprimorar suas habilidades de programação web. Esteja atualizado com as últimas tendências e novidades do setor, e torne-se um programador web de destaque. Venha conosco e mergulhe no universo da programação web!" />
      </Head>
      <body className="bg-gray-200 dark:bg-gray-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
