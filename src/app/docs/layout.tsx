import { DocsProvider } from "@/providers/docs-provider";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DocsProvider>{children}</DocsProvider>;
}
