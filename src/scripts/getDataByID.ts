import { getAllMedia } from '@redux/selectors/mediaSelector';

export const getDataByID = (id: string) => {
    const allMedia = getAllMedia();

    return allMedia[id];
};
