import { FormInterface } from "./interfaces";

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
    
          if (!response.ok) {
            console.error("API Error:", response);
            const errorMessage = await response.json();
            throw Array.isArray(errorMessage) ? errorMessage : [errorMessage];
          }
    
          return await response.json();
        } catch (err) {
          console.error("Fetch Error:", err);
          throw err;
        }
    }

    // Individual API Routes
    static async getCupcakes() {
        let res = await this.request('cupcakes');
        return res;
    }

    static async createCupcake(formData: FormInterface) {
        let res = await this.request('cupcakes', formData, "post");
        return res;
    }
}

export default CupcakeApi;