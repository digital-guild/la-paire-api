import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CmbWhatsappService {
    baseURL = process.env.CMB_BASE_URL;
    apiKey = process.env.CMB_API_KEY;
    phone = process.env.CMB_NUMBER;

    constructor(
        private readonly httpService: HttpService
    ) {}

    sendWhatsappMessage(message: string) {
        this.httpService.get(this.baseURL, {
            params: {
                apikey: this.apiKey,
                phone: this.phone,
                text: message
            }
        }).subscribe(response => {
            console.log(response.data);
        });
    }
}