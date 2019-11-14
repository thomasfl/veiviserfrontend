import {
    BrodsmuleElement,
    setBannerTittel,
    setBrodsmuleSti,
    setTilgjengeligeSprak, setValgtSprak
} from "../reducers/navigasjonsReducer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {Sprak} from "./sprakUtils";

const useBrodsmuleSti = (brodsmulesti: BrodsmuleElement[]) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBrodsmuleSti(brodsmulesti))
    }, [dispatch, brodsmulesti]);
};

const useBannerTittel = (bannerTittel: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        dispatch(setBannerTittel(bannerTittel))
    }, [dispatch, bannerTittel]);
};

const useSprakvalg = (tilgjengelige: Sprak[]) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        dispatch(setTilgjengeligeSprak(tilgjengelige))
    }, [dispatch, tilgjengelige]);
};

const useSprak = (sprak: Sprak) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        dispatch(setValgtSprak(sprak))
    }, [dispatch, sprak]);
};

export {useBrodsmuleSti, useBannerTittel, useSprakvalg, useSprak};
