export type ImageUploaderProps = {
    setter: ( state: any ) => void;
};

export type InputProps = {
    label: string;
    name: string;
    setter: ( state: any ) => void;
};

export type Clown = {
    image: string;
    neighboorhood: string;
    years: number;
    name: string;
    favorite: string;
};


export type WizardProps = {
    children?: [ JSX.Element ] | JSX.Element;
    headerBreakpoint: number;
    progressStepsWidth: number;
    showHeader?: boolean;
    error?: boolean;
};

type WizardFunctions = {
    next: () => void;
    prev: () => void;
};
export type StepProps = {
    wizard?: WizardFunctions;
    children: JSX.Element | [ JSX.Element ];
    last?: boolean;
    title?: string;
    onLast?: () => void;
};

