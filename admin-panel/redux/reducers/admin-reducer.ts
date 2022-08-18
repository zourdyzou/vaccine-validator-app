/* eslint-disable indent */
import { IAdminAction, ClearError } from '@/interfaces/admin-type-action';
import { AdminSummaryType } from '@/redux/constants/admin-constant';
import { IAdminSummaryData } from '@/interfaces/data-type';

const adminSummaryInitialState = {
  loading: false,
  error: null,
  availableVaccineDose: 0,
  totalPlace: 0,
  totalUser: 0,
  userVaccinated: 0,
  latestVaccineLot: [],
  userVaccinatedAnalyst: {
    totalUser: 0,
    userWithAboveTwoDose: 0,
    userWithOneDose: 0,
    userWithZeroDose: 0,
  },
} as IAdminSummaryData;

export const adminSummaryReducer = (
  state: IAdminSummaryData = adminSummaryInitialState,
  action: IAdminAction
) => {
  switch (action.type) {
    case AdminSummaryType.ADMIN_FETCH_SUMMARY_DATA_REQUEST:
      return Object.assign({}, { ...state }, { loading: true });
    case AdminSummaryType.ADMIN_FETCH_SUMMARY_DATA_SUCCESS:
      return Object.assign(
        {},
        { ...state },
        { ...action.payload, loading: false }
      );
    case AdminSummaryType.ADMIN_FETCH_SUMMARY_DATA_FAIL:
      return Object.assign(
        {},
        { ...state },
        { error: action.payload, loading: false }
      );

    case ClearError.CLEAR_ERRORS:
      return { ...state, error: null, loading: false };
    default:
      return state;
  }
};
