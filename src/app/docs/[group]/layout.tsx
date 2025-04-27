export default function ComponentGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-7xl mx-auto">{children}</div>;
}
