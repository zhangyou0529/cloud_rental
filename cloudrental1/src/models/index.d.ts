import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly age?: number | null;
  readonly num_fam?: string | null;
  readonly occupation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly age?: number | null;
  readonly num_fam?: string | null;
  readonly occupation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

type EagerFactors = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Factors, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly location?: number | null;
  readonly facilities?: number | null;
  readonly size?: number | null;
  readonly amenities?: number | null;
  readonly idn?: Listing1 | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly factorsIdnId?: string | null;
}

type LazyFactors = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Factors, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly location?: number | null;
  readonly facilities?: number | null;
  readonly size?: number | null;
  readonly amenities?: number | null;
  readonly idn: AsyncItem<Listing1 | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly factorsIdnId?: string | null;
}

export declare type Factors = LazyLoading extends LazyLoadingDisabled ? EagerFactors : LazyFactors

export declare const Factors: (new (init: ModelInit<Factors>) => Factors) & {
  copyOf(source: Factors, mutator: (draft: MutableModel<Factors>) => MutableModel<Factors> | void): Factors;
}

type EagerListing1 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Listing1, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly price?: string | null;
  readonly location?: string | null;
  readonly size?: string | null;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyListing1 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Listing1, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly price?: string | null;
  readonly location?: string | null;
  readonly size?: string | null;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Listing1 = LazyLoading extends LazyLoadingDisabled ? EagerListing1 : LazyListing1

export declare const Listing1: (new (init: ModelInit<Listing1>) => Listing1) & {
  copyOf(source: Listing1, mutator: (draft: MutableModel<Listing1>) => MutableModel<Listing1> | void): Listing1;
}