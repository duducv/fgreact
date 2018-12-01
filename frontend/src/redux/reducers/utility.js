export const UpdateObject = (OldObject, ObjectToUpdate) => {
  return {
    ...OldObject,
    ...ObjectToUpdate
  }
}
