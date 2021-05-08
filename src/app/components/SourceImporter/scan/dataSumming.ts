export const dataSum = (fileNameObj: any, folderNameObj: any) => {
    const filteredData: Record<string, unknown> = {};

    if (Object.keys(fileNameObj).length > Object.keys(folderNameObj).length) {
        Object.entries(folderNameObj).forEach(([key, value]) => {
            filteredData[key] = value;
        });
        Object.entries(fileNameObj).forEach(([key, value]) => {
            filteredData[key] = value;
        });
        /* if (folderNameObj.title !== fileNameObj.title) {
            if (folderNameObj.title.length > fileNameObj.title.length) {
                filteredData.title = folderNameObj.title;
            } else {
                filteredData.title = fileNameObj.title;
            }
        } */
    } else {
        Object.entries(fileNameObj).forEach(([key, value]) => {
            filteredData[key] = value;
        });
        Object.entries(folderNameObj).forEach(([key, value]) => {
            filteredData[key] = value;
        });
        /* if (folderNameObj.title !== fileNameObj.title) {
            if (folderNameObj.title.length > fileNameObj.title.length) {
                filteredData.title = folderNameObj.title;

                // Ugly solution. C'est la vie
                if (fileNameObj.title === '2012') {
                    filteredData.title = fileNameObj.title;
                }
            } else {
                filteredData.title = fileNameObj.title;
            }
        } */
    }

    return filteredData;
};
