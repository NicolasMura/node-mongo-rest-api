import mongoose from 'mongoose';
import dummy from "mongoose-dummy";
import { PlaylistSchema } from "models/playlistModel";
import { OwnerSchema } from "models/ownerModel";

const ignoredFields = ['_id','created_at', '__v', /detail.*_info/];

let playlistModel = mongoose.model('Playlist', PlaylistSchema);
let randomPlaylist = dummy(playlistModel, {
    ignore: ignoredFields,
    returnDate: true
});
console.log(randomPlaylist);