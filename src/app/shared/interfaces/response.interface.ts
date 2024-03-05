import { HttpStatusCode } from "@angular/common/http";

export interface Response<T> {
    status: HttpStatusCode;
    data: T | T[];
    error?: string;
}