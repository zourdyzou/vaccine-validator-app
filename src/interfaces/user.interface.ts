import { Controllers } from './root';

export interface UserController extends Controllers {
  getSingleUser(): void;
  getAllUser(): void;
}
