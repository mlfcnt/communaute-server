// Initializes the `markersCategories` service on path `/markers-categories`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { MarkersCategories } from './markers-categories.class';
import createModel from '../../models/markers-categories.model';
import hooks from './markers-categories.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'markers-categories': MarkersCategories & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/markers-categories', new MarkersCategories(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('markers-categories');

  service.hooks(hooks);
}
