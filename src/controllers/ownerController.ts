import * as mongoose from 'mongoose';
import { OwnerSchema } from '../models/ownerModel';
import { Request, Response } from 'express';

const Owner = mongoose.model('Owner', OwnerSchema);

export class OwnerController {

  public addNewOwner (req: Request, res: Response) {
    let newOwner = new Owner(req.body);

    newOwner.save((err, owner) => {
      if(err){
        res.send(err);
      }
      res.json(owner);
    });
  }

  public getOwners (req: Request, res: Response) {
    Owner.find({}, (err, owner) => {
      if(err){
        res.send(err);
      }
      res.json(owner);
    });
  }

  public getOwnerWithID (req: Request, res: Response) {
    Owner.findById(req.params.ownerId, (err, owner) => {
      if(err){
        res.send(err);
      }
      res.json(owner);
    });
  }

  public updateOwner (req: Request, res: Response) {
    Owner.findOneAndUpdate({ _id: req.params.ownerId }, req.body, { new: true }, (err, owner) => {
      if(err){
        res.send(err);
      }
      res.json(owner);
    });
  }

  public deleteOwner (req: Request, res: Response) {
    Owner.remove({ _id: req.params.ownerId }, (err, owner) => {
      if(err){
        res.send(err);
      }
      res.json({ message: 'Successfully deleted owner!'});
    });
  }

}