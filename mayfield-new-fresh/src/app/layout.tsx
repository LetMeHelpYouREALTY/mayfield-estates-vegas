import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Script from "next/script";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mayfield Estates Las Vegas',
  description: 'Luxury Living in Las Vegas - Mayfield Estates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      
        {/* Follow Up Boss pixel (Widget Tracker) */}
        <Script id="fub-widget-tracker" strategy="afterInteractive">{`
(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
{(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
(t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
e.parentNode.insertBefore(t,e);})
(window,"https://widgetbe.com/agent",document,"widgetTracker");
window.widgetTracker("create", "WT-XQHVYQWW");
window.widgetTracker("send", "pageview");
        `}</Script>
</body>
    </html>
  )
} 