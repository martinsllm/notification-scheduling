import {
    DeleteNotificationGateway,
    GetNotificationGateway,
} from "../../domain/notification/gateways"
import { Usecase } from "../usecase"

export type DeleteNotificationInputDto = {
    id: string
}

export type DeleteNotificationOutputDto = void

export class DeleteNotificationUsecase
    implements Usecase<DeleteNotificationInputDto, DeleteNotificationOutputDto>
{
    private constructor(
        private readonly getNotificationGateway: GetNotificationGateway,
        private readonly deleteNotificationGateway: DeleteNotificationGateway
    ) {}

    public static create(
        getNotificationGateway: GetNotificationGateway,
        deleteNotificationGateway: DeleteNotificationGateway
    ) {
        return new DeleteNotificationUsecase(
            getNotificationGateway,
            deleteNotificationGateway
        )
    }

    public async execute(input: DeleteNotificationInputDto): Promise<void> {
        const notification = await this.getNotificationGateway.getById(input.id)

        await this.deleteNotificationGateway.delete(notification.id)
    }
}
