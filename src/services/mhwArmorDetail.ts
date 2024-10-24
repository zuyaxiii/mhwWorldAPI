import axios from "axios";
import { MHW_BASE_URL_ARMOR } from "../utils/constant";
import {IMonsterHunterWorldArmorDetail} from '../interface/ArmorInterface/mhwinterfaceDetail';

interface IGetMHWArmorDetailPesponse {
  status : number | undefined,
  data : IMonsterHunterWorldArmorDetail
}

export const mhwDetailArmorServices = {
  getmhwArmorDetail: (limit?: number) : Promise<IGetMHWArmorDetailPesponse> => {
    const respone = `${MHW_BASE_URL_ARMOR}/${limit}`;
    return axios.get(respone);
  },
};
