import { Injectable } from "@nestjs/common";
import slugify from "slugify";

@Injectable()
export class SlugifyService {
    slugify(text: string): string {
        /*const slugifiedText = text
            .toString()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');*/
        
        const slugifiedText = slugify(text, {
            lower: true,
        })
        
        const timestamps = new Date().getTime();

        return `${slugifiedText}-${timestamps}`;
    }
}