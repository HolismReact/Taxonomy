import { useState } from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { ItemAction } from '@List'
import { DialogForm, Checks, app, post } from '@Form'

const ManageTags = ({
    entityType,
    entityGuid,
    ...rest
}) => {

    const [chosenValues, setChosenValues] = useState([])

    const inputs = <>
        <Checks
            itemsUrl={`/tag/entityTypeTags?entityType=${entityType}`}
            checkedItemsUrl={`/entityTag/list?entityType=${entityType}&entityGuid=${entityGuid}`}
            show={item => item.name}
            choose={item => item.tagGuid || item.guid}
            set={setChosenValues}
        />
    </>

    const save = ({ setProgress }) => {
        console.log(chosenValues)
        setProgress(true);
        post(`/entityTag/putInTags?entityType=${entityType}&entityGuid=${entityGuid}`, chosenValues)
            .then(data => {
                setProgress(false);
                app.success('Tags updated')
                app.emit(app.itemUpserted);
            }, error => {
                setProgress(false);
                app.error(error)
            })
    }

    const TagsDialog = (item) => <DialogForm
        entityType="Tag"
        title="Manage tags"
        inputs={inputs}
        okAction={save}
    />

    return <>
        <ItemAction
            {...rest}
            title="Manage tags"
            icon={LocalOfferIcon}
            dialog={TagsDialog}
        />
    </>
}

export default ManageTags