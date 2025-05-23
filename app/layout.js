import DeviceSizeIndicator from "@/components/essential/DeviceSizeIndicator";
import { fontLexendDeca, fontPrata } from "@/components/essential/Fonts";
import config from "@/config/site.config.json";
import NextTopLoader from "nextjs-toploader";

import "@/styles/styles.scss";

export const metadata = {
  title: config.metaData.title,
  description: config.metaData.description,
  url: config.siteURL,
  verification: {
    google: 'HIs3toHJ1XCdgVbyW3IW_TdZUotM0eonSg1oR1aqiDU',
  },
  siteName: config.metaData.title,
  type: "website",

  icons: {
    icon: "/images/favicon.png",
  },

  metadataBase: new URL("https://messarae.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/images/opengraph-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${fontPrata.variable} ${fontLexendDeca.variable}`}
    >
    <body className="font-secondary">
    <NextTopLoader
        color="#ff4848"
        shadow="none"
        showSpinner={false}
        zIndex={9999999}
        height={2}
    />
    {/*<DeviceSizeIndicator />*/}
    {children}
    </body>
    </html>
  );
}
