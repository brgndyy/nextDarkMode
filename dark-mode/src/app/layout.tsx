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
  // 즉시 실행함수로 감싸서 페이지가 렌더링될때 바로 실행되도록함
  const themeInitializerScript = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
  })()
  `;

  // 초기 테마를 설정하는 함수
  function setInitialColorMode() {
    function getInitialColorMode() {
      // 로컬스토리지에서 'theme' 값 가져오기
      const persistedPreferenceMode = window.localStorage.getItem("theme");
      const hasPersistedPreference =
        typeof persistedPreferenceMode === "string";

      if (hasPersistedPreference) {
        return persistedPreferenceMode;
      }

      const preference = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof preference.matches === "boolean";

      if (hasMediaQueryPreference) {
        return preference.matches ? "dark" : "light";
      }

      return "light";
    }

    //현재 테마 모드
    const currentColorMode = getInitialColorMode();
    const element = document.body;
    element.style.setProperty("--initial-color-mode", currentColorMode);

    // 현재 다크모드라면 다크모드를 바로 적용 시켜줌
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
