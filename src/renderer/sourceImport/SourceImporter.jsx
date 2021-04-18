/* eslint-disable import/prefer-default-export */
import React from 'react';
import { config } from '../../main/configuration';
import { ipcRendererCommunication } from '../ipcRendererCommunication';
import { scan } from './scan';

export function SourceImporter() {
    function openDirButton() {
        config.purgeScanResults();
        ipcRendererCommunication();
    }

    function importSourcesButton() {
        scan.offlineScan();
    }

    function importWithMetadata() {
        scan.onlineScan();
    }

    function deleteDirs() {
        config.purgeScanPaths();
    }

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
            <textarea id="selected_files" rows="5" cols="50" readOnly />

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
