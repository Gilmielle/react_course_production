import "./styles/index.scss";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";

function Component() {
    const { t, i18n } = useTranslation();

    return <div>
        {t('Тестовый перевод')}
    </div>
}

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="" >
                <Navbar />
                <Component />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
