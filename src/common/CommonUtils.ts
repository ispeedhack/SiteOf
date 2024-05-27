import { Nil } from './CommonTypes';

export const APP_TITLE = 'Toy-Shop';
export const APP_DESCRIPTION = `${APP_TITLE} обирай найкраще з нами!`;


export const createMockArray = (length: number) => {
  return Array.from(Array(length).keys());
};

export const isNil = (val: unknown): val is Nil => {
  return val === null || val === undefined;
};
