import moment from "moment";
import momentLoc from "../moment";

export const fromNowFormat = (date: Date) => {
   momentLoc();
   return moment(date).fromNow(true);
};

export const dateFormated = (date: Date, format: string) => {
   momentLoc();
   return moment(date).format(format);
};
