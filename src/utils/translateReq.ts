import { api } from "../lib/axios";
import i18next from '../lib/i18n/i18next'

export async function fetchDataCards(id: number) {
    try {
        const { data } = await api.get(`/items/${id}`);
        const propertyTitleCard = `titleCard${id}`;
        const propertyDescriptionCard = `descriptionCard${id}`;

        i18next.addResourceBundle('pt', 'translation', {
            [propertyTitleCard]: await data.title.pt,
            [propertyDescriptionCard]: await data.description.pt,
        }, true, true);

        i18next.addResourceBundle('en', 'translation', {
            [propertyTitleCard]: await data.title.en,
            [propertyDescriptionCard]: await data.description.en,
        }, true, true);

        i18next.addResourceBundle('es', 'translation', {
            [propertyTitleCard]: await data.title.es,
            [propertyDescriptionCard]: await data.description.es,
        }, true, true);


        /*

      i18next.addResourceBundle(lng, 'translation', {
     [propertyTitleCard]: await data.title[lng],
     [propertyDescriptionCard]: await data.description[lng],
 }, true, true);

         i18next.addResourceBundle('en', 'translation', propertyTitleCard, await data.title.en);
        i18next.addResourceBundle('es', 'translation', propertyTitleCard, await data.title.es);

        i18next.addResourceBundle('pt', 'translation', propertyDescriptionCard, await data.description.pt);
        i18next.addResourceBundle('en', 'translation', propertyDescriptionCard, await data.description.en);
        i18next.addResourceBundle('es', 'translation', propertyDescriptionCard, await data.description.es); 
 */
    } catch (error: any) {
        throw new Error(error);
    }
}
