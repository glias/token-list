export interface NervosTokenSchema {
    typeScript: TypeScript | null;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
}

export interface TypeScript {
    codeHash: string;
    hashType: 'data' | 'type';
    args: string;
}
