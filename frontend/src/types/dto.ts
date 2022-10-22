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
  name: string,
  day: number,
  month: number,
  year: number,
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