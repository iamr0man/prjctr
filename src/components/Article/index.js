import React from 'react';
import ReturnButton from "./ReturnButton";
import Welcome from "./Welcome/";

function Article ({ showWelcome, showReturnBack, userName, onLogout, onReturnBack }) {
    return (
        <>
            {showWelcome && <Welcome userName={userName} onLogout={onLogout}/>}
            {showReturnBack && <ReturnButton onReturnBack={onReturnBack} />}
        </>
    );
}

export default Article;