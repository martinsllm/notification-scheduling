import { createNotification } from "../../../../usecases"
import { CreateNotificationRoute } from "./notification"

const createNotificationRoute =
    CreateNotificationRoute.create(createNotification)

const routes = [createNotificationRoute]

export default routes
