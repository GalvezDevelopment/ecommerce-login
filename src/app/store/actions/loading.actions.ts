import {createAction} from '@ngrx/store';

export const showLoading = createAction('Loading');
export const hiddenLoading = createAction('Loading completed');