declare module 'react' {
  export const useState: <T = any>(initial?: T | (() => T)) => [T, (v: T | ((prev: T) => T)) => void];
  export const useEffect: (effect: () => void | (() => void), deps?: any[]) => void;
  export const useRef: <T = any>(initial?: T | null) => { current: T | null };
  export const useCallback: <T extends (...args: any[]) => any>(cb: T, deps: any[]) => T;
  export const useMemo: <T>(fn: () => T, deps: any[]) => T;
  export const useContext: <T>(context: any) => T;
  export const useReducer: <S, A>(reducer: (state: S, action: A) => S, initial: S) => [S, (action: A) => void];
  export const createContext: <T = any>(initial?: T) => any;
  export const memo: <P extends object>(component: any, propsAreEqual?: (prev: P, next: P) => boolean) => any;
  export const lazy: <T extends (props: any) => any>(loader: () => Promise<{ default: T }>) => T;
  export const Suspense: any;
  export const Fragment: any;
  export type FC<P = {}> = (props: P & { children?: ReactNode }) => ReactNode;
  export type ReactNode = any;
  export type ReactElement = any;
  export type CSSProperties = any;
  export type HTMLAttributes<T = any> = { [key: string]: any };
  export type ComponentProps<T> = T extends (props: infer P) => any ? P : never;
  export type KeyboardEvent<T = Element> = any;
  export type ChangeEvent<T = Element> = { target: { value?: any; checked?: boolean; [key: string]: any }; [key: string]: any };
  export type MouseEvent<T = Element> = any;
  export type FormEvent<T = Element> = any;
}
