import { useState } from 'react'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import { ItemAction } from '@List'
import { DialogForm, Checks, app, post } from '@Form'

const ManageHierarchies = ({
    pluralName,
    entityType,
    entityGuid,
    ...rest
}) => {

    const [chosenValues, setChosenValues] = useState([])

    const inputs = <>
        <Checks
            itemsUrl={`/hierarchy/entityTypeHierarchies?entityType=${entityType}`}
            checkedItemsUrl={`/entityHierarchy/list?entityType=${entityType}&entityGuid=${entityGuid}`}
            show={item => item.name}
            choose={item => item.hierarchyGuid || item.guid}
            set={setChosenValues}
        />
    </>

    const save = ({ setProgress }) => {
        console.log(chosenValues)
        setProgress(true);
        post(`/entityHierarchy/putInHierarchies?entityType=${entityType}&entityGuid=${entityGuid}`, chosenValues)
            .then(data => {
                setProgress(false);
                app.success(`${pluralName || "Hierarchies"} updated`)
                app.emit(app.itemUpserted);
            }, error => {
                setProgress(false);
                app.error(error)
            })
    }

    const HierarchiesDialog = (item) => <DialogForm
        entityType="Hierarchy"
        title={`Manage ${pluralName || "hierarchies"}`}
        inputs={inputs}
        okAction={save}
    />

    return <>
        <ItemAction
            {...rest}
            title={`Manage ${pluralName || "hierarchies"}`}
            icon={AccountTreeIcon}
            dialog={HierarchiesDialog}
        />
    </>
}

export default ManageHierarchies