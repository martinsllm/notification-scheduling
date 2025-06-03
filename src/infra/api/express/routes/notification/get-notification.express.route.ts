import { Request, Response } from "express"
import {
    GetNotificationInputDto,
    GetNotificationOutputDto,
    GetNotificationUsecase,
} from "../../../../../usecases/notification"
import { HttpMethod, Route } from "../route"

export type GetNotificationResponseDto = GetNotificationOutputDto

export class GetNotificationRoute implements Route {
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly notificationService: GetNotificationUsecase
    ) {}

    public static create(notificationService: GetNotificationUsecase) {
        return new GetNotificationRoute(
            "/notification/:id",
            HttpMethod.GET,
            notificationService
        )
    }

    public getHandler() {
        return async (req: Request, res: Response) => {
            const { id } = req.params

            const input: GetNotificationInputDto = {
                id,
            }

            const output = await this.notificationService.execute(input)

            const responseBody = this.present(output)

            res.json(responseBody).send()
        }
    }

    public getPath(): string {
        return this.path
    }

    public getMethod(): HttpMethod {
        return this.method
    }

    private present(
        input: GetNotificationOutputDto
    ): GetNotificationResponseDto {
        const response = {
            recipientEmail: input.recipientEmail,
            recipientPhone: input.recipientPhone,
            dateSend: input.dateSend,
            message: input.message,
            status: input.status,
        }

        return response
    }
}
