/**
 * Root State
 */

export interface IAttendees {
  name: string;
  value: number;
}

export interface IUser {
  username: string;
  fullname: string;
  profilePicUrl: string;
  location: string;
  socialMediaLinks: string[];
  mobile: string;
}

export interface ICreateExam {
  question: string;
  options: string[];
}

export interface IAttendExam {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export interface IReport {
  title: string;
  totalQuestions: number;
  totalAttendees: number;
  averageCorrectAnswers: number;
  viewAllAnswers: number;
}

export interface INotifications {
  fullname: string;
  message: string;
  profilePicUrl: string;
  messageAt: number;
}

export interface IQuestions {
  question: string;
  options: string[];
}

export interface IRootState {
  createExam: ICreateExam[];
  attendExam: IAttendExam[];
  attendees: IAttendees[];
  questions: IQuestions[];
  report: IReport[];
  notifications: INotifications[];
  profile: IUser;
}
