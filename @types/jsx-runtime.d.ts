declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
  const jsx: any;
  const jsxs: any;
  const Fragment: any;
}
