export const buildFormData = (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        if (value === null || value === undefined) return;

        if (value instanceof Date) {
            formData.append(key, value.toISOString());
        } else if (value instanceof File) {
            formData.append(key, value);
        } else if (Array.isArray(value) && value.length && value[0] instanceof File) {
            value.forEach((file) => {
                formData.append(key, file);
            });
        } else if (
            typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean"
        ) {
            formData.append(key, value);
        } else {
            formData.append(key, JSON.stringify(value));
        }
    });
    return formData;
};