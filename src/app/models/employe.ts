export interface Employe { 
        id: number,
        firstname: string,
        lastname: string,
        username: string,
        nnid: string,
        fatherName: string,
        birthDate: string,
        birthPlace: string,
        access_number: string,
        tenant: string,
        active: boolean,
        status: boolean,
        email: string,
        internship: boolean,
        password: string,
        unit: Unit
    }

    export interface Unit {
        id: number,
        name: string,
        description: string,
        parent_id: number
    }