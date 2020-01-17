import mongoose from 'mongoose';

mongoose.Promise = global.Promise

// スキーマ
const CharacterSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// モデル
const Character = mongoose.model('Character', CharacterSchema)

export default Character