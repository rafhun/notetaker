import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
      <Html>
        <Head />
        <body className="bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            <Main />
            <NextScript />
        </body>
      </Html>
    );
}
