import { shopActionTypes } from './shop.types'

export const updatesCollections = collectionMap => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})