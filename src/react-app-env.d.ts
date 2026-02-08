/// <reference types="react-scripts" />

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

// Fix for framer-motion JSX types with React 18
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      variants?: any;
      initial?: any;
      animate?: any;
      exit?: any;
      whileHover?: any;
      whileTap?: any;
      whileInView?: any;
      viewport?: any;
      transition?: any;
    }
  }
}
