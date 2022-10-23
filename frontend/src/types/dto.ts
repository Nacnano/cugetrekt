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
  docType: number,
  name: string,
  day: number,
  month: number,
  year: number,
  subject_1: string,
  subject_2: string
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