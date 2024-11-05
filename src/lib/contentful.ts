import { createClient } from "contentful";
import type { AssetLink, EntryFieldTypes } from "contentful";

export interface HairCatalog {
    contentTypeId: "catalog",
    fields: {
        title: EntryFieldTypes.Symbol,
        stylingPoint: EntryFieldTypes.RichText,
        comment: EntryFieldTypes.RichText,
        entryDate: EntryFieldTypes.Date,
        img: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>,
        length: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<'length'>>,
        color: EntryFieldTypes.Link<string>,
        taste: EntryFieldTypes.Link<string>,
        face: EntryFieldTypes.Array<string>,
        hard: EntryFieldTypes.Array,
        volume: EntryFieldTypes.Array,
        wavy: EntryFieldTypes.Array,
    }
}

export const contentfulClient = createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
        ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
        : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
