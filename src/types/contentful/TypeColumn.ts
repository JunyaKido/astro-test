import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeShopSkeleton } from "./TypeShop";

export interface TypeColumnFields {
    title: EntryFieldTypes.Symbol;
    store?: EntryFieldTypes.EntryLink<TypeShopSkeleton>;
    img?: EntryFieldTypes.AssetLink;
    post_content?: EntryFieldTypes.RichText;
}

export type TypeColumnSkeleton = EntrySkeletonType<TypeColumnFields, "column">;
export type TypeColumn<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeColumnSkeleton, Modifiers, Locales>;
export type TypeColumnWithoutLinkResolutionResponse = TypeColumn<"WITHOUT_LINK_RESOLUTION">;
export type TypeColumnWithoutUnresolvableLinksResponse = TypeColumn<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeColumnWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeColumn<"WITH_ALL_LOCALES", Locales>;
export type TypeColumnWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeColumn<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeColumnWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeColumn<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
