declare module 'react' {
  export const useState: <T = any>(initial?: T | (() => T)) => [T, (v: T | ((prev: T) => T)) => void];
  export const useEffect: (effect: () => void | (() => void), deps?: any[]) => void;
  export const useRef: <T = any>(initial?: T | null) => { current: T | null };
  export const useCallback: <T extends (...args: any[]) => any>(cb: T, deps: any[]) => T;
  export const useMemo: <T>(fn: () => T, deps: any[]) => T;
  export const useContext: <T>(context: any) => T;
  export const createContext: <T = any>(initial?: T) => any;
  export type FC<P = {}> = (props: P & { children?: ReactNode }) => ReactNode;
  export type ReactNode = any;
  export type ReactElement = any;
  export type CSSProperties = any;
  export type HTMLAttributes<T = any> = { [key: string]: any };
  export type ComponentProps<T> = T extends (props: infer P) => any ? P : never;
  export type KeyboardEvent<T = Element> = any;
  export type ChangeEvent<T = Element> = { target: { value?: any; checked?: boolean; [key: string]: any }; [key: string]: any };
}
