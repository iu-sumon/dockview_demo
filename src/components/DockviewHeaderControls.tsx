// DockviewHeaderControls.tsx
import React from 'react';
import { IDockviewHeaderActionsProps } from 'dockview';

const Icon = (props: {
    icon: string;
    title?: string;
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
}) => {
    return (
        <div 
            title={props.title} 
            className={`action ${props.className || ''}`} 
            onClick={props.onClick}
            style={{ 
                cursor: 'pointer', 
                padding: '4px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
        >
            <span
                style={{ fontSize: '18px' }}
                className="material-symbols-outlined"
            >
                {props.icon}
            </span>
        </div>
    );
};

export const DockviewHeaderControls = (props: IDockviewHeaderActionsProps) => {
    const [isMaximized, setIsMaximized] = React.useState<boolean>(
        props.containerApi.hasMaximizedGroup()
    );

    const [isPopout, setIsPopout] = React.useState<boolean>(
        props.api.location.type === 'popout'
    );

    React.useEffect(() => {
        const disposable = props.containerApi.onDidMaximizedGroupChange(() => {
            setIsMaximized(props.containerApi.hasMaximizedGroup());
        });

        const disposable2 = props.api.onDidLocationChange(() => {
            setIsPopout(props.api.location.type === 'popout');
        });

        return () => {
            disposable.dispose();
            disposable2.dispose();
        };
    }, [props.containerApi, props.api]);

    const handleMaximizeClick = () => {
        if (props.containerApi.hasMaximizedGroup()) {
            props.containerApi.exitMaximizedGroup();
        } else {
            props.activePanel?.api.maximize();
        }
    };

    const handlePopoutClick = () => {
        if (props.api.location.type !== 'popout') {
            props.containerApi.addPopoutGroup(props.group);
        } else {
            // If already in popout, move back to main window
            props.api.moveTo({ position: 'right' });
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0px 8px',
                height: '100%',
            }}
        >
            {/* Popout/Close Window Button */}
            <Icon
                title={isPopout ? 'Close Window' : 'Open In New Window'}
                icon={isPopout ? 'close_fullscreen' : 'open_in_new'}
                onClick={handlePopoutClick}
            />
            
            {/* Maximize/Minimize Button (only show in main window) */}
            {!isPopout && (
                <Icon
                    title={isMaximized ? 'Minimize View' : 'Maximize View'}
                    icon={isMaximized ? 'collapse_content' : 'expand_content'}
                    onClick={handleMaximizeClick}
                />
            )}
        </div>
    );
};