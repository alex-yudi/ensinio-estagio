import { api } from "../lib/axios";
import i18next from '../lib/i18n/i18next'

type DataCard = {
    id: number;
    description: {
        pt: string;
        en: string;
        es: string;
    };
    title: {
        pt: string;
        en: string;
        es: string;
    };
}

export async function fetchDataCards() {
    try {
        const { data: dataList } = await api.get(`/items`);

        dataList.map(async (item: DataCard) => {
            const propertyTitleCard = `titleCard${item.id}`;
            const propertyDescriptionCard = `descriptionCard${item.id}`;

            i18next.addResourceBundle('pt', 'translation', {
                [propertyTitleCard]: await item.title.pt,
                [propertyDescriptionCard]: await item.description.pt,
            }, true, true);

            i18next.addResourceBundle('en', 'translation', {
                [propertyTitleCard]: await item.title.en,
                [propertyDescriptionCard]: await item.description.en,
            }, true, true);

            i18next.addResourceBundle('es', 'translation', {
                [propertyTitleCard]: await item.title.es,
                [propertyDescriptionCard]: await item.description.es,
            }, true, true);
        })
    } catch (error: any) {
        throw new Error(error);
    }
}
