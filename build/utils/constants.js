"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants = {
    DATABASE_URI: process.env.DATABASE_URI,
    DATABASES: {
        ROOM: "room",
        ROOM_TYPES: "room_types",
    },
    MESSAGES: {
        FETCHED: "Resource fetched successfully",
        UPDATED: "Resource updated successfully",
        DELETED: "Resource deleted successfully",
        CREATED: "Resource created successfully",
        ERROR: "Resource error"
    }
};
exports.default = constants;
