import {
    CreateNotificationRepository,
    DeleteNotificationRepository,
    GetNotificationRepository,
} from "./notification"

const createNotificationRepository = CreateNotificationRepository.create()
const getNotificationRepository = GetNotificationRepository.create()
const deleteNotificationRepository = DeleteNotificationRepository.create()

export {
    createNotificationRepository,
    getNotificationRepository,
    deleteNotificationRepository,
}
