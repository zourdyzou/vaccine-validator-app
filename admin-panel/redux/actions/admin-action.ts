/* eslint-disable indent */
import { Dispatch } from 'react';
import {
  ClearError,
  IAdminSummaryFail,
  IAdminSummaryRequest,
  IAdminSummarySuccess,
} from '@/interfaces/admin-type-action';
import { AdminSummaryType } from '@/redux/constants/admin-constant';
import { adminApi } from '@/api/adminApi';
import { IAdminSummaryData } from '@/interfaces/data-type';

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
        payload: adminSummaryData.data as IAdminSummaryData,
      });
    } catch (error) {
      dispatch({
        type: AdminSummaryType.ADMIN_FETCH_SUMMARY_DATA_FAIL,
        payload: `Something is wrong: ${error}`,
      });
    }
  };

// Clear Errors
export const clearErrors = () => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: ClearError.CLEAR_ERRORS,
  });
};
