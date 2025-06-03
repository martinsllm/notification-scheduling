import { createNotification, getNotification } from "../../../../usecases"
import { CreateNotificationRoute, GetNotificationRoute } from "./notification"

const createNotificationRoute =
    CreateNotificationRoute.create(createNotification)

const getNotificationRoute = GetNotificationRoute.create(getNotification)

const routes = [createNotificationRoute, getNotificationRoute]

export default routes
