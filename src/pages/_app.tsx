import { Header } from '@/components/Header'
import ScrollTop from '@/components/ScrollTop'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { Inter, Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultSeo } from "next-seo";
import { Metadata } from "next";

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
            }}
          />
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
