import { DataTypes, Model } from "sequelize"
import { NotificationsProps } from "../../domain/notification/entity/notification"
import { sequelize } from "../sequelize"

export class SequelizeNotification extends Model<
    NotificationsProps,
    Omit<NotificationsProps, "id" | "status">
> {
    declare id: string
    declare recipientEmail: string
    declare recipientPhone: string
    declare dateSend: string
    declare message: string
    declare status: string
}

SequelizeNotification.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        recipientEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipientPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateSend: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "notification",
        timestamps: false,
    }
)
