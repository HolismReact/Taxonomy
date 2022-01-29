import { useState, useEffect } from 'react'
import { Form, LongText, Progress, app, get, post } from '@Form'

const ManageTags = (entity) => {

    const [loading, setLoading] = useState(true)
    const [tags, setTags] = useState(null)
    const [tagItems, setTagItems] = useState(null)

    const loadTags = () => {
        setLoading(true)
        get(`/tag/list?entityType=${entity.relatedItems.entityType}`)
            .then(data => {
                setTags(data)
            }, error => {
                setLoading(false)
                app.error(error)
            })
    }

    const loadTagItems = () => {
        setLoading(true)
        get(`/tagItem/list?entityType=${entity.relatedItems.entityType}&entityGuid=${entity.guid}`).then(data => {
            setTagItems(data)
        }, error => {
            setLoading(false)
            app.error(error)
        })
    }

    useEffect(() => {
        loadTags()
        loadTagItems()
    }, [])

    useEffect(() => {
        if (tags && tags.length && tagItems && tagItems.length) {
            setLoading(false)
        }
    }, [tagItems, tags])

    return <Form
        entityType='TagItem'
        title='Manage tags'
        inputs={<>
            {
                loading
                    ?
                    <Progress />
                    :
                    <LongText
                        column='something'
                    />
            }
        </>}
        okAction={({ setProgress }) => {
            setProgress(true);
            post(`/tagItem/upsert?entityType=${entity.relatedItems.entityType}&entityGuid=${entity.guid}`)
                .then(data => {
                    setProgress(false);
                    app.success('Tags updated')
                    app.emit(app.entityReloadRequested, { entity })
                }, error => {
                    setProgress(false);
                    app.error(error)
                })
        }}
    />
}

export default ManageTags