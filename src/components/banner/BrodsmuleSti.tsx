import * as React from 'react';
import "./brodsmule.less";
import { HoyreChevron } from 'nav-frontend-chevron';

const BrodsmuleSti: React.FC<{stiElementer: React.ReactNode[]}> = ({stiElementer}) => {
    const antallElementer = stiElementer.length;
    return (
        <span className="brodsmule_sti">
            {stiElementer
                .map((t, i) => (
                    <span key={i}>
                        {t} {antallElementer !== i + 1 && (<span> <HoyreChevron className="brodsmule_chevron"/> </span>)}
                    </span>
                ))
            }
      </span>
    );
};

export default BrodsmuleSti;
