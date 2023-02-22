// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ReportModel } = initSchema(schema);

export {
  ReportModel
};