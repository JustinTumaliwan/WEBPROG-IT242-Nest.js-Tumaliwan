import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    fetchMessages(): Promise<any[]>;
    postMessage(body: {
        driverName: string;
        message: string;
    }): Promise<null>;
}
