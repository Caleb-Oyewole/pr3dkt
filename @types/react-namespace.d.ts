declare namespace React {
  type ReactNode = any;
  type ReactElement = any;
  type KeyboardEvent<T = Element> = any;
  type MouseEvent<T = Element> = any;
  type ChangeEvent<T = Element> = { target: { value?: any; checked?: boolean; [key: string]: any }; [key: string]: any };
  type FormEvent<T = Element> = any;
  type CSSProperties = any;
  type HTMLAttributes<T = any> = { [key: string]: any };
  type ComponentProps<T> = T extends (props: infer P) => any ? P : never;
}
