import { Application } from "../declarations";
import users from "./users/users.service";
import markers from "./markers/markers.service";
import markersCategories from "./markers-categories/markers-categories.service";
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(markers);
  app.configure(markersCategories);
}
