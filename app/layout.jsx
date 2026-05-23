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
      <body>{children}</body>
    </html>
  );
}
