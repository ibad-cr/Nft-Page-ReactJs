import supabase from "../config/connect";
import { shopList } from '../slice/shopSlice.js'
import store from '../../../src/tools/store/shopStore.js'

export const shopData = async () => {
    const { data, error } = await supabase.from('NftProducts').select();
    if (error) {
        console.log('Supabase error:', error)
    } else {
        store.dispatch(shopList(data));
    }
}