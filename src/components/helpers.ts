export const getRoute = (url: string, basePath: string) => {
    return url.replace("'\'", "").replace(basePath, "") || "/";
};

export function getWidgetContent(widgetId: string, appSettings: any): object[] {
    const widgets: string[] = appSettings.widgets[widgetId];
    const content: object[] = [];
    widgets.forEach((widget: string) => {
        const wKey = widget.split("-");
        content.push(appSettings["widgets_" + wKey[0]] ? appSettings["widgets_" + wKey[0]][wKey[1]] : "");
    });
    return content;
}
