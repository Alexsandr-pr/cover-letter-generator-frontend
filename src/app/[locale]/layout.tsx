import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from 'next/font/google';

import "./globals.css";

const fontInter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});


type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function RootLayout({
    children,
    params,
}: Props) {

    const { locale } = await params;
    
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body
                className={`antialiased ${fontInter.variable}`}
            >
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
