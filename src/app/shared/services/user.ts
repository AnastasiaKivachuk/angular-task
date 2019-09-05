export class User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  role?: Roles;
  constructor(authData) {
    this.role    = { reader: true }
  };
}

export interface Roles {
  reader: boolean;
  author?: boolean;
  admin?: boolean;
}


