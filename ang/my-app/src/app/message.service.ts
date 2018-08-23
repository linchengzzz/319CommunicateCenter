import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    public messages: string[] = [];
    constructor() {}
    add(message: string): void {
        this.messages.push(message);
    }
    clear(): void {
        this.messages = [];
    }
}
