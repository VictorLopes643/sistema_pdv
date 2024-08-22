import { ReactNode } from 'react';

type DefaultLayoutProps = {
    children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return <>{children}</>;
};

export default DefaultLayout;