import { createNotificationRepository } from "../infra/repositories"
import { CreateNotificationUsecase } from "./notification"

const createNotification = CreateNotificationUsecase.create(
    createNotificationRepository
)

export { createNotification }
