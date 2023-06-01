

  export interface User {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
  }

  export interface ResponseUsers {
      page: number;
      per_page: number;
      total: number;
      total_pages: number;
      data: User[];
  }

//modelos para a criacao
    export interface RequestCreate {
        name: string;
        job: string;
        last_name:string;
        email:string;
        age:string;
        
        
    }


    export interface ResponseCreate {
        name: string;
        job: string;

        
        createdAt: Date;
    }

//Modelos para o get User

export interface ResponseUser{
    data: User
}

//modelos para o update
export interface RequestUpdate {
    name: string;
    job: string;
    last_name: string;
    email: string;
    age: string;
}


export interface ResponseUpdate {
    updatedAt: any;
    name: string;
    job: string;
    last_name: string;
    email: string;
    age: string;
    updateAt: Date;
}
