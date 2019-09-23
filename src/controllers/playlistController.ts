import mongoose from 'mongoose';
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
    // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
    // by default, you need to set it to false.
    mongoose.set('useFindAndModify', false);
    Playlist.findOneAndUpdate({ _id: req.params.playlistId }, req.body, { new: true }, (err, playlist) => {
      if(err){
        res.send(err);
      }
      res.json(playlist);
    });
  }

  public deletePlaylist (req: Request, res: Response) {
    Playlist.deleteOne({ _id: req.params.playlistId }, (err, playlist) => {
      if(err){
        res.send(err);
      }
      res.json({ message: 'Successfully deleted playlist!'});
    });
  }

}