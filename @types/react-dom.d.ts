declare module 'react-dom' {
  export function createRoot(container: any): { render: (element: any) => void };
  export function render(element: any, container: any): void;
}
