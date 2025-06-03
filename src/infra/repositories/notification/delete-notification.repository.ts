import { SequelizeNotification } from "../../../data/models/Notification"
import { StatusNotification } from "../../../domain/notification/enum/status.enum"
import { DeleteNotificationGateway } from "../../../domain/notification/gateways"

export class DeleteNotificationRepository implements DeleteNotificationGateway {
    private constructor() {}

    public static create() {
        return new DeleteNotificationRepository()
    }

    public async delete(id: string): Promise<void> {
        await SequelizeNotification.update(
            {
                status: StatusNotification.CANCELED,
            },
            {
                where: { id },
            }
        )
    }
}
