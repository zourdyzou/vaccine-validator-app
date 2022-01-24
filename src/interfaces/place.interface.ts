import { Controllers } from './root';

export interface PlaceController extends Controllers {
  getSinglePlace(): void;
  getAllPlace(): void;
}
