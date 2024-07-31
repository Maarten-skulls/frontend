export type AtomImageAttributes = {
    height: number;
    width: number;
    alternativeText: string;
    url: string;
}

export type AtomImageData = {
    attributes: AtomImageAttributes;
} | {
    data: {
        attributes: AtomImageAttributes;
    }
}