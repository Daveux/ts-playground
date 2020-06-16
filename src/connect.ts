import  mongoose from "mongoose"

export default function connectMongoose(db: string) {
    const passConnect = function connect () {
        mongoose.connect(db, {useNewUrlParser: true})
            .then(function goodConnection() {
                console.log("Database hooked up successfully")
            })
            .catch(function badConnection(error) {
                console.log("Error hooking up: ", error);
                return process.exit(1);
            })
    }
    passConnect();

    mongoose.connection.on("disconnected", passConnect);
}

