export const getRoute = (url: string, basePath: string) => {
    return url.replace("'\'", "").replace(basePath, "");
};
