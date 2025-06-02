import { Notifications } from "../../domain/notification/entity/notification"
import { CreateNotificationGateway } from "../../domain/notification/gateways/create-notification.gateway"
import { Usecase } from "../usecase"

export type CreateNotificationInputDto = {
    recipientEmail: string
    recipientPhone: string
    dateSend: string
    message: string
}

export type CreateNotificationOutputDto = {
    id: string
}

export class CreateNotificationUsecase
    implements Usecase<CreateNotificationInputDto, CreateNotificationOutputDto>
{
    private constructor(
        private readonly notificationGateway: CreateNotificationGateway
    ) {}

    public static create(notificationGateway: CreateNotificationGateway) {
        return new CreateNotificationUsecase(notificationGateway)
    }

    public async execute(
        input: CreateNotificationInputDto
    ): Promise<CreateNotificationOutputDto> {
        const notification = Notifications.create(input)

        await this.notificationGateway.save(notification)

        const output = this.presentOutput(notification)

        return output
    }

    private presentOutput(
        notification: Notifications
    ): CreateNotificationOutputDto {
        const output: CreateNotificationOutputDto = {
            id: notification.id,
        }

        return output
    }
}
