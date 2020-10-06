import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

// build a custom sidebar
export default function Sidebar() {
    return S.list().title(`Slick's Slices`).items([
        // create a new sub item
        S.listItem().title('Home Page').icon(()=> <strong>🔥</strong>).child(
            // make a new document ID
            S.editor().schemaType('storeSettings').documentId('downtown')
        ),
        // add in the rest of our document items
        ...S.documentTypeListItems().filter(item => item.getId() !== 'storeSettings'),
    ])
}