// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Customer, Factors, Listing1 } = initSchema(schema);

export {
  Customer,
  Factors,
  Listing1
};