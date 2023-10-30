import i18next from '../lib/i18n/i18next'

export async function populateDataCards(dataList: any) {
    try {
        const parsedData = JSON.parse(dataList)

        await Promise.all(parsedData.map(
            (item: any) => {
                const propertyTitleCard = `titleCard${item.id}`;
                const propertyDescriptionCard = `descriptionCard${item.id}`;

                i18next.addResourceBundle('pt', 'translation', {
                    [propertyTitleCard]: item.title.pt,
                    [propertyDescriptionCard]: item.description.pt,
                }, true, true);

                i18next.addResourceBundle('en', 'translation', {
                    [propertyTitleCard]: item.title.en,
                    [propertyDescriptionCard]: item.description.en,
                }, true, true);

                i18next.addResourceBundle('es', 'translation', {
                    [propertyTitleCard]: item.title.es,
                    [propertyDescriptionCard]: item.description.es,
                }, true, true);
            }
        ))
    } catch (error: any) {
        throw new Error(error);
    }
}
