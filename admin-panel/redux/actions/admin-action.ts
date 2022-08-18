/* eslint-disable indent */
import { Dispatch } from 'react';
import axios from 'axios';
import {
  ClearError,
  IAdminSummaryFail,
  IAdminSummaryRequest,
  IAdminSummarySuccess,
} from '@/interfaces/admin-type-action';
import { AdminSummaryType } from '@/redux/constants/admin-constant';
import { adminApi } from '@/api/adminApi';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const getSummary =
  () =>
  async (
    dispatch: Dispatch<
      IAdminSummaryRequest | IAdminSummarySuccess | IAdminSummaryFail
    >
  ) => {
    try {
      dispatch({ type: AdminSummaryType.ADMIN_FETCH_SUMMARY_DATA_REQUEST });

      const adminSummaryData = await adminApi.getSummary();

      dispatch({
        type: AdminSummaryType.ADMIN_FETCH_SUMMARY_DATA_SUCCESS,
        payload: adminSummaryData.data,
      });
    } catch (error) {
      dispatch({
        type: AdminSummaryType.ADMIN_FETCH_SUMMARY_DATA_FAIL,
        payload: `Something is wrong: ${getErrorMessage(error)}`,
      });
    }
  };

// Clear Errors
export const clearErrors = () => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: ClearError.CLEAR_ERRORS,
  });
};