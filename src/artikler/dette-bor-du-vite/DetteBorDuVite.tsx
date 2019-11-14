import * as React from "react";

import {useSprakvalg} from "../../utils/navigasjonUtils";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {useSelector} from "react-redux";
import DetteBorDuViteBokmal from "./DetteBorDuViteBokmal";
import DetteBorDuViteNynorsk from "./DetteBorDuViteNynorsk";
import DetteBorDuViteEnglish from "./DetteBorDuViteEnglish";

const DetteBorDuVite: React.FC = () => {

    useSprakvalg([Sprak.NORSK_BOKMAL, Sprak.ENGELSK, Sprak.NYNORSK]);
    const search = useSelector((state: any) => state.router.location.search);
    let valgtSprak = detekterSprak(search);

    switch (valgtSprak) {
        case Sprak.NORSK_BOKMAL:
            return <DetteBorDuViteBokmal />;
        case Sprak.NYNORSK:
            return <DetteBorDuViteNynorsk />;
        case Sprak.ENGELSK:
            return <DetteBorDuViteEnglish />;
        default:
            return <div/>;
    }
};

export default DetteBorDuVite;
