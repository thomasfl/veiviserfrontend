import * as React from 'react';
import './banner.less';
import './brodsmule.less';
import {Sidetittel, Innholdstittel}  from 'nav-frontend-typografi';
import {FormattedMessage} from 'react-intl';
import VeiviserBannerIllustrasjon from "../illustrations/VeiviserBannerIllustrasjon";
import {useSelector} from "react-redux";

const Banner: React.FC = () => {
    const pathname = useSelector((state: any) => state.router.location.pathname);
    const erForside: boolean = (pathname === "/");

    const tittel = useSelector((state: any) => state.navigasjon.bannerTittel);

    let bannerClassNames = erForside ? 'banner__forside' : 'banner__underside';

    return (
        <div className={'banner ' + bannerClassNames}>
            <div className="blokk-center">

                {erForside && (
                    <div className="banner__forside-wrapper">
                        <div className="banner__tittel-tekst">
                            <Sidetittel>
                                <FormattedMessage id="forside.banner.tittel"/>
                            </Sidetittel>
                        </div>
                        <VeiviserBannerIllustrasjon
                            className="banner__forside-illustrasjon"/>
                    </div>
                )}
                {!erForside && (
                    <div className="undersideBanner__tekst">
                            {tittel && tittel !== '' && (
                                <Innholdstittel>{tittel}</Innholdstittel>
                            )}
                            {!(tittel && tittel !== '') && (
                                <FormattedMessage id="forside.banner.tittel"/>
                            )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Banner;
