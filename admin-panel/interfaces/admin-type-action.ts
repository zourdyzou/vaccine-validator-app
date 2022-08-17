import {
  AdminAuthType,
  AdminSummaryType,
} from '@/redux/constants/admin-constant';
import { IAdminSummaryData } from '@/interfaces/data-type';

export type CLEAR_ERRORS = 'CLEAR_ERRORS';

// admin authentication
export interface IAdminAuthRequest {
  type: AdminAuthType.ADMIN_AUTH_REQUEST;
}

export interface IAdminAuthSuccess {
  type: AdminAuthType.ADMIN_AUTH_SUCCESS;
  payload: {
    username: string;
    password: string;
  };
}

export interface IAdminAuthFail {
  type: AdminAuthType.ADMIN_AUTH_FAIL;
  payload: string | null;
}

// get admin summary
export interface IAdminSummaryRequest {
  type: AdminSummaryType.ADMIN_FETCH_SUMMARY_DATA_REQUEST;
}

export interface IAdminSummarySuccess {
  type: AdminSummaryType.ADMIN_FETCH_SUMMARY_DATA_SUCCESS;
  payload: IAdminSummaryData;
}

export interface IAdminSummaryFail {
  type: AdminSummaryType.ADMIN_FETCH_SUMMARY_DATA_FAIL;
  payload: string | null;
}

export interface IClearErrors {
  type: CLEAR_ERRORS;
}

export type IAdminAction =
  | IAdminAuthRequest
  | IAdminAuthSuccess
  | IAdminAuthFail
  | IAdminSummaryRequest
  | IAdminSummarySuccess
  | IAdminSummaryFail
  | IClearErrors;
