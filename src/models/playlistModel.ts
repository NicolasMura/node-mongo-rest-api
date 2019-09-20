import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlaylistSchema = new Schema({
  sp_id: {
    type: String, // ex: "37i9dQZF1DX5Lf3LZ6Czqu"
    required: 'Spotify data - ID'
  },
  sp_name: {
    type: String,
    required: 'Spotify data - Playlist\'s name'
  },
  sp_images_urls: { // ex: ["https://i.scdn.co/image/ab67706f0000000220464966be86b008bd9dfc58"]
    type: [String],
    required: 'Spotify data - Images URLs'
  },
  sp_tracks_count: {
    type: Number,
    required: 'Spotify data - Tracks count'
  },
  sp_tracks_uri: { // ex: "spotify:playlist:37i9dQZF1DX5Lf3LZ6Czqu"
    type: String,
    required: 'Spotify data - Tracks URI'
  },
  sp_tracks_href: {
    type: String, // ex: "https://api.spotify.com/v1/playlists/37i9dQZF1DX5Lf3LZ6Czqu"
    required: 'Spotify data - Tracks HREF'
  },
  description: {
    type: [String],
    required: 'App User data - Enter an additional description'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});