import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/helpers/classNames";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect } from "react";

const App = () => {
  const { theme } = useTheme();
  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [theme])}
    >
      <Suspense fallback="">
        <NavBar />
        <div className={"content-page"}>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
