// export interface ContentDto {
//     id: number;
//     videoTitle: string;
//     videoUrl: string;
//     comment: string;
//     rating: number;
//     thumbnailUrl: string;
//     creatorName: string;
//     creatorUrl: string;
//     postedBy: UserDto;
//     createdAt: string;
//     updatedAt: string;
//   }

export interface DocumentDto {
  id: number,
  docsType: number,
  docsName: string,
  day: number,
  month: number,
  year: number,
  course1: string,
  course2: string,
  course3: string,
}

export interface InfoDto {
  title: number,
  name: string,
  surname: string,
}

export interface WithdrawalDto {
  docsName: string,
  name: string,
  surname: string,
  studentId: string,
  faculty: string,
  department: string,
  studySystem: string,
  tel: string,
  email: string,
  semester: string,
  gpax: string,
  status: string,
  credit: string,
  course1: string,
  course2: string,
  course3: string,
  reason1: string,
  reason2: string,
  reason3: string,
}


export interface UserDto {
  username: string;
  name: string;
  registeredAt: string;
}

export interface CredentialDto {
  accessToken: string;
}

export interface ErrorDto {
  statusCode: number;
  message: string;
  error: string;
}