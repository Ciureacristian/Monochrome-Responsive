import './globals.scss';

export const metadata = {
  title: 'Monochrome',
  description: 'A high quality suit ecommerce brand',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
