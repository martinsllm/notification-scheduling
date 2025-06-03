import { Notifications } from "../../domain/notification/entity/notification"
import { GetNotificationGateway } from "../../domain/notification/gateways"
import { Usecase } from "../usecase"

export type GetNotificationInputDto = {
    id: string
}

export type GetNotificationOutputDto = {
    recipientEmail: string
    recipientPhone: string
    dateSend: string
    message: string
    status: string
}

export class GetNotificationUsecase
    implements Usecase<GetNotificationInputDto, GetNotificationOutputDto>
{
    private constructor(
        private readonly notificationGateway: GetNotificationGateway
    ) {}

    public static create(notificationGateway: GetNotificationGateway) {
        return new GetNotificationUsecase(notificationGateway)
    }

    public async execute(
        input: GetNotificationInputDto
    ): Promise<GetNotificationOutputDto> {
        const notification = await this.notificationGateway.getById(input.id)

        const output = this.presentOutput(notification)

        return output
    }

    private presentOutput(
        notification: Notifications
    ): GetNotificationOutputDto {
        return {
            recipientEmail: notification.recipientEmail,
            recipientPhone: notification.recipientPhone,
            dateSend: notification.dateSend,
            message: notification.message,
            status: notification.status,
        }
    }
}
