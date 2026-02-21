export declare class AppService {
    private supabase;
    constructor();
    getMessages(): Promise<any[]>;
    addMessage(driverName: string, message: string): Promise<null>;
}
