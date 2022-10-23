"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilePicture = exports.UserSchema = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const user_entity_2 = require("./user.entity");
exports.UserSchema = new typeorm_1.EntitySchema({
    name: 'User',
    target: user_entity_1.User,
    columns: {
        id: {
            type: String,
            primary: true,
            generated: true,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        userName: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        createDate: {
            type: String,
        },
        updateDate: {
            type: String,
        },
    },
});
exports.profilePicture = new typeorm_1.EntitySchema({
    name: 'profilePicture',
    target: user_entity_2.Picture,
    columns: {
        id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
});
//# sourceMappingURL=user.schema.js.map