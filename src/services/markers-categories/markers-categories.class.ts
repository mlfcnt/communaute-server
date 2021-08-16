import { Service, MongooseServiceOptions } from "feathers-mongoose";
import { Application } from "../../declarations";

export class MarkersCategories extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    super(options);
  }
  async find(): Promise<any> {
    return this._find({
      paginate: false,
    });
  }
}
