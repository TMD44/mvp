export interface ConfigType {
    creation_time: string;
    modification_time: string;
    user_info: UserInfoType;
    app_info: AppInfoType;
    scan_preferences: ScanPreferencesType;
}

export interface UserInfoType {
    name: string;
}

export interface AppInfoType {
    app_name: string;
    app_version: string;
    app_current_directory: string;
    app_locale: string;
    app_locale_country_code: string;
    app_paths: {
        home: string;
        user_data: string;
        app_data: string;
        desktop: string;
        downloads: string;
        documents: string;
        pictures: string;
        videos: string;
        music: string;
        temp: string;
        // recent: string;
        exe: string;
        crash_dumps: string;
    };
}

export interface ScanPreferencesType {
    scan_language: string;
    scan_paths: string[];
    scan_file_types: ScanFileTypesType;
    scan_results: ScanResultsType;
}

export interface ScanFileTypesType {
    media: string[];
    sub: string[];
    nfo: string[];
}

export interface ScanResultsType {
    media: ScanResultType[];
    sub: ScanResultType[];
    nfo: ScanResultType[];
}

export interface ScanResultType {
    fn: string;
    ext: string;
    path: string;
    full: string;
}
