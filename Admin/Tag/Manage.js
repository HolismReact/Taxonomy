import { useState } from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Button from '@mui/material/Button';
import { ItemAction } from '@List'
import { Checks, app, post } from '@Form'
import { Dialog, OkCancel } from '@Panel'

const ManageTags = ({
    entityType,
    entityGuid
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [loadData, setLoadData] = useState(null)
    const [progress, setProgress] = useState(false)

    const save = () => {
        setProgress(true);
        post(`/tagItem/upsert?entityType=${entityType}&entityGuid=${entityGuid}`)
            .then(data => {
                setProgress(false);
                app.success('Tags updated')
                setIsOpen(false)
            }, error => {
                setProgress(false);
                app.error(error)
            })
    }

    const ItemDialog = <Dialog
        title='Manage titles'
        content={<>
            <Checks
                itemsUrl={`/tag/list?entityType=${entityType}`}
                setLoader={loader => setLoadData(loader)}
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

    return <>
        {ItemDialog}
        <ItemAction
            title="Manage tags"
            icon={LocalOfferIcon}
            click={() => {
                loadData()
                setIsOpen(true)
            }}
        />
    </>
}

export default ManageTags