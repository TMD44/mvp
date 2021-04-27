export const dataSum = (fileNameObj: any, folderNameObj: any) => {
    const filteredData: Record<string, unknown> = {};

    if (Object.keys(fileNameObj).length > Object.keys(folderNameObj).length) {
        Object.entries(folderNameObj).forEach(([key, value]) => {
            filteredData[key] = value;
        });
        Object.entries(fileNameObj).forEach(([key, value]) => {
            filteredData[key] = value;
        });
        if (folderNameObj.title !== fileNameObj.title) {
            filteredData.title = folderNameObj.title;
        }
    } else {
        Object.entries(fileNameObj).forEach(([key, value]) => {
            filteredData[key] = value;
        });
        Object.entries(folderNameObj).forEach(([key, value]) => {
            filteredData[key] = value;
        });
        if (folderNameObj.title !== fileNameObj.title) {
            filteredData.title = folderNameObj.title;
        }
    }

    return filteredData;
};
