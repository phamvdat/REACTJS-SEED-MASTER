export interface IPagination {
  skip: number;
  limit: number;
  total: number;
}

export interface IStatusResponse {
  status: number;
  statusText: string;
}

export interface IPaginationResponse<T> extends IStatusResponse {
  data: Array<T>;
  pagination: IPagination;
}

export interface IDataResponse<T> extends IStatusResponse {
  data: T;
}

export interface ISelect<T> {
  label: string;
  value: T;
}

export interface ISelectCompo<L, V = string> {
  label: string | React.ReactNode | L;
  value: V;
}

export interface ILanguages extends ISelect<string> {
  flag: string;
}

export interface IModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
