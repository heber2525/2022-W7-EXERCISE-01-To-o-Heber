import mongoose from 'mongoose';

const modelName = 'User';

const userSchema = mongoose.Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
});

let User;
if (mongoose.default.models[modelName]) {
    User = mongoose.model(modelName);
} else {
    User = mongoose.model(modelName, userSchema);
}
export default User;
