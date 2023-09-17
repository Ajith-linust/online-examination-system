import { IUser } from "../state/types";

export interface IUserPayload {
    id: number;
}

export interface IAction {
    users: IUser[];
};
