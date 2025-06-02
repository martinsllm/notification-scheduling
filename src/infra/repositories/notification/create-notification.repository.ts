import { SequelizeNotification } from "../../../data/models/Notification"
import { Notifications } from "../../../domain/notification/entity/notification"
import { CreateNotificationGateway } from "../../../domain/notification/gateways/create-notification.gateway"

export class CreateNotificationRepository implements CreateNotificationGateway {
    private constructor() {}

    public static create() {
        return new CreateNotificationRepository()
    }

    public async save(data: Notifications): Promise<void> {
        const notification = {
            id: data.id,
            recipientEmail: data.recipientEmail,
            recipientPhone: data.recipientPhone,
            dateSend: data.dateSend,
            message: data.message,
            status: data.status,
        }

        await SequelizeNotification.create({
            ...notification,
        })
    }
}
