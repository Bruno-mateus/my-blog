import { Header } from "@/components/Header";
import ScrollTop from "@/components/ScrollTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Inter, Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  variable: "--poppins-font",
  weight: "700",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <QueryClientProvider client={queryClient}>
        <div className={`${inter.variable} ${poppins.variable}`}>
          <Header />
          <ScrollTop />
          <DefaultSeo
            title="Bruno Mateus Dev"
            openGraph={{
              type: "website",
              locale: "pt-BR",
              url: "https://www.url.ie/",
              siteName: "Bruno Mateus DEV",
              description:
                "Aprenda as melhores práticas, linguagens de programação e frameworks para desenvolver sites incríveis e funcionais. Explore tutoriais passo a passo, dicas valiosas e exemplos práticos para aprimorar suas habilidades de programação web. Esteja atualizado com as últimas tendências e novidades do setor, e torne-se um programador web de destaque. Venha conosco e mergulhe no universo da programação web!",
            }}
          />
          <Component {...pageProps} />
          <Analytics />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
