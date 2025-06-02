import { Notifications } from "../entity/notification"

export interface CreateNotificationGateway {
    save(data: Notifications): Promise<void>
}
