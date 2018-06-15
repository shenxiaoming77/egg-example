declare const Service: any;
declare const mockUsers: {
    name: string;
    home: string;
    url: string;
}[];
declare const userDatabase: {
    get(name: any): Promise<{
        name: string;
        home: string;
        url: string;
    }>;
};
declare class User extends Service {
    get(name: any): Promise<{
        name: string;
        home: string;
        url: string;
    }>;
}
