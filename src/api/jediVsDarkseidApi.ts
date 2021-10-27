import { JediVsDarkseid, Resource } from "models"
import axiosClient from "./exiosClient"

const jediVsDarkseidApi = {
    async getPathByMaster({ resource }: Resource): Promise<JediVsDarkseid>{
        const url = `/people/${resource}`
        return await axiosClient.get(url)
    }
}

export default jediVsDarkseidApi