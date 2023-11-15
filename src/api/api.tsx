import { FormInterface } from "../interfaces";

const BASE_URL = "http://localhost:8080";

class CupcakeApi {
    static async request(endpoint: string, data = {}, method = "get") {
        const url = `${BASE_URL}/${endpoint}`;
        const queryParams = (method === "get") ? new URLSearchParams(data).toString() : '';

        const apiUrl = queryParams ? `${url}?${queryParams}` : url;
    
        const headers = {
          'Content-Type': 'application/json',
        };
    
        const requestOptions = {
          method,
          headers,
          body: method !== "get" ? JSON.stringify(data) : undefined,
        };
    
        try {
          const response = await fetch(apiUrl, requestOptions);
    
          return await response.json();
        } catch (err: any) {
          console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API Routes
    static async getCupcakes() {
        let res = await this.request('cupcakes');
        return res;
    }

    static async getCupcake(id?: string) {
      let res = await this.request(`cupcakes/${id}`);
      return res;
    }

    static async createCupcake(formData: FormInterface) {
        let res = await this.request('cupcakes', formData, "post");
        return res;
    }
    

    static async updateCupcake(id: string | number, formData: FormInterface) {
      await this.request(`cupcakes/${id}`, formData, "PATCH");
    }

    static async deleteCupcake(id?: string) {
        await this.request(`cupcakes/${id}`, {}, "DELETE");
        console.log("Cupcake deleted successfully!");
    }
}

export default CupcakeApi;