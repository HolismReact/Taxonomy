import { Form, Text } from '@Form'

const inputs = <>
    <Text
        column='Name'
        placeholder='Name'
        required="You have not provided a name"
    />
</>

const UpsertTag = () => {
    return <Form
        title='Tag'
        entityType='Tag'
        inputs={inputs}
    />
}

export default UpsertTag