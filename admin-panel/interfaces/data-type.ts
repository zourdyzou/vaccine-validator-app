export interface IAdminSummaryData {
  availableVaccineDose: number;
  totalPlace: number;
  totalUser: number;
  userVaccinated: number;
  userVaccinatedAnalyst: IUserVaccinationAnalysis;
  latestVaccineLot: ILatestVaccineLot[];
}

export interface IUserVaccinationAnalysis {
  totalUser: number;
  userWithAboveTwoDose: number;
  userWithOneDose: number;
  userWithZeroDose: number;
}

export interface ILatestVaccineLot {
  createdAt: string;
  id: string;
  name: string;
  quantity: number;
  updatedAt: string;
  vaccinated: number;
  vaccine: IVaccineData;
  __v: number;
  _id: string;
}

export interface IVaccineData {
  createdAt: string;
  id: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface IUserData {
  phoneNumber: string;
  fullName: string;
  idNumber: string;
  address: string;
  vaccine: IVaccineData[];
  __v: number;
  _id: string;
  id: string;
}

export type TypedUserParams = Pick<
  IUserData,
  'phoneNumber' | 'fullName' | 'address' | 'idNumber'
>;

export interface IVaccinated {
  userId: string;
  vaccineId: string;
  vaccineLotId: string;
}
