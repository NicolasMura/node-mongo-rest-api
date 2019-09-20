import * as mongoose from 'mongoose';
import { PlaylistSchema } from './playlistModel';
const Schema = mongoose.Schema;

export const OwnerSchema = new Schema({
  sp_id: {
    type: String, // ex: "37i9dQZF1DX5Lf3LZ6Czqu"
    required: 'Spotify data - ID'
  },
  sp_display_name: {
    type: String,
    required: 'Spotify data - Owner\'s name'
  },
  sp_owner_uri: {
    type: String, // ex: "spotify:user:nikouz"
    required: 'Spotify data - Owner URI'
  },
  sp_owner_href: {
    type: String, // ex: "https://api.spotify.com/v1/users/nikouz"
    required: 'Spotify data - Owner HREF'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  sp_playlists: [PlaylistSchema]
});