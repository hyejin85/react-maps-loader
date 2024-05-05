import { FC, PropsWithChildren } from 'react';

interface LoadScriptProps extends PropsWithChildren {
    apiKey: string;
    isGoogle: boolean;
    initMap: () => void;
}
declare const LoadScript: FC<LoadScriptProps>;
export default LoadScript;
