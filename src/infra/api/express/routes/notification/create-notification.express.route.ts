import { Request, Response } from "express"
import { HttpMethod, Route } from "../route"
import {
    CreateNotificationInputDto,
    CreateNotificationOutputDto,
    CreateNotificationUsecase,
} from "../../../../../usecases/notification"

export type CreateNotificationResponse = CreateNotificationOutputDto

export class CreateNotificationRoute implements Route {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly notificationService: CreateNotificationUsecase
    ) {}

    public static create(notificationService: CreateNotificationUsecase) {
        return new CreateNotificationRoute(
            "/notification",
            HttpMethod.POST,
            notificationService
        )
    }

    public getHandler() {
        return async (req: Request, res: Response) => {
            const { recipientEmail, recipientPhone, date, hour, message } =
                req.body

            const dateSend = new Date(date)
            const time = hour.split(":")
            dateSend.setHours(time[0])
            dateSend.setMinutes(time[1])

            const input: CreateNotificationInputDto = {
                recipientEmail,
                recipientPhone,
                dateSend: dateSend.toLocaleString(),
                message,
            }

            const output: CreateNotificationOutputDto =
                await this.notificationService.execute(input)

            const responseBody = this.present(output)

            res.status(201).json(responseBody).send()
        }
    }

    public getPath(): string {
        return this.path
    }

    public getMethod(): HttpMethod {
        return this.method
    }

    private present(
        input: CreateNotificationOutputDto
    ): CreateNotificationResponse {
        const response = { id: input.id }
        return response
    }
}
