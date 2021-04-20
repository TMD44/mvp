import React from 'react';
import { config } from '../../main/configuration';

async function appName() {
    const result1 = await config.getAny('appInfo', 'appName');
    console.log('APP NAME: ', result1);
    const result2 = await config.getAny('appInfo', 'appVersion');
    console.log('APP VERSION: ', result2);
}

export function Main() {
    return (
        <main>
            <header>HEADER</header>
            <section>
                SECTION TAG
                <button type="button" onClick={appName}>
                    APP NAME
                </button>
            </section>
            <footer>FOOTER</footer>
        </main>
    );
}
