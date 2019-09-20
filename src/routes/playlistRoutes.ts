import { Request, Response, NextFunction } from "express";
import { PlaylistController } from "../controllers/playlistController";

export class PlaylistRoutes {

public playlistController: PlaylistController = new PlaylistController();

  public routes(app): void {

    // Playlist
    app.route('/playlist')
    .get((req: Request, res: Response, next: NextFunction) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        // if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
        //     res.status(401).send('You shall not pass!');
        // } else {
        //     next();
        // }
        next();
    }, this.playlistController.getPlaylists)

    // POST endpoint
    .post(this.playlistController.addNewPlaylist);

    // Playlist detail
    app.route('/playlist/:playlistId')
    // get specific playlist
    .get(this.playlistController.getPlaylistWithID)
    .put(this.playlistController.updatePlaylist)
    .delete(this.playlistController.deletePlaylist);

  }

}