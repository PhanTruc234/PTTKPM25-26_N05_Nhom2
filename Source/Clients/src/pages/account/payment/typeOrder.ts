interface Product {
    _id: string;
    name: string;
    images: string[];
    amount: number;
}

interface OrderItem {
    productId: Product;
    amount: number;
    price: number;
}

export interface Order {
    _id: string;
    userId: {
        _id: string;
    };
    totalPrice: number;
    status: "PENDING" | "PROCESSING" | "SHIPPING" | "COMPLETED" | "CANCELLED";
    createdAt: string;
    paymentMethod: "online" | "cod";
    items: OrderItem[];
}