import { useState, useEffect } from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Button from '@mui/material/Button';
import { ItemAction } from '@List'
import { Form, Checks, Progress, Actions, app, get, post } from '@Form'
import { Dialog } from '@Panel'

const ManageTags = ({
    entityType,
    entityGuid
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [tags, setTags] = useState(null)
    const [tagItems, setTagItems] = useState(null)

    const loadTags = () => {
        setLoading(true)
        get(`/tag/list?entityType=${entityType}`)
            .then(data => {
                setTags(data)
            }, error => {
                setLoading(false)
                app.error(error)
            })
    }

    const loadTagItems = () => {
        setLoading(true)
        get(`/tagItem/list?entityType=${entityType}&entityGuid=${entityGuid}`).then(data => {
            setTagItems(data)
        }, error => {
            setLoading(false)
            app.error(error)
        })
    }

    const save = () => {
        setLoading(true);
        post(`/tagItem/upsert?entityType=${entityType}&entityGuid=${entityGuid}`)
            .then(data => {
                setLoading(false);
                app.success('Tags updated')
                setIsOpen(false)
            }, error => {
                setLoading(false);
                app.error(error)
            })
    }

    useEffect(() => {
        if (tags && tags.length && tagItems && tagItems.length) {
            setLoading(false)
        }
    }, [tagItems, tags])

    const actions = <>
        <Button
            tabIndex={-1}
            className="text-gray-900 border-gray-400 "
            variant="outlined"
            onClick={() => setIsOpen(false)}
        >
            {app.t('Cancel')}
        </Button>
        <Button
            variant="outlined"
            className='ml-2 bg-green-200 text-gray-900 border-gray-400'
            onClick={(e) => { }}
        >
            {app.t('Save')}
        </Button>
    </>

    const ItemDialog = <Dialog
        title='Manage titles'
        content={<>
            hello
        </>}
        actions={actions}
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
                loadTags()
                loadTagItems()
                setIsOpen(true)
            }}
        />
    </>
}

export default ManageTags