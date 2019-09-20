import { Request, Response, NextFunction } from "express";
import { OwnerController } from "../controllers/ownerController";

export class OwnerRoutes {

public ownerController: OwnerController = new OwnerController();

  public routes(app): void {

    // Owner
    app.route('/owner')
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
    }, this.ownerController.getOwners)

    // POST endpoint
    .post(this.ownerController.addNewOwner);

    // Owner detail
    app.route('/owner/:ownerId')
    // get specific owner
    .get(this.ownerController.getOwnerWithID)
    .put(this.ownerController.updateOwner)
    .delete(this.ownerController.deleteOwner);

  }

}