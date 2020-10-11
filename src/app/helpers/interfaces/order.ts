export interface Order {
    id: number,
    orderId: string,
    orderedByDbId: number,
    productDbIdOrdered: number,
    orderStatus: 'Pending' | 'Processing' | 'Delivered' | 'Shipped' | 'Returned' | 'Canceled',
    placed_at: string
}