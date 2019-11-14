import {Reducer} from "redux";

// Språkkoder, dvs. "BCP 47 language tag, som er aktuelle å bruke:
// nb-NO    Norwegian Bokmål, Norway
// nb       Norwegian Bokmål
// nn-NO    Norwegian Nynorsk, Norway
// nn       Norwegian Nynorsk
// en       English
// se-NO    Northern Sami, Norway
// sma-NO   Southern Sami, Norway

enum Sprak {
    NORSK_BOKMAL= "nb",  // no Norwegian
    NYNORSK = "nn",
    ENGELSK = "en",
    SAMISK = "se" // se Northern Sami
}

interface NavigasjonsType {
    brodsmulesti: BrodsmuleElement[];
    bannerTittel: string;
    sprak: {
        valgt: Sprak,
        tilgjengelige: Sprak[]
    }
}

export interface BrodsmuleElement {
    sti: string;
    tittel: string;
}

const initialState: NavigasjonsType = {
    brodsmulesti: [
        {
            sti: "/sosialhjelp/innsyn",
            tittel: "Økonomisk sosialhjelp"
        }
    ],
    bannerTittel: "Økonomisk sosialhjelp",
    sprak: {
        valgt: Sprak.NORSK_BOKMAL,
        tilgjengelige: [Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]
    }
};

export enum NavgiasjonActionTypeKey {
    SETT_BRODSMULESTI = "SETT_BRODSMULESTI",
    SETT_BANNERTITTEL = "SETT_BANNERTITTEL",
    SETT_VALGT_SPRAK = "SETT_VALGT_SPRAK",
    SETT_TILGJENGLIGE_SPRAK = "SETT_TILGJENGLIGE_SPRAK"
}

const setBrodsmuleSti = (brodsmulesti: BrodsmuleElement[]) => {
    return {
        type: NavgiasjonActionTypeKey.SETT_BRODSMULESTI,
        brodsmulesti
    }
};

const setBannerTittel = (bannerTittel: string) => {
    return {
        type: NavgiasjonActionTypeKey.SETT_BANNERTITTEL,
        bannerTittel
    }
};

const setTilgjengeligeSprak = (tilgjengelige: Sprak[]) => {
    return {
        type: NavgiasjonActionTypeKey.SETT_TILGJENGLIGE_SPRAK,
        tilgjengelige
    }
};

const setValgtSprak = (sprak: Sprak) => {
    return {
        type: NavgiasjonActionTypeKey.SETT_VALGT_SPRAK,
        sprak
    }
};

const NavigasjonsReducer: Reducer<NavigasjonsType, any> = (state = initialState, action) => {
    switch (action.type) {
        case NavgiasjonActionTypeKey.SETT_BRODSMULESTI: {
            return {
                ...state,
                brodsmulesti: action.brodsmulesti
            }
        }
        case NavgiasjonActionTypeKey.SETT_BANNERTITTEL: {
            return {
                ...state,
                bannerTittel: action.bannerTittel
            }
        }
        case NavgiasjonActionTypeKey.SETT_TILGJENGLIGE_SPRAK: {
            return {
                ...state,
                sprak: {
                    valgt: state.sprak.valgt,
                    tilgjengelige: action.tilgjengelige
                }
            }
        }
        case NavgiasjonActionTypeKey.SETT_VALGT_SPRAK: {
            return {
                ...state,
                sprak: {
                    valgt: action.sprak,
                    tilgjengelige: state.sprak.tilgjengelige
                }
            }
        }
    }
    return state;
};

export {
    setBrodsmuleSti,
    setBannerTittel,
    setTilgjengeligeSprak,
    setValgtSprak
};
export default NavigasjonsReducer;

