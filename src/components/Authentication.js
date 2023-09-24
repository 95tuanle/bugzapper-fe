import React from "react";
import '@corbado/webcomponent'
import '@corbado/webcomponent/pkg/auth_cui.css'

const Authentication = () => {
    return (
        <>
            <corbado-auth project-id={process.env.REACT_APP_CORBADO_PROJECT_ID} conditional="yes">
                <input name="username" id="corbado-username"
                       required autoComplete="webauthn"/>
            </corbado-auth>
        </>
    );
}

export default Authentication;
