import Realm from "realm";
import { OrderSchema } from "./Schemas/OrderSchema";

export const getRealm = async () =>
  await Realm.open({
    path: "help-desk-app",
    schema: [OrderSchema],
    schemaVersion: 1,
  });
