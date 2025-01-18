declare module '*.glb' {
    const src: string
    export default src
}

declare module '*.svg' {
    const src: string
    export default src
}

declare module '*.png' {
    const src: string
    export default src
}

declare module '*.jpg' {
    const src: string
    export default src
}

declare module '*.mp3' {
    const src: string
    export default src
}

interface ImportMetaEnv {
    readonly VITE_APP_EMAILJS_SERVICE_ID: string
    readonly VITE_APP_EMAILJS_TEMPLATE_ID: string
    readonly VITE_APP_EMAILJS_PUBLIC_KEY: string
    // Add other environment variables here
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}