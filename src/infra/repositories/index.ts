import {
    CreateNotificationRepository,
    GetNotificationRepository,
} from "./notification"

const createNotificationRepository = CreateNotificationRepository.create()
const getNotificationRepository = GetNotificationRepository.create()

export { createNotificationRepository, getNotificationRepository }
