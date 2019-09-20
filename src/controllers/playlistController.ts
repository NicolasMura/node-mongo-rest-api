import * as mongoose from 'mongoose';
import { PlaylistSchema } from '../models/playlistModel';
import { Request, Response } from 'express';

const Playlist = mongoose.model('Playlist', PlaylistSchema);

export class PlaylistController {

  public addNewPlaylist (req: Request, res: Response) {
    let newPlaylist = new Playlist(req.body);

    newPlaylist.save((err, playlist) => {
      if(err){
        res.send(err);
      }
      res.json(playlist);
    });
  }

  public getPlaylists (req: Request, res: Response) {
    Playlist.find({}, (err, playlist) => {
      if(err){
        res.send(err);
      }
      res.json(playlist);
    });
  }

  public getPlaylistWithID (req: Request, res: Response) {
    Playlist.findById(req.params.playlistId, (err, playlist) => {
      if(err){
        res.send(err);
      }
      res.json(playlist);
    });
  }

  public updatePlaylist (req: Request, res: Response) {
    Playlist.findOneAndUpdate({ _id: req.params.playlistId }, req.body, { new: true }, (err, playlist) => {
      if(err){
        res.send(err);
      }
      res.json(playlist);
    });
  }

  public deletePlaylist (req: Request, res: Response) {
    Playlist.remove({ _id: req.params.playlistId }, (err, playlist) => {
      if(err){
        res.send(err);
      }
      res.json({ message: 'Successfully deleted playlist!'});
    });
  }

}