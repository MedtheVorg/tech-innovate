import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { twMerge } from 'tailwind-merge';
import { Toaster } from 'sonner';
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={twMerge(
                    spaceGrotesk.className,
                    ` text-white relative bg-heroImage `
                )}
            >
                <Header />
                <main>{children}</main>
                <Toaster
                    closeButton={true}
                    theme='dark'
                />
            </body>
        </html>
    );
}
