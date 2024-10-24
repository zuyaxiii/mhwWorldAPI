import axios from "axios";
import { MHW_BASE_URL_ARMOR } from "../utils/constant";
import {IMonsterHunterArmorList} from '../interface/ArmorInterface/mhwinterfaceArmorList';

interface IGetMHWArmorListPesponse {
  status : number | undefined,
  data : IMonsterHunterArmorList
}

export const mhwListArmorServices = {
  getmhwArmorList: (limit?: number) : Promise<IGetMHWArmorListPesponse> => {
    const respone = limit ? `${MHW_BASE_URL_ARMOR}/${limit}` : MHW_BASE_URL_ARMOR;
    return axios.get(respone);
  },
};
