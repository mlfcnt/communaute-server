// Initializes the `markers` service on path `/markers`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Markers } from "./markers.class";
import createModel from "../../models/markers.model";
import hooks from "./markers.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    markers: Markers & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: {
      default: 5000,
      max: 5000,
    },
  };

  // Initialize our service with any options it requires
  app.use("/markers", new Markers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("markers");

  service.hooks(hooks);
}
