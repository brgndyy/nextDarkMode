import "./globals.css";
import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContentCard from "@/components/Card/ContentCard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitializerScript = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
  })()
  `;

  function setInitialColorMode() {
    function getInitialColorMode() {
      const persistedPreferenceMode = window.localStorage.getItem("theme");
      const hasPersistedPreference =
        typeof persistedPreferenceMode === "string";

      if (hasPersistedPreference) {
        return persistedPreferenceMode;
      }

      // Check the current preference
      const preference = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof preference.matches === "boolean";

      if (hasMediaQueryPreference) {
        return preference.matches ? "dark" : "light";
      }

      return "light";
    }

    const currentColorMode = getInitialColorMode();
    const element = document.body;
    element.style.setProperty("--initial-color-mode", currentColorMode);

    // If darkmode apply darkmode
    if (currentColorMode === "dark")
      document.body.setAttribute("data-theme", "dark");
  }

  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        ></script>
        <Card>
          <Header />
          <ContentCard>{children}</ContentCard>
        </Card>
        <Footer />
      </body>
    </html>
  );
}
