import { IRootState } from "./types";

export const initialState: IRootState = {
  attendExam: [],
  createExam: [],
  attendees: [],
  notifications: [],
  report: [],
  questions: [],
  profile: {
    fullname: '',
    username: '',
    profilePicUrl: '',
    location: '',
    mobile: '',
    socialMediaLinks: [],
  },
};
