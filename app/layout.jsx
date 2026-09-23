import "../src/index.css";

export const metadata = {
  title: "AXIS",
  description: "Experiências digitais premium para marcas modernas.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <meta name="google-site-verification" content="YOMp1uB8GBdP7FeG1ZwsRL5uix8AO6DCLkoKr-K6I9g" />
        {children}
      </body>
    </html>
  );
}
