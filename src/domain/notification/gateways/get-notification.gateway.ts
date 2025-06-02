import { Notifications } from "../entity/notification"

export interface GetNotificationGateway {
    getById(id: string): Promise<Notifications>
}
