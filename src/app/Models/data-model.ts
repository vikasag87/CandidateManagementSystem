export class User{
    Id: number;
    username: string;
    password: string;
    FullName: string;
    email: string;
    phone: number;
    address: string;
    dob: Date;
}

export class Candidate{
    id: number;
    name: string;
    email: string;
    phone: number;
    dointerview: Date;
    hr: string;
    interviewer: string;
    selected: boolean;
}