import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface Props {
    children: string;
}

export default function JsonCodeBlock({ children }: Props): JSX.Element {
    return (
        <SyntaxHighlighter
            language="json"
            style={JsonHighlighterTheme}
            lineNumberStyle={JsonLineNumberStyle}
            lineNumberContainerStyle={JsonLineNumberContainerStyle}
            showLineNumbers
        >
            {children}
        </SyntaxHighlighter>
    );
}

export const JsonLineNumberStyle: React.CSSProperties = {
    color: 'grey',
    opacity: 0.5,
};

export const JsonLineNumberContainerStyle: React.CSSProperties = {
    color: 'greenyellow',
};

export const JsonHighlighterTheme: {
    [key: string]: React.CSSProperties;
} = {
    'hljs-attr': {
        color: 'white',
    },
    'hljs-string': {
        color: 'white',
    },
    hljs: {
        display: 'block',
        overflowX: 'auto',
        background: 'black',
        color: 'white',
        padding: '12px',
        lineHeight: 1.5,
        fontSize: 8,
    },
};
