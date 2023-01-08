export const ConvertImageRatio = (width,height_relation) => {
    if (width >= 480) {
        return 480 / height_relation
    } else {
        return width / height_relation
    }
}