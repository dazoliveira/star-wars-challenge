import { IJediVsDarkseidDTO, IResourceDTO } from "models"
import axiosClient from "./exiosClient"

const jediVsDarkseidApi = {
    async getPathByMaster({ resource }: IResourceDTO): Promise<IJediVsDarkseidDTO>{
        const url = `/people/${resource}`
        return await axiosClient.get(url)
    }
}

export default jediVsDarkseidApi