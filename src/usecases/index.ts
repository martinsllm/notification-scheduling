import {
    createNotificationRepository,
    getNotificationRepository,
} from "../infra/repositories"
import {
    CreateNotificationUsecase,
    GetNotificationUsecase,
} from "./notification"

const createNotification = CreateNotificationUsecase.create(
    createNotificationRepository
)

const getNotification = GetNotificationUsecase.create(getNotificationRepository)

export { createNotification, getNotification }
