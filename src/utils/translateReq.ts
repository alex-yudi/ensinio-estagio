import { api } from "../lib/axios";
import i18next from '../lib/i18n/i18next'

type ObjectReq = {
    id: number;
    title: {
        pt: string,
        en: string,
        es: string,
    };
    description: {
        pt: string,
        en: string,
        es: string,
    }
}

type Languages = 'pt' | 'en' | 'es';

export async function fetchDataCards(id: number) {
    try {
        const { data } = await api.get(`/items/${id}`);
        const propertyTitleCard = `titleCard${id}`;
        const propertyDescriptionCard = `descriptionCard${id}`;

        i18next.addResource('pt', 'translation', propertyTitleCard, await data.title.pt);
        i18next.addResource('en', 'translation', propertyTitleCard, await data.title.en);
        i18next.addResource('es', 'translation', propertyTitleCard, await data.title.es);


        i18next.addResource('pt', 'translation', propertyDescriptionCard, await data.description.pt);
        i18next.addResource('en', 'translation', propertyDescriptionCard, await data.description.en);
        i18next.addResource('es', 'translation', propertyDescriptionCard, await data.description.es);
    } catch (error: any) {
        throw new Error(error);
    }
}
