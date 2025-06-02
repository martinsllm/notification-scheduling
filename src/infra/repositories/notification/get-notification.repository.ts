import { SequelizeNotification } from "../../../data/models/Notification"
import { Notifications } from "../../../domain/notification/entity/notification"
import { GetNotificationGateway } from "../../../domain/notification/gateways"
import { NotFoundError } from "../../api/middlewares/errors/helpers/api-errors"

export class GetNotificationRepository implements GetNotificationGateway {
    private constructor() {}

    public static create() {
        return new GetNotificationRepository()
    }

    public async getById(id: string): Promise<Notifications> {
        const notification = await SequelizeNotification.findByPk(id)

        if (!notification) throw new NotFoundError("Notification Not Found!")

        const data = this.present(notification)

        return data
    }

    private present(notification: SequelizeNotification): Notifications {
        const data = Notifications.with({
            id: notification.id,
            recipientEmail: notification.recipientEmail,
            recipientPhone: notification.recipientPhone,
            dateSend: notification.dateSend,
            message: notification.message,
            status: notification.status,
        })

        return data
    }
}
