import { request } from 'data/firebase-adapter';

export const getCVByName = async (name: string) => {
    try {
        const cv = await request(`cv/${name}`);

        if (!cv) {
            throw new Error('cv not found');
        }

        return cv;
    } catch (e) {
        console.log(e);
        throw e;
    }
};
