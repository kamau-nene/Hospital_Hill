import mongoose from "mongoose";
const {Schema, model}= mongoose;
const urlSchema= new Schema({
    shortid: {type: String, required: true, unique: true},
    redirectUrl: {type: String, required:true},
    visitHistory: [
        {
            timeStamp: {type: Date, default: date.now}
        }
    ]
},{
    timestamps: true,
})


const Url= model('Urls', urlSchema);
export default Url;