import * as yup from "yup"

export const createTaskSchema = yup.object().shape({
    taskName : yup.string().required("Task name is a required"),
    state : yup.string().required("State is a required"),
    dateStart : yup.date().required("Date Start is required"),
    dateEnd : yup.date().required('End Date is required')
        .when('dateStart', (dateStart, schema) => {
            return schema.min(dateStart, 'End Date must be greater than Start Date');
        }),
    description : yup.string(),
    isImportant :yup.boolean().default(false)
})


export const createCheckListSchema = yup.object().shape({
    title : yup.string().required("Checklist title is a required"),
    dateEnd : yup.date().required('End Date is required'),
})
