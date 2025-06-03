import {
    createNotificationRepository,
    deleteNotificationRepository,
    getNotificationRepository,
} from "../infra/repositories"
import {
    CreateNotificationUsecase,
    DeleteNotificationUsecase,
    GetNotificationUsecase,
} from "./notification"

const createNotification = CreateNotificationUsecase.create(
    createNotificationRepository
)

const getNotification = GetNotificationUsecase.create(getNotificationRepository)

const deleteNotification = DeleteNotificationUsecase.create(
    getNotificationRepository,
    deleteNotificationRepository
)

export { createNotification, getNotification, deleteNotification }
