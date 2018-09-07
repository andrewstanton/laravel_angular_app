export interface IResponseLinks {
    first: string;
    last: string;
    prev: string;
    next: string;
}

export interface IResponseMeta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface IResponseData {
    type: string;
    id: string;
    attributes: Object;
    relationships: Object;
}

export interface IResponseIncluded {
    attributes: Object;
    id: string;
    relationships: Object;
    type: string;
}

export interface IResponse {
    data: Array<IResponseData>;
    included?: Array<IResponseIncluded>;
    links: IResponseLinks;
    meta: IResponseMeta;
}
