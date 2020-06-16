"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connectMongoose(db) {
    const passConnect = function connect() {
        mongoose_1.default.connect(db, { useNewUrlParser: true })
            .then(function goodConnection() {
            console.log("Database hooked up successfully");
        })
            .catch(function badConnection(error) {
            console.log("Error hooking up: ", error);
            return process.exit(1);
        });
    };
    passConnect();
    mongoose_1.default.connection.on("disconnected", passConnect);
}
exports.default = connectMongoose;
//# sourceMappingURL=connect.js.map