export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
   
  export const fetchUsers = () => {
    return client.get<User[]>("/users", {
      baseURL: "https://api.service.com/v3/",
    });
  };