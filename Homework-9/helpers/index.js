import { nanoid } from "nanoid";

export const compareById = (targetId) => (item) => item.id === targetId;

export const mapMessageSnapshotToMessage = (snapshot) => ({
    ...snapshot.val(),
    id: nanoid(),
})

export const createChat = (name) => ({
    name,
    id: nanoid(),
})

export const mapChatSnapshotToChat = (snapshot) => ({
    ...snapshot.val(),
    id: nanoid(),
})
