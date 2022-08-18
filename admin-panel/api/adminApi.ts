import axiosClient from './axiosClient';
import { IAdminSummaryData } from '@/interfaces/data-type';

export const adminApi = {
  getSummary: () => axiosClient.get<IAdminSummaryData>('admin/summary'),
};
