import { ShopActionTypes } from './shoptypes';

export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload:collectionsMap
});