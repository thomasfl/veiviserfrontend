import * as React from "react";
import {Provider} from "react-redux";
import {IntlProvider} from "react-intl";
import configureStore, {history} from "./configureStore";
import './App.less';
import Forside from "./pages/Forside";
import Banner from "./components/banner/Banner";
import tekster from "./tekster/tekster";
import {Route, Switch} from "react-router";
import SokSosialhjelp from "./artikler/slik-sosialhjelp/SokSosialhjelp";
import {ConnectedRouter} from "connected-react-router";
import DetteKanDuSokeOm from "./artikler/dette-kan-du-soke-om/DetteKanDuSokeOm";
import {detekterSprak} from "./utils/sprakUtils";
import DetteBorDuVite from "./artikler/dette-bor-du-vite/DetteBorDuVite";
import AndreMuligheter from "./artikler/andre-muligheter/AndreMuligheter";

const visSpraakNokler = (tekster: any) => {
    if (window.location.href.match(/\\?vistekster=true$/)) {
        Object.keys(tekster).map((key: string) => {
            return tekster[key] = tekster[key] + "[" + key + "]";
        });
    }
    return tekster;
};

const store = configureStore();

const App: React.FC = () => {
    const language = detekterSprak(window.location.search);

    return (
        <Provider store={store}>
            <IntlProvider defaultLocale={language} locale={language} messages={visSpraakNokler(tekster[language])}>
                <ConnectedRouter history={history}>
                    <div className="App">
                        <Banner/>
                            <Switch>
                                <Route exact path="/" component={Forside}/>
                                <Route exact path="/dette-bor-du-vite" component={DetteBorDuVite}/>
                                <Route exact path="/andre-mulighter" component={AndreMuligheter}/>
                                <Route exact path="/dette-kan-du-soke-om" component={DetteKanDuSokeOm}/>
                                <Route exact path="/slik-soker-du" component={SokSosialhjelp}/>
                            </Switch>
                    </div>
                </ConnectedRouter>
            </IntlProvider>
        </Provider>
    );
};

export default App;
