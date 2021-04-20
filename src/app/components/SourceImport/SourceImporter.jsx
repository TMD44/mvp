/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { config } from '@main/configuration';
import { ipcRendererCommunication } from './ipcRendererCommunication';
import { scan } from './scan';

export function importSourcesButton() {
    scan.offlineScan();
}

export function importWithMetadata() {
    scan.onlineScan();
}

export function deleteDirs() {
    config.purgeScanPaths();
}

export function SourceImporter() {
    const [selectedScanPaths, setSelectedScanPaths] = useState('');

    const openDirButton = async () => {
        config.purgeScanResults();
        ipcRendererCommunication();
        const result = await config.getScanPaths();
        console.log('RESULT: ', result);
        setSelectedScanPaths(result);
    };

    return (
        <div>
            <h1>Source Import</h1>

            <h2>Dir Path:</h2>
            <button
                onClick={openDirButton}
                type="button"
                className="btn btn-dark"
                data-bs-toggle="button"
                autoComplete="off"
            >
                Open DIR
            </button>
            <button
                onClick={deleteDirs}
                type="button"
                className="btn btn-dark"
                data-bs-toggle="button"
                autoComplete="off"
            >
                Delete DIRs
            </button>
            <p id="selected_paths" />
            <p id="selected_files_length" />
            <h2>Selected scan paths:</h2>
            <p>{selectedScanPaths}</p>

            <button
                onClick={importSourcesButton}
                type="button"
                className="btn btn-dark"
                data-bs-toggle="button"
                autoComplete="off"
            >
                Import sources
            </button>
            <button
                onClick={importWithMetadata}
                type="button"
                className="btn btn-dark"
                data-bs-toggle="button"
                autoComplete="off"
            >
                Import sources and download metadata
            </button>
            <p id="importDone" />
        </div>
    );
}
