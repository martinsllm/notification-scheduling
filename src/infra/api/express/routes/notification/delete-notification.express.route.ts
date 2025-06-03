import { Request, Response } from "express"
import { HttpMethod, Route } from "../route"
import {
    DeleteNotificationInputDto,
    DeleteNotificationUsecase,
} from "../../../../../usecases/notification"

export class DeleteNotificationRoute implements Route {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly notificationService: DeleteNotificationUsecase
    ) {}

    public static create(notificationService: DeleteNotificationUsecase) {
        return new DeleteNotificationRoute(
            "/notification/:id",
            HttpMethod.DELETE,
            notificationService
        )
    }

    getHandler() {
        return async (req: Request, res: Response) => {
            const { id } = req.params

            const input: DeleteNotificationInputDto = {
                id,
            }

            await this.notificationService.execute(input)

            res.status(204).send()
        }
    }

    public getPath(): string {
        return this.path
    }

    public getMethod(): HttpMethod {
        return this.method
    }
}
