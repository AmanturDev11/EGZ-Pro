/* eslint-disable @typescript-eslint/no-unused-vars */
namespace DATA {
  type GetDataRequest = void;
  type GetDataResponse = {
    id: number;
    name: string;
    Surname: string;
    role: string;
    admin: string
  }[];

  type PostDataRequest = {
    id?: number;
    name: string;
    Surname: string;
    role: string;
    admin: string
  };
  type PostDataResponse = {
    id?: number;
    name: string;
    Surname: string;
    role: string;
    admin: string
  }[];

  
}