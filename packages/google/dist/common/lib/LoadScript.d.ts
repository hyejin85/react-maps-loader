import { FC, PropsWithChildren } from 'react';

interface LoadScriptProps {
    apiKey: string;
    isGoogle: boolean;
    initMap: () => void;
}
declare const LoadScript: FC<LoadScriptProps & PropsWithChildren>;
export default LoadScript;
