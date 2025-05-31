export type NotificationsProps = {
    id: string
    recipientEmail: string
    recipientPhone: string
    dateSend: string
    message: string
    createdAt: Date
}

export class Notifications {
    private constructor(private props: NotificationsProps) {}

    public static create(props: Omit<NotificationsProps, "id" | "createdAt">) {
        return new Notifications({
            id: crypto.randomUUID().toString(),
            recipientEmail: props.recipientEmail,
            recipientPhone: props.recipientPhone,
            dateSend: props.dateSend,
            message: props.message,
            createdAt: new Date(),
        })
    }

    public static with(props: NotificationsProps) {
        return new Notifications(props)
    }

    public get id() {
        return this.props.id
    }

    public get recipientEmail() {
        return this.props.recipientEmail
    }

    public get recipientPhone() {
        return this.props.recipientPhone
    }

    public get dateSend() {
        return this.props.dateSend
    }

    public get message() {
        return this.props.message
    }

    public get createdAt() {
        return this.props.createdAt
    }
}
