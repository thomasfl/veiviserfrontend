import * as React from "react";
import {push} from "connected-react-router";
import {useDispatch} from "react-redux";
import Lenke from "nav-frontend-lenker";

const InternLenke: React.FC<{path: string, children: React.ReactNode}> = ({path, children}) => {

    const dispatch = useDispatch();
    const onClick = (event: any, sti: string) => {
        dispatch(push(sti));
        event.preventDefault();
    };

    return (
        <Lenke href={path} onClick={(event: any) => onClick(event, path)}>
            {children}
        </Lenke>
    )
};

export default InternLenke;
