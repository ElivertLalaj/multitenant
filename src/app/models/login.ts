export interface Login {
  tenant: string,
  username: string,
  password: string
}


export interface TokenResponse {
  success: boolean;
  error: null | string ;
  data: {
    accessToken: string;
    token: string;
  };
}

