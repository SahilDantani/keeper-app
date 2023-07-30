
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Keeper</title>
      <link
      href="https://fonts.googleapis.com/css?family=McLaren|Montserrat&display=swap"
      rel="stylesheet"
    />
    </head>
      <body>{children}</body>
    </html>
  );
}
