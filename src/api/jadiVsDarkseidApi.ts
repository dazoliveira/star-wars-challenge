import { IJediVsDarkseidDTO, IResouerceDTO } from "models"
import axiosClient from "./exiosClient"

const jadiVsDarkseidApi = {
    async getPathByMaster({ resource }: IResouerceDTO): Promise<IJediVsDarkseidDTO>{
        const url = `/people/${resource}`
        return await axiosClient.get(url)
    }
}

export default jadiVsDarkseidApi