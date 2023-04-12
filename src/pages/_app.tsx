import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
