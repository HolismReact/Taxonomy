import { useState } from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { ItemAction } from '@List'
import { Checks, app, post } from '@Form'
import { Dialog, OkCancel } from '@Panel'

const ManageTags = ({
    entityType,
    entityGuid
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [progress, setProgress] = useState(false)
    const [chosenValues, setChosenValues] = useState([])

    const save = () => {
        console.log(chosenValues)
        setProgress(true);
        post(`/tagItem/putInTags?entityType=${entityType}&entityGuid=${entityGuid}`, chosenValues)
            .then(data => {
                setProgress(false);
                app.success('Tags updated')
                setIsOpen(false)
            }, error => {
                setProgress(false);
                app.error(error)
            })
    }

    return <>
        <Dialog
            title='Manage tags'
            content={<>
                <Checks
                    itemsUrl={`/tag/entityTypeTags?entityType=${entityType}`}
                    checkedItemsUrl={`/tagItem/list?entityType=${entityType}&entityGuid=${entityGuid}`}
                    show={item => item.name}
                    choose={item => item.tagGuid || item.guid}
                    set={setChosenValues}
                />
            </>}
            actions={<OkCancel
                progress={progress}
                okClick={() => save()}
                cancelClick={() => setIsOpen(false)}
            />}
            isOpen={isOpen}
            onEntered={() => {
            }}
        />
        <ItemAction
            title="Manage tags"
            icon={LocalOfferIcon}
            click={() => {
                setIsOpen(true)
            }}
        />
    </>
}

export default ManageTags