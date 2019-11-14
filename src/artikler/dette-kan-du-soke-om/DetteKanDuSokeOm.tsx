import * as React from "react";
import "../artikkel.less";
import {useSelector} from "react-redux";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {useSprakvalg} from "../../utils/navigasjonUtils";
import DetteKanDuSokeOmBokmal from "./DetteKanDuSokeOmBokmal";
import DetteKanDuSokeOmEnglish from "./DetteKanDuSokeOmEnglish";
import DetteKanDuSokeOmNynorsk from "./DetteKanDuSokeOmNynorsk";

const DetteKanDuSokeOm: React.FC = () => {
    useSprakvalg([Sprak.NORSK_BOKMAL, Sprak.ENGELSK, Sprak.NYNORSK]);
    const search = useSelector((state: any) => state.router.location.search);
    let valgtSprak = detekterSprak(search);

    switch (valgtSprak) {
        case Sprak.NORSK_BOKMAL:
            return <DetteKanDuSokeOmBokmal/>;
        case Sprak.ENGELSK:
            return <DetteKanDuSokeOmEnglish/>;
        case Sprak.NYNORSK:
            return <DetteKanDuSokeOmNynorsk/>;
    }
};

export default DetteKanDuSokeOm;
