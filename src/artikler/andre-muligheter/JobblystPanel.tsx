import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import Lenkepanel from "nav-frontend-lenkepanel/lib";
import "./komponenter/jobblyst_panel.less";

const JobblystPanel: React.FC = () => {
    return (
        <Lenkepanel
            href="https://tjenester.nav.no/veiledearbeidssoker/?sprak=nb"
            tittelProps="normaltekst"
            border={false}
            className="jobblyst_panel"
        >
            <Innholdstittel>Jobblyst på Facebook</Innholdstittel>
            <Normaltekst>Råd og veiledning for deg som er ung og har spørsmål</Normaltekst>
          </Lenkepanel>
    )
};

export default JobblystPanel;
