export interface Controllers {
  create(): void;
  update(): void;
  delete(): void;
}

export interface AdminController {
  summary(): void;
  login(): void;
}
