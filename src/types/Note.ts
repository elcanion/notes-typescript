import { Timestamp } from "firebase/firestore";

export type Note = {
    id: string,
    text: string,
    createdAt: Timestamp,
}