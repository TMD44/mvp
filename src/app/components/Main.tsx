import React from 'react';
import { getJson } from './SourceImport/json';

async function gj() {
    const data = await getJson();
    console.log('DATA: ', data);
}

export function Main() {
    return (
        <main>
            <header>HEADER</header>
            <section>
                SECTION TAG
                <button type="button" onClick={gj}>
                    APP NAME
                </button>
            </section>
            <footer>FOOTER</footer>
        </main>
    );
}
