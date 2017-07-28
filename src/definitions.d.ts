declare module 'react-native-camera' {
    const Camera:any
    export default Camera
}

declare module 'react-native-svg' {
    const Svg:any
    export var Path:any
    export default Svg
}

declare interface Action {
    type: string
    payload?: any
}