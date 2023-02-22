import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerReportModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReportModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReportModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReportModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReportModel = LazyLoading extends LazyLoadingDisabled ? EagerReportModel : LazyReportModel

export declare const ReportModel: (new (init: ModelInit<ReportModel>) => ReportModel) & {
  copyOf(source: ReportModel, mutator: (draft: MutableModel<ReportModel>) => MutableModel<ReportModel> | void): ReportModel;
}