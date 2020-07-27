export interface IUserResults {
    results: IUserInfo[];
    info: IUserInformation;
};

export interface IUserInfo {
    gender: string;
    name: IUserName;
    location: IUserLocation;
    email: string;
    login: IUserLogin;
    dob: IUserDob;
    registered: IUserDob;
    phone: string;
    cell: string;
    id: IUserId;
    picture: IUserPicture;
    nat: string;
};

interface IUserName {
    title: string;
    first: string;
    last: string;
}

interface IUserLocation {
    street: IUserStreet;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: IUserCoordinates;
    timezone: IUserTimeZone;
}

interface IUserStreet {
    numbers: number;
    name: string;
}

interface IUserCoordinates {
    latitude: string;
    longitude: string;
}

interface IUserTimeZone {
    offset: string;
    description: string;
}

interface IUserDob {
    date: string;
    age: number;
}

interface IUserId {
    name: string;
    value?: string;
}

interface IUserPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface IUserLogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string
}

interface IUserInformation {
    seed: string;
    results: number;
    page: number;
    version: string;
}