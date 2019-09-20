import * as express from "express";
import * as bodyParser from "body-parser";
// import { Routes } from "./routes/playlistRoutes";
import { PlaylistRoutes } from "./routes/playlistRoutes";
import { OwnerRoutes } from "./routes/ownerRoutes";
import { Request, Response } from "express";
import * as mongoose from "mongoose";

class App {

  public app: express.Application = express();
  public playlistRoutes: PlaylistRoutes = new PlaylistRoutes();
  public ownerRoutes: OwnerRoutes = new OwnerRoutes();
  // public Routes: Routes = new Routes();
  public mongoUrl: string = 'mongodb://localhost/SPdb';
  // public mongoUrl: string = 'mongodb://nmura:nmura@localhost:27017/SPdb';

  constructor() {
    this.config();
    this.mongoSetup();

    this.app.route('/')
    .get((req: Request, res: Response) => {
        res.status(200).send({
            message: 'GET request successfulll!!!!'
        });
    });

    // this.Routes.routes(this.app);
    this.playlistRoutes.routes(this.app);
    this.ownerRoutes.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // serving static files
    this.app.use(express.static('public'));
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
  }

}

export default new App().app;
