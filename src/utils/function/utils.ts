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

export const getLocalStorageItem = (key: string): string | null => {
   const strItem = window.localStorage.getItem(key);
   let item = "";

   try {
      item = strItem ? JSON.parse(strItem) : null;
   } catch (err) {
      console.error(err);
   } finally {
      return item;
   }
};

export const setItemInLocalStorage = (key: string, value: any) => {
   try {
      const strItem = JSON.stringify(value);
      window.localStorage.setItem(key, strItem);
   } catch (err) {
      console.error(err);
   }
};
