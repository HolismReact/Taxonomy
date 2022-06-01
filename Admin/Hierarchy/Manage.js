import { useState } from 'react'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import { ItemAction } from '@List'
import { Checks, app, post } from '@Form'
import { Dialog, OkCancel } from '@Panel'

const ManageHierarchies = ({
    pluralName,
    entityType,
    entityGuid,
    ...rest
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [progress, setProgress] = useState(false)
    const [chosenValues, setChosenValues] = useState([])

    const save = () => {
        console.log(chosenValues)
        setProgress(true);
        post(`/entityHierarchy/putInHierarchies?entityType=${entityType}&entityGuid=${entityGuid}`, chosenValues)
            .then(data => {
                setProgress(false);
                app.success(`${pluralName || 'Hierarchies'} are updated`)
                setIsOpen(false)
            }, error => {
                setProgress(false);
                app.error(error)
            })
    }

    return <>
        <Dialog
            title='Manage hierarchies'
            content={<>
                <Checks
                    itemsUrl={`/tag/entityTypeTags?entityType=${entityType}`}
                    checkedItemsUrl={`/entityTag/list?entityType=${entityType}&entityGuid=${entityGuid}`}
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
            {...rest}
            title="Manage hierarchies"
            icon={AccountTreeIcon}
            click={() => {
                setIsOpen(true)
            }}
        />
    </>
}

export default ManageHierarchies