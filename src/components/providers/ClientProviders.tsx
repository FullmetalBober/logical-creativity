import React from 'react';

interface ClientProvidersProps {
    children: React.ReactNode;
}

export default function ClientProviders({children}: ClientProvidersProps) {
    return (
        <>{children}</>
    );
}