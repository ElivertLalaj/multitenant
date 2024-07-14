export interface Login {
  tenant: string,
  username: string,
  password: string
}


export interface TokenResponse {
  success: boolean;
  message: null | string;
  data: {
    accessToken: string;
    token: string;
  };
}

