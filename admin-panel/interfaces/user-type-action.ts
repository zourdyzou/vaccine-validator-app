import {
  CreateUserType,
  CREATEVaccinatedUserType,
  GETAllUserType,
  UpdateUserType,
} from '@/redux/constants/user-constant';
import {
  IUserData,
  IVaccinated,
  TypedUserParams,
} from '@/interfaces/data-type';
import { IClearErrors } from '@/interfaces/admin-type-action';

export interface ICreateUserRequest {
  type: CreateUserType.CREATE_USER_REQUEST;
}

export interface ICreateUserSuccess {
  type: CreateUserType.CREATE_USER_SUCCESS;
  payload: IUserData;
}

export interface ICreateUserFail {
  type: CreateUserType.CREATE_USER_FAIL;
  payload: string | null;
}

export interface IUpdateUserRequest {
  type: UpdateUserType.UPDATE_USER_REQUEST;
}

export interface IUpdateUserSuccess {
  type: UpdateUserType.UPDATE_USER_SUCCESS;
  payload: TypedUserParams;
}

export interface IUpdateUserFail {
  type: UpdateUserType.UPDATE_USER_FAIL;
  payload: string | null;
}

export interface IGETAllUserRequest {
  type: GETAllUserType.GET_ALL_USER_REQUEST;
}

export interface IGETAllUserSuccess {
  type: GETAllUserType.GET_ALL_USER_SUCCESS;
  payload: IUserData;
}

export interface IGETAllUserFail {
  type: GETAllUserType.GET_ALL_USER_FAIL;
  payload: string | null;
}

export interface ICreateVaccinatedUserRequest {
  type: CREATEVaccinatedUserType.CREATE_VACCINATED_USER_REQUEST;
}

export interface ICreateVaccinatedUserSuccess {
  type: CREATEVaccinatedUserType.CREATE_VACCINATED_USER_SUCCESS;
  payload: {
    message: string;
    data: IVaccinated;
  };
}

export interface ICreateVaccinatedUserFail {
  type: CREATEVaccinatedUserType.CREATE_VACCINATED_USER_FAIL;
  payload: string | null;
}

export type IUserAction =
  | ICreateUserRequest
  | ICreateUserSuccess
  | ICreateUserFail
  | IUpdateUserRequest
  | IUpdateUserSuccess
  | IUpdateUserFail
  | IGETAllUserSuccess
  | IGETAllUserRequest
  | IGETAllUserFail
  | ICreateVaccinatedUserRequest
  | ICreateVaccinatedUserSuccess
  | ICreateVaccinatedUserFail
  | IClearErrors;
