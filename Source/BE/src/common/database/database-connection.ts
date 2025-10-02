import mongoose, { Connection } from 'mongoose';

export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connection: Connection;
    private constructor() { }
    static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
    async connect(uri: string) {
        if (!this.connection) {
            const conn = await mongoose.connect(uri);
            this.connection = conn.connection;
            console.log('Database connected');
        }
        return this.connection;
    }
    getConnection(): Connection {
        if (!this.connection) throw new Error('Database not connected yet');
        return this.connection;
    }
}
