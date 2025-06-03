import {
    createNotification,
    deleteNotification,
    getNotification,
} from "../../../../usecases"
import {
    CreateNotificationRoute,
    DeleteNotificationRoute,
    GetNotificationRoute,
} from "./notification"

const createNotificationRoute =
    CreateNotificationRoute.create(createNotification)

const getNotificationRoute = GetNotificationRoute.create(getNotification)

const deleteNotificationRoute =
    DeleteNotificationRoute.create(deleteNotification)

const routes = [
    createNotificationRoute,
    getNotificationRoute,
    deleteNotificationRoute,
]

export default routes
