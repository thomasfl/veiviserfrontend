import * as React from "react";
import {Normaltekst, Undertittel, Systemtittel, Element} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import {useBannerTittel} from "../../utils/navigasjonUtils";
import "./komponenter/sokSosialhjelp.less";
import Lenke from "nav-frontend-lenker";
import { Hovedknapp } from 'nav-frontend-knapper';
import Lesmerpanel from 'nav-frontend-lesmerpanel';
import SokDigitaltPanel from "./komponenter/SokDigitaltPanel";
import IkkeSokDigitaltPanel from "./komponenter/IkkeSokDigitalt";

const SokSosialhjelp: React.FC = () => {

    useBannerTittel("Søk om økonomisk sosialhjelp");

    return (
        <Artikkel>
            <Systemtittel className="artikkel_sidetittel">Søk om økonomisk sosialhjelp</Systemtittel>

            <Normaltekst>
                Du skal søke til NAV-kontoret der du bor. Stadig flere kommuner kan ta i mot digitale søknader.
                Hvis du ikke skal søke digitalt, kan du søke med kommunens papirskjema.
            </Normaltekst>

            <br/>
            <SokDigitaltPanel>
                <Undertittel>Søk digitalt</Undertittel>
                <Lenke href=".">Sjekk om du kan søke digitalt i din kommune</Lenke>
                <span className="sok_knapp">
                    <Hovedknapp
                        onClick={(event: any) => console.log("TODO: Gå til søknad")}
                    >
                        Søk digitalt
                    </Hovedknapp>
                </span>
            </SokDigitaltPanel>

            <br/>
            <br/>

            <IkkeSokDigitaltPanel>
                <Undertittel>Hvis du ikke skal søke digitalt</Undertittel>

                <Lesmerpanel
                    intro={
                        <Normaltekst>
                            Hvis du ikke skal søke digitalt, kan du søke med kommunens
                            papirskjema.
                        </Normaltekst>
                    }
                    border={false}
                    apneTekst="Les mer"
                >
                    <Element>Hvor finner jeg kommunens papirskjema?</Element>
                    <Normaltekst>
                        Du finner papirskjema på alle NAV-kontor. Mange kommuner har også et papirskjema
                        som kan lastes ned på nettsiden sin.
                    </Normaltekst>
                    <br/>
                    <Element>Hvorfor kan ikke alle kommuner ta imot digital søknad?</Element>
                    <Normaltekst>
                        Stadig flere kommuner kan ta i mot digitale søknader.
                        Hver enkelt kommuner bestemmer selv om de skal ta i bruk digital
                        søknad, og eventuelt når det skal skje. Ta kontakt med kommunen
                        din hvis du vil ha svar på om og når du kan søke digitalt i din kommune.
                    </Normaltekst>

                </Lesmerpanel>
            </IkkeSokDigitaltPanel>

        </Artikkel>
    );
};

export default SokSosialhjelp;
